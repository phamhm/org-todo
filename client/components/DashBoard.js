import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { gqlWrapper } from '../GraphQL/utilities/utils';
import CurrentUser from '../GraphQL/queries/CurrentUser';

class DashBoard extends Component{
  render(){
    const { data: { loading, user } } = this.props;

    if (loading)
      return <div/>;

    if (user)
      return <div>Hello {user.email}</div>;
    else
      return null;
  }
}

export default gqlWrapper(DashBoard, CurrentUser);
