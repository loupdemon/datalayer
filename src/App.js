import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import Footer from "./components/Footer";
import ContactUpPage from "./pages/contact";
import MentionsUpPage from "./pages/mentions";
import Spot from "./pages/spot";
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/" component={Home} /*exact*//>
        <Route exact path="/contact" component={ContactUpPage} /*exact*//>
        <Route exact path="/mentions" component={MentionsUpPage} /*exact*//>
        <Route exact path="/spot" component={Spot} /*exact*//>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
