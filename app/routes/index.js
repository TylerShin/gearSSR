import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from 'containers/Layout';
import HomeContainer from 'containers/HomeContainer';
import Question from 'containers/Question';
import SignIn from 'containers/SignIn';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}>
        <Route path="signIn" component={SignIn} />
        <Route path="/q/:questionId/:questionTitle" component={Question} />
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  );
}
