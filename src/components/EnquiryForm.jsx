import { useEffect, useRef, useState } from 'react';
import { cakeFlavours, cakeSizes, occasionOptions } from '../data/content.js';
import { siteConfig } from '../data/siteConfig.js';
import { submitEnquiry } from '../services/bakeryService.js';
import { dateFromToday, formatDate } from '../utils/helpers.js';
import {
  MAX_MESSAGE_LENGTH,
  MIN_NOTICE_DAYS,
  validateEnquiry,
  validateField,
} from '../utils/validateEnquiry.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import { AlertIcon, CheckIcon } from './Icons.jsx';
import './EnquiryForm.css';

// The occasion field is not in here because it is owned by the parent
// (CustomCakes), so the occasion cards can pre-select it.
const emptyValues = {
  name: '',
  phone: '',
  email: '',
  date: '',
  size: '',
  flavour: '',
  message: '',
};

// Turns the enquiry into a readable WhatsApp message.
function buildEnquiryMessage(enquiry) {
  const lines = [
    `Hello ${siteConfig.name}! I would like to enquire about a custom cake.`,
    '',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Occasion: ${enquiry.occasion}`,
    `Date needed: ${formatDate(enquiry.date)}`,
    `Size: ${enquiry.size}`,
  ];
  if (enquiry.flavour) lines.push(`Flavour: ${enquiry.flavour}`);
  if (enquiry.message.trim()) lines.push(`Details: ${enquiry.message.trim()}`);
  return lines.join('\n');
}

export default function EnquiryForm({ occasion, onOccasionChange }) {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  // status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [sentEnquiry, setSentEnquiry] = useState(null);
  // Becomes true after the first click on "Send Enquiry", so the error
  // summary only appears once the visitor has tried to submit.
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const formRef = useRef(null);

  // All field values, including the occasion owned by the parent.
  const enquiry = { ...values, occasion };
  const errorCount = Object.keys(errors).length;
  const earliestDate = dateFromToday(MIN_NOTICE_DAYS);

  const setFieldError = (name, message) => {
    setErrors((current) => {
      const next = { ...current };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  // When an occasion card above the form picks the occasion, clear its error.
  useEffect(() => {
    if (occasion) setFieldError('occasion', '');
  }, [occasion]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'occasion') onOccasionChange(value);
    else setValues((current) => ({ ...current, [name]: value }));

    // If this field was showing an error, re-check it as the visitor types.
    if (errors[name]) setFieldError(name, validateField(name, value));
  };

  // Check a field when the visitor leaves it.
  const handleBlur = (event) => {
    const { name, value } = event.target;
    setFieldError(name, validateField(name, value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const foundErrors = validateEnquiry(enquiry);
    setErrors(foundErrors);

    // Stop here if anything is wrong, and move focus to the first problem field.
    const firstInvalidField = Object.keys(foundErrors)[0];
    if (firstInvalidField) {
      setStatus('idle');
      formRef.current?.elements[firstInvalidField]?.focus();
      return;
    }

    setStatus('submitting');
    try {
      // DEMO ONLY: see src/services/bakeryService.js. Nothing is sent to a server.
      await submitEnquiry(enquiry);
      setSentEnquiry(enquiry);
      setStatus('success');
      setValues(emptyValues);
      setSubmitAttempted(false);
      onOccasionChange('');
    } catch {
      setStatus('error');
    }
  };

  const startAgain = () => {
    setSentEnquiry(null);
    setStatus('idle');
  };

  // Shared props for every input, select and textarea.
  const fieldProps = (name) => ({
    id: `enquiry-${name}`,
    name,
    value: enquiry[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `enquiry-${name}-error` : undefined,
  });

  // ----- Success state -----
  if (status === 'success' && sentEnquiry) {
    return (
      <div className="enquiry-form enquiry-success" role="status">
        <span className="enquiry-success__icon">
          <CheckIcon size={30} />
        </span>
        <h3>Almost done, {sentEnquiry.name.trim().split(' ')[0]}!</h3>
        <p>Your details look good. Here is a summary of your enquiry:</p>

        <dl className="enquiry-success__summary">
          <div>
            <dt>Occasion</dt>
            <dd>{sentEnquiry.occasion}</dd>
          </div>
          <div>
            <dt>Date needed</dt>
            <dd>{formatDate(sentEnquiry.date)}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>{sentEnquiry.size}</dd>
          </div>
        </dl>

        <p className="form-notice">
          <AlertIcon size={18} />
          <span>
            <strong>One last step:</strong> tap the button below to send these details to us on
            WhatsApp. We will reply there with a quote.
          </span>
        </p>

        <div className="enquiry-success__actions">
          <WhatsAppButton message={buildEnquiryMessage(sentEnquiry)}>
            Send enquiry on WhatsApp
          </WhatsAppButton>
          <button type="button" className="btn btn--outline" onClick={startAgain}>
            Start a new enquiry
          </button>
        </div>
      </div>
    );
  }

  // ----- The form -----
  return (
    <form
      ref={formRef}
      className="enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="enquiry-form-title"
    >
      <h3 id="enquiry-form-title" className="enquiry-form__title">
        Custom cake enquiry
      </h3>
      <p className="enquiry-form__intro">
        Fields marked with <span className="form-field__required">*</span> are required.
      </p>

      {/* Summary shown when the form was submitted with mistakes */}
      {submitAttempted && errorCount > 0 && (
        <p className="form-alert form-alert--error" role="alert">
          <AlertIcon size={20} />
          <span>
            Please fix {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`}{' '}
            and try again.
          </span>
        </p>
      )}

      {/* Shown if sending fails once a real backend is connected */}
      {status === 'error' && (
        <p className="form-alert form-alert--error" role="alert">
          <AlertIcon size={20} />
          <span>
            Sorry, something went wrong and your enquiry could not be sent. Please try again or
            message us on WhatsApp.
          </span>
        </p>
      )}

      <div className="enquiry-form__grid">
        <FormField name="name" label="Your name" required error={errors.name}>
          <input type="text" autoComplete="name" placeholder="e.g. Aditi Sharma" {...fieldProps('name')} />
        </FormField>

        <FormField name="phone" label="Phone number" required error={errors.phone}>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            {...fieldProps('phone')}
          />
        </FormField>

        <FormField name="email" label="Email" optional error={errors.email} wide>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
        </FormField>

        <FormField name="occasion" label="Occasion" required error={errors.occasion}>
          <select {...fieldProps('occasion')}>
            <option value="">Choose an occasion</option>
            {occasionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField name="date" label="Date needed" required error={errors.date}>
          <input type="date" min={earliestDate} {...fieldProps('date')} />
        </FormField>

        <FormField name="size" label="Cake size" required error={errors.size}>
          <select {...fieldProps('size')}>
            <option value="">Choose a size</option>
            {cakeSizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField name="flavour" label="Preferred flavour" optional error={errors.flavour}>
          <select {...fieldProps('flavour')}>
            <option value="">No preference</option>
            {cakeFlavours.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField name="message" label="Tell us about your cake" optional error={errors.message} wide>
          <textarea
            rows="4"
            placeholder="Theme, colours, message on the cake, eggless, allergies…"
            {...fieldProps('message')}
          />
          <span
            className={`form-field__counter ${
              values.message.length > MAX_MESSAGE_LENGTH ? 'form-field__counter--over' : ''
            }`}
          >
            {values.message.length} / {MAX_MESSAGE_LENGTH}
          </span>
        </FormField>
      </div>

      <button type="submit" className="btn btn--primary enquiry-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Checking your enquiry…
          </>
        ) : (
          'Continue to WhatsApp'
        )}
      </button>

      <p className="form-notice">
        <AlertIcon size={18} />
        <span>
          After this step you will send your enquiry to us on WhatsApp, and we will reply there
          with a quote.
        </span>
      </p>
    </form>
  );
}

// Label + input + error message for one field.
// The input itself is passed in as children.
function FormField({ name, label, required = false, optional = false, error, wide = false, children }) {
  return (
    <div className={`form-field ${wide ? 'form-field--wide' : ''} ${error ? 'form-field--invalid' : ''}`}>
      <label htmlFor={`enquiry-${name}`}>
        {label}
        {required && (
          <span className="form-field__required" aria-hidden="true">
            {' '}
            *
          </span>
        )}
        {required && <span className="visually-hidden"> (required)</span>}
        {optional && <span className="form-field__optional"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`enquiry-${name}-error`} className="form-field__error">
          <AlertIcon size={15} />
          {error}
        </p>
      )}
    </div>
  );
}
