import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading, Header } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Homelazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
