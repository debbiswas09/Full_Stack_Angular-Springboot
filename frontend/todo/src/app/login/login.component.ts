import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

import { HardcodedAuthenticationService } from '../service/http/hardcoded-authentication.service';

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
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService ){}

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

  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data  => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin = false
        },
        error =>{
          console.log(error)
          this.invalidLogin = true
        }
        
      )
   

  }
    
  }


