import './App.css';
import MainComponent from './components/MainComponent';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Online from './components/order_online/Online';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './components/aboutus/AboutUs.css';
import './components/contactus/ContactUs.css';
import './components/order_online/Online.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/order-online" component={Online} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
