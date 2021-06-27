import './App.scss';
import { Router } from "@reach/router";

import SolarSystem from '../pages/SolarSystem/SolarSystem'; 

function App() {
  return (
    <div className="app">
      <header className="app_header">
       <h1>Solar System</h1>
      </header>
      <body>
        <Router>
          <SolarSystem path={"/"} />
        </Router>
      </body>
    </div>
  );
}

export default App;
