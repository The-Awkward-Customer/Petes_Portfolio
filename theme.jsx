//Theme file

//core theming

// colors
export const colors = {
  global: {
    black: "#000000", //Black
    white: "#ffffff", //White
  },

  grey: {
    grey_100: "#262626",
    grey_80: "#454545",
    grey_60: "#808080",
    grey_40: "#E0E0E0",
    grey_20: "#F7F7F7",
  },

  yellow: {
    yellow_100: "#FFB802",
  },
};

export const typog = {
  fonts: {
    manrope: "Manrope, sans-serif",
  },
};

export const textStyles = {
  sizes: {
    body: "16px",
    bodyLarge: "24px",
    Variable: "4vh",
    VariableLarge: "6vh",
  },
  lineHeight: {
    relative: "160%",
    fixed: "20",
  },
  weights: {
    reg: "400",
    bold: "800",
  },
};

export const link = {
  default: {
    font: `${typog.fonts.manrope}`,
    weight: `${textStyles.weights.bold}`,
    size: "16",
    lineHeight: "160%",
    color: `${colors.grey.grey_100}`,
    decoration: "none",
  },

  hover: {
    color: `${colors.grey.grey_60}`,
    decoration: "underline 2px solid",
  },

  focused: {
    color: `${colors.grey.grey_100}`,
    decoration: "underline 2px solid",
  },

  visted: {
    color: `${colors.grey.grey_40}`,
  },
};
