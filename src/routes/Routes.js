import { Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home"
import PlotDetailScreen from "../screens/PlotDetailScreen"
import PlotsOptionsScreen from "../screens/PlotsOptionsScreen";
import history from "./history";

const Routes = () => {
    return (
        <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/PlotDetails" component={PlotDetailScreen} />
                    <Route path="/AllPlots" component={PlotsOptionsScreen} />
                </Switch>
            </Router>
    )
}

export default Routes;