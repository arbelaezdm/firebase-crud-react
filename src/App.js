import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:

import "./App.css";

import Links from "./components/Links";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Links />
      </div>
    </div>
  );
}

export default App;
