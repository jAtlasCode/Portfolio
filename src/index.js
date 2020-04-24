import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import themes from './themes/themes'

import { StateProvider } from './state.js'

// export const darkTheme = {
//   main: {
//     backgroundColor: vars.mainBg,
//   },
//   poly: {
//     background: vars.poly
//   },
//   accent: {
//     background: vars.accent
//   },
//   navdrop: {
//     backgroundColor: 'rgba(13,23,33,1)',
//   },
//   modal: {
//     background: vars.accentBG,
//   },
//   card: {
//     border: '3px solid rgba($color:  rgba(22,43,64,1), $alpha: .7)',
//   },
//   title: { backgroundColor: 'rgba($color: $accent, $alpha: .3)' },
//   whiteFont: { color: 'white' },
// }

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

const themeSetter = mode => (mode === "dark" ? darkTheme : lightTheme)

export default function Index() {

let initialState = {
  userData:{
    id:'',
    name: ''
  },
  theme: {
      themeColor: lightTheme,
  }
}



// const { user } = useAuth0()

const reducer = (state, action) => {
  switch (action.type) {
    case 'editTheme':
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state;
  }
}

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();