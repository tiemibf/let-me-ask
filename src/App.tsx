import { globalStyles } from "./styles/globalStyles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";

import "./services/firebase"


function App() {
  globalStyles();
  return (
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
