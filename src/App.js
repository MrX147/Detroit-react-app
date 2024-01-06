// import "./App.css";
// import EsignatureApp from "./projects/01-e-signature-app/EsignatureApp";
// import TemperatureControllerApp from "./projects/02-temperature-controller/TemperatureControllerApp";
import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable no-unused-vars */
import { Button } from "bootstrap";
import DarkTheme from "./projects/03-dark-theme/DarkTheme";

function App() {
  return (
    <div className="App container">
      {/* css file is app.css */}
      {/* <EsignatureApp /> */}
      {/* <TemperatureControllerApp /> */}
      <DarkTheme />
    </div>
  );
}

export default App;
