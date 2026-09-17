/** Semantic design tokens — mirror of src/styles/tokens.css */
export const tokens = {
  font: {
    family: { primary: "Manrope, sans-serif" },
    size: {
      xs: "14px",
      sm: "15px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "25px",
      "3xl": "32px",
      "4xl": "48px",
    },
    weight: { base: 600 },
  },
  color: {
    text: {
      primary: "#113d48",
      secondary: "#6e7070",
      tertiary: "#0d0d0c",
      inverse: "#ffffff",
    },
    surface: {
      base: "#000000",
      raised: "#eb6326",
      strong: "#6d358a",
      muted: "#f5f6f6",
      card: "#ffffff",
    },
  },
  motion: {
    instant: "200ms",
    fast: "300ms",
    normal: "400ms",
  },
  radius: { xs: "10px", sm: "48px", md: "50px", pill: "999px" },
} as const;
