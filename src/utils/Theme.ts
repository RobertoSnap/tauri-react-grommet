import { ThemeType } from "grommet";
import { deepFreeze } from "grommet/utils";

export const Theme: ThemeType = deepFreeze({
  rounding: 4,
  spacing: 24,
  defaultMode: "dark",
  global: {
    font: {
      family: "Arial",
    },
    colors: {
      green: {
        light: "#00aa79",
        dark: "#00aa79",
      },
      mint: {
        light: "#cdece2",
        dark: "#cdece2",
      },
      yellow: {
        light: "#E8A74A",
        dark: "#E8A74A",
      },
      red: {
        light: "#cd465e",
        dark: "#cd465e",
      },
      white: {
        light: "#ffffff",
        dark: "#ffffff",
      },
      blue: {
        light: "#0d4fa7",
        dark: "#0d4fa7",
      },
      grey: {
        light: "#f1f1f1",
        dark: "#f1f1f1",
      },
      black: {
        light: "#333333",
        dark: "#333333",
      },
      background: "white",
      "background-back": "white",
      "background-front": "grey",
      "background-contrast": "grey",
      brand: "blue",
      "status-ok": "green",
      "status-warning": "yellow",
      "status-error": "red",
      "status-critical": "red",
      "status-disabled": "mint",
      "status-unknown": "blue",
      focus: "green",
      text: "black",
      control: "brand",
      active: "brand",
      selected: "brand",
      icon: "brand",
    },
    active: {
      color: "#fff",
    },
  },
});
