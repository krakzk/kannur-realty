import { Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home"
import PlotDetailScreen from "../screens/PlotDetailScreen"
import history from "./history";

const Routes = () => {
    return (
        <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Details" component={PlotDetailScreen} />
                </Switch>
            </Router>
    )
}

export default Routes;