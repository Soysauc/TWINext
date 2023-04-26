export const colors = {
  primary: {
    'color': '#fff',
    'backgroundColor': '#072ac6',
    ':hover': {
      backgroundColor: '#072ac6',
    },
    ':focus': {
      backgroundColor: '#072ac6',
    },
  },
  reversed: {
    'color': '#072ac6',
    'backgroundColor': '#fff',
    ':hover': {
      color: '#fff',
      backgroundColor: '#072ac6',
    },
    ':focus': {
      color: '#fff',
      backgroundColor: '#072ac6',
    },
  },
  link: {
    color: 'inherit',
  },
};

export const space = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '32px',
  5: '64px',
  6: '128px',
};

export const fontSizes = {
  0: '12px',
  1: '14px',
  2: '16px',
  3: '18px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
};

export const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const fonts = {
  text: 'Gilroy, "DM Sans", sans-serif, Montserrat',
  heading: '"DM Sans", sans-serif',
  mono: 'DM Mono, Menlo, monospace',
};

export const lineHeights = {
  text: '1.65',
  heading: '1.25',
  tight: '1.1',
  solid: '1',
};

export const letterSpacings = {
  normal: '0',
  tight: '-0.02em',
  wide: '0.08em',
};

export const sizes = {
  container: '100vw',
  narrow: '1024px',
  wide: '1440px',
  tight: '848px',
  avatar: '48px',
  navGroupBoxMin: '300px',
  navGroupBoxMax: '400px',
  navIcon: '32px',
  navIconSmall: '30px',
};

export const radii = {
  button: '10px',
  large: '24px',
  circle: '99999px',
};

export const shadows = {
  large:
    '0px 4px 8px 0px #2E29330A, 0px 4px 24px 0px #2E293314, 0px 8px 24px 0px #473F4F29',
};

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  sizes,
  radii,
  shadows,
};

export default function Button({ variant = 'primary', children, ...props }) {
  const buttonClass = colors[variant];

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
