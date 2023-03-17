import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'deb';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin(){
    //console.log(this.username)
    if(this.username==="deb" && this.password=== 'dummy'){
      this.invalidLogin= false
    }else{
      this.invalidLogin=true
    }
    
  }

}
