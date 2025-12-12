const { createTheme } = require("@mui/material")

//Color Variables
const backgroundColour = "#DAF5FF"
const primaryColour = "#34344A"
const secondaryColour = "#87F6FF"
const textColor = "#007EA7"
const highlightColor = "#AFAAB9"

const backgroundColourDark = "#007EA7"
const primaryColourDark = "#AFAAB9"
const secondaryColourDark = "#34344A"
const textColorDark = "#DAF5FF"
const highlightColorDark = "#87F6FF"

//theme
let theme = createTheme({
    palette : {
        mode : "light",
        background : {
           default: backgroundColour
        },
        primary: {
            main: primaryColour
        },
        secondary: {
            main: secondaryColour
        },
        tertiary: {
            main: highlightColor
        },
        icon: {
            main: textColor
        },
        error: {
            main: "#be2222ff"
        },
    },
});

let darktheme = createTheme({
    palette : {
        mode : "dark",
        background : {
           default: backgroundColourDark
        },
        primary: {
            main: primaryColourDark
        },
        secondary: {
            main: secondaryColourDark
        },
        tertiary: {
            main: highlightColorDark
        },
        icon: {
            main: textColorDark
        },
        error: {
            main: "#be2222ff"
        },
    },
});

export {darktheme};
export { theme };