import { Home } from "./pages/Home/Home";
import { globalStyles } from "./styles/globalStyles";

import "./services/firebase"

function App() {
  globalStyles();
  return (
    <Home />
  );
}

export default App;
