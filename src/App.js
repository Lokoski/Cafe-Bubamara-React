import './App.css';
import MainComponent from './components/MainComponent';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './components/aboutus/AboutUs.css';
import './components/contactus/ContactUs.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
