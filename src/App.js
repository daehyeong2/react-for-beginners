import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/react-for-beginners/movie/:id">
          <Detail />
        </Route>
        <Route path="/react-for-beginners">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
