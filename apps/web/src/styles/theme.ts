import "styled-components";

export const theme = {
  colors: {
    background: "#050812",
    surface: "#0d1424",
    surfaceMuted: "#111c31",
    border: "#253149",
    text: "#f8fafc",
    textMuted: "#9aa8bd",
    accent: "#38bdf8",
    accentMuted: "#0e7490",
    warning: "#f59e0b"
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif"
  },
  radii: {
    panel: "8px",
    pill: "999px"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem"
  }
} as const;

type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: AppTheme["colors"];
    fonts: AppTheme["fonts"];
    radii: AppTheme["radii"];
    spacing: AppTheme["spacing"];
  }
}
