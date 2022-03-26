import {Component} from 'react'
import UserService from '../products/UserService.js';
import { Link } from "react-router-dom";


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            username: '',
            password: '',
            email:''
        }
        this.changeusername= this.changeusername.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeemail = this.changeemail.bind(this);
      }

      componentDidMount(){

        return;
            
            
    }

    singUp = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, email: this.state.email,password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

    
            UserService.signup(user).then(res =>{
              console.log("succesfully added");
            });
       
    }
    changeusername= (event) => {
      this.setState({username: event.target.value});
  }
  
  changeemail= (event) => {
      this.setState({email: event.target.value});
  }

  changepassword= (event) => {
      this.setState({password: event.target.value});
  }
    render() {
      return (
    <div>
        
    <h1 align="center">Sign Up</h1>

    <br/>
    <h4 align="center">already existing user? <Link to="../login" >Login</Link></h4>
    <br/>
    <form  align="center">
  <input align="center" type="text" name="name" class="input-field"placeholder="User name"
   value={this.state.username} onChange={this.changeusername} required/><br/><br/>
  <input align="center" type="Email" name="Email" class="input-field"placeholder="Email ID"
   value={this.state.email} onChange={this.changeemail} required/><br/><br/>
  <input align="center" type="text" name="password" class="input-field"placeholder="Enter password" 
   value={this.state.password} onChange={this.changepassword} required/><br/><br/>
  <button align="center" type="submit" class="submit-btn" onClick={this.singUp}>SignUp</button><br/><br/>
</form>
    </div>
)
      }
}
export default SignUp