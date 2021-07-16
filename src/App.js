import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/login" component={Login} exact />
            </Switch>
        </main>
    );
}

export default App;
