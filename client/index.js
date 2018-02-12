import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import {
  Route, hashHistory,
  IndexRoute, Router
} from 'react-router';
import Routes from './routes';

import App from './components/App';
import LoginForm from './components/AuthComponents/LoginForm';
import SignupForm from './components/AuthComponents/SignupForm';
import DashBoard from './components/DashBoard';
import RequireAuth from './components/requireAuth';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});
const apolloClient = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path={Routes.login} component={LoginForm}/>
          <Route path={Routes.signup} component={SignupForm}/>
          <Route path={Routes.dashboard} component={RequireAuth(DashBoard)}/>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
