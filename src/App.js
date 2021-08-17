import './App.css';
import MainComponent from './components/MainComponent';
import AboutUs from './components/aboutus/AboutUs';
import { BrowserRouter, Route, Switch,  Link } from "react-router-dom";
import './components/aboutus/AboutUs.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainComponent />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
