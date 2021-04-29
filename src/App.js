import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RemainingTiles from "./Components/RemainingTiles";
import TestCards from "./Components/TestCards";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <TestCards />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
