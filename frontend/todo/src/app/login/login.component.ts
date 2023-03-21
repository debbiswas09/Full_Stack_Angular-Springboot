import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService){}

  handleLogin(){
    //console.log(this.username)
    // if(this.username==="deb" && this.password=== 'dummy'){
      
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin= false
    }else{
      this.invalidLogin=true
    }
    
  }

}
