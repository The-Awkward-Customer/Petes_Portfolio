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
