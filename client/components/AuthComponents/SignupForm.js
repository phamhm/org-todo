import React, {Component} from 'react';
import AuthForm from './AuthForm';
import Signup from '../../GraphQL/mutations/Signup';
import CurrentUser from '../../GraphQL/queries/CurrentUser.js';
import { gqlWrapper } from '../../GraphQL/utilities/utils';
import RouteManager from '../../routeManager';

class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state = {errors:[]};
  }
  onSubmit({email, password}){
    const {mutate: signup} = this.props;

    signup({
      variables:{email, password},
      refetchQueries: [{query: CurrentUser}]
    }).catch(res =>{
        const errors =
              res.graphQLErrors.map(error => error.message);
        this.setState({errors});
    });
  }

  componentWillUpdate(nextProps){
    if (!this.props.data.user && nextProps.data.user)
      RouteManager.gotoDashBoard();
  }

  render(){
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)}
                  errors={this.state.errors}/>
      </div>);
  }
}

export default gqlWrapper(SignupForm, Signup, CurrentUser);
