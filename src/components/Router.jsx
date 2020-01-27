import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./HomePage/Home";
import PageAdherent from "./Adherents/Adherent.page";
import PageSeance from "./Seances/Seance.page";
import PageActivite from "./Activites/Activite.Page";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/activites" component={PageActivite} />
        <Route path="/adherents" component={PageAdherent} />
        <Route path="/seances" component={PageSeance} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
