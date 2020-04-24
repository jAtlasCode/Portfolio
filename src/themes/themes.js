const white = "#FFFFFF"
const black = "#1161617"
const gray = "#f8f8f9"

const lightTheme = {
  background: gray,
  body: black
}

const darkTheme = {
  background: black,
  body: white
}

const theme = mode => (mode === "dark" ? darkTheme : lightTheme)

export default theme;