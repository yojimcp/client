import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PersonIcon from 'material-ui/svg-icons/social/person-add';
import Auth from '../models/Auth';

export default class Login extends Component {

  constructor(){
    super();
    this.state={
      username:'',
      password:'',
      loading:false
    }
  }

  cleanUsername(user){
    if(user){
      return user.toLowerCase().trim();
    }
    return null;
  }

  //handleLogin( e ){ alert("llegue");};


  handleLogin( e ){
    this.setState({loading:true});
    e.preventDefault();
    let _self = this;
    const reqBody = {
			"username": this.cleanUsername(this.state.username),
			"password": this.state.password
		};
    Auth.login( reqBody, ( error, data )=>{
			_self.setState({ loading:false } );
			if(error)  return  toastr.warning(error.message, 'WARNING');
			toastr.success("Welcome to Video Checkout", 'Success');

			document.location.hash = "#/main";
		});
  }


  handleChange(key, event){
    let state = this.state;
    state[key] = event.target.value;
    this.setState(state);
  }

  render(){

    return (
      <div>

        <TextField
          value = {this.state.username}
          onChange = {(e)=>{this.handleChange('username',e);}}
          floatingLabelText="Usuario"
          floatingLabelFixed={true}
          errorText=""
        /><br />

        <TextField
          value = {this.state.password}
          onChange = {(e)=>{this.handleChange('password',e);}}
          floatingLabelText="Password"
          type="password"
          errorText=""
        /><br />

        <RaisedButton
          label="Login"
          labelPosition="before"
          primary={true}
          fullWidth = {true}
          icon={<PersonIcon />}
          disabled={this.state.loading}
          onClick={this.handleLogin.bind(this)}
        />

      </div>
    );
  }
}
