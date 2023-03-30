import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }


  executeAuthenticationService(username: string,password: string){

    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':' + password);
   
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    return this.http.get<AuthenticationdBean>(`http://localhost:8080/basicauth`,
    {headers}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticateUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
    // console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')

    return null
  }

  

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('token')
  }
}



export class AuthenticationdBean{

  constructor(public message:string){}

}
