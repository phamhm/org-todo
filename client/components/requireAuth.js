import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../GraphQL/queries/CurrentUser';
import RouteManager from '../routeManager';

export default (WrappedComponent) =>{
  class RequireAuth extends Component{
    componentWillUpdate(nextProps){
      console.log (nextProps.data.loading , nextProps.data.user);
      if (!nextProps.data.loading && !nextProps.data.user)
        RouteManager.gotoLogin();
    }

    render(){
      return <WrappedComponent {...this.props}/>;
    }
  }

  return graphql(CurrentUser)(RequireAuth);
}
