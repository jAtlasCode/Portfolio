import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

import { StateProvider } from "./state.js";

export default function Index() {
  // const [initialLoad, setInitialLoad] = useState(false);

  ReactGA.initialize("UA-150932664-1");

  let initialState = {
    userData: {
      id: "",
      name: "",
    },
    theme: {
      themeColor: "",
    },
    initialLoad: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "editTheme":
        return {
          ...state,
          theme: action.theme,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
