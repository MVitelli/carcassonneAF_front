import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RemainingTiles from "./Components/RemainingTiles";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <RemainingTiles />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
