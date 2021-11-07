import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bazar from "./Bazar";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Home = () => {
 return ( 
    <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bazar" component={Bazar} />
        </Switch>
    </Router>
  );
}
 
export default Home;








