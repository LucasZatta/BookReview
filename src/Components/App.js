import React from "react";
import "../App.css";
import Nav from "./Nav";
import About from "./About";
import TopTen from "./TopTen";
import BookDetail from "./BookDetail";
import WelcomeHome from "./WelcomeHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/top" exact component={WelcomeHome} />
          <Route path="/top/:id" exact component={TopTen} />
          <Route path="/top/:id/:id2" component={BookDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome</h1>
  </div>
);

export default App;
