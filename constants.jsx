// Tokens

export const COLORS = {
  // Primary palette tokens
  primary_100: "#262626",
  primary_80: "#616161",
  primary_60: "#808080",
  primary_40: "#C5C5C5",
  primary_20: "#F0F0F0",
  primary_background: "##FFFFFF",
  primary_Inverse: "#262626",
};

// For margins & padding
export const SPACING = {
  xxs: "4px",
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "48px",
  xxl: "64px",
  widthFill: "10vw",
  heightFill: "100vh",
};

// For text sizes
export const SIZES = {
  //Primary sizes
  xxs: "16",
  xs: "18x",
  s: "24px",
  m: "32px",
  l: "48px",
  xl: "10vw",
  xxl: "20vw",
};

// Breakpoints based on Chrome Dev Tools
export const BREAKPOINTS = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  Desktop: "2560px",
};

// Media Query values
export const device = {
  mobileS: `(min-width: ${BREAKPOINTS.mobileS})`,
  mobileM: `(min-width: ${BREAKPOINTS.mobileM})`,
  mobileL: `(min-width: ${BREAKPOINTS.mobileL})`,
  tablet: `(min-width: ${BREAKPOINTS.tablet})`,
  laptop: `(min-width: ${BREAKPOINTS.laptop})`,
  laptopL: `(min-width: ${BREAKPOINTS.laptopL})`,
  desktop: `(min-width: ${BREAKPOINTS.desktop})`,
  desktopL: `(min-width: ${BREAKPOINTS.desktop})`,
};
