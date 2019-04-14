import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';
import { Switch, Route} from 'react-router-dom';
const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Project} />
      <Route path="/resume" component={Resume} />
    </Switch>
) 

export default Main;
