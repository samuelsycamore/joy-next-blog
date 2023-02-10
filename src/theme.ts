import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  fontFamily: {
    body: "'Libre Baskerville', var(--joy-fontFamily-fallback)",
    display: "'Space Mono', var(--joy-fontFamily-fallback)",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#C0CCD9",
          100: "#A5B8CF",
          200: "#6A96CA",
          300: "#4886D0",
          400: "#2178DD",
          500: "#096BDE",
          600: "#1B62B5",
          700: "#265995",
          800: "#2F4968",
          900: "#2F3C4C",
        },
      },
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.

export default theme;
