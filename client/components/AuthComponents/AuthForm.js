import React, {Component} from 'react';

export default class AuthForm extends Component{
  constructor(props){
    super(props);

    this.state = {email: "", password: ""};
  }

  onSubmit(e){
    e.preventDefault();

    const submit = this.props.onSubmit;
    submit(this.state);
  }

  render(){
    return (
      <div className="row">
        <form className="col s8" onSubmit={this.onSubmit.bind(this)}>

          <div className="input-field">
            <input value={this.state.email}
                   placeholder="Email"
                   onChange={(e) => this.setState({email:e.target.value})}
              />
          </div>

          <div className="input-field">
            <input value={this.state.password}
                   placeholder="Password"
                   type="password"
                   onChange={(e) => this.setState({password:e.target.value})}
              />
          </div>

          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
