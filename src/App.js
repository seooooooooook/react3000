import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio"
import Reference from "./components/pages/Reference"
import Script from "./components/pages/Script"
import Youtube from "./components/pages/Youtube"

function App(){
    return(
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/reference" exact component={Reference} />
            <Route path="/script" exact component={Script} />
            <Route path="/youtube" exact component={Youtube} />
        </Router>
    )
}

export default App;