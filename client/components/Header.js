import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../GraphQL/queries/CurrentUser';
import Logout from '../GraphQL/mutations/Logout';
import { Link } from 'react-router';
import { gqlWrapper } from '../GraphQL/utilities/utils';

class Header extends Component{
  onLogoutClick(){
    this.props.mutate({})
      .then(() => this.props.data.refetch());
  }

  renderButtons(){
    const { data: { loading, user = null } } = this.props;
    if (loading)
      return <div/>;

    if (user){
      return (
        <li>
          <a onClick={() => this.onLogoutClick()}>
            Logout
          </a>
        </li>
      );
    }
    else{
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render(){
    return (
      <nav>
        <ul className="right">
          {this.renderButtons()}
        </ul>
      </nav>
    );
  }
}

export default gqlWrapper(Header, CurrentUser, Logout);
