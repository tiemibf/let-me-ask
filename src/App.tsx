import { globalStyles } from "./styles/globalStyles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom"

import "./services/firebase"

function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
