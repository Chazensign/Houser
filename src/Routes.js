import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/step1' component={Step1} />
    <Route path='/step2' component={Step2} />
    <Route path='/step3' component={Step3} />
  </Switch>
)