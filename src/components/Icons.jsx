// Small inline SVG icons used across the site.
// They are decorative by default (aria-hidden), so always pair them with text
// or put an aria-label on the surrounding link or button.

function Icon({ size = 20, children, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <Icon {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path
        d="M9.300 8.200c-.5 2.900 3.600 7 6.500 6.500l.5-1.600-1.700-.9-.8.800c-1.100-.5-2.300-1.700-2.800-2.800l.8-.8-.9-1.700z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path d="M22 16.920v3a2 2 0 0 1-2.180 2 19.790 19.790 0 0 1-8.630-3.070 19.500 19.500 0 0 1-6-6 19.790 19.790 0 0 1-3.070-8.670A2 2 0 0 1 4.110 2h3a2 2 0 0 1 2 1.720 12.840 12.840 0 0 0 .7 2.810 2 2 0 0 1-.45 2.110L8.090 9.910a16 16 0 0 0 6 6l1.270-1.270a2 2 0 0 1 2.110-.45 12.840 12.840 0 0 0 2.810.7A2 2 0 0 1 22 16.920z" />
    </Icon>
  );
}

export function MapPinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function ClockIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function MailIcon(props) {
  return (
    <Icon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.970 5.700a1.940 1.940 0 0 1-2.060 0L2 7" />
    </Icon>
  );
}

export function InstagramIcon(props) {
  return (
    <Icon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.500" y1="6.500" x2="17.510" y2="6.500" />
    </Icon>
  );
}

export function FacebookIcon(props) {
  return (
    <Icon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Icon>
  );
}

export function MenuIcon(props) {
  return (
    <Icon {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </Icon>
  );
}

export function CloseIcon(props) {
  return (
    <Icon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <Icon {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Icon>
  );
}

export function StarIcon(props) {
  return (
    <Icon fill="currentColor" strokeWidth="0" {...props}>
      <polygon points="12 2 15.090 8.260 22 9.270 17 14.140 18.180 21.020 12 17.770 5.820 21.020 7 14.140 2 9.270 8.910 8.260 12 2" />
    </Icon>
  );
}

export function CheckIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function AlertIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.010" y2="16" />
    </Icon>
  );
}

export function SearchIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.300-4.300" />
    </Icon>
  );
}
