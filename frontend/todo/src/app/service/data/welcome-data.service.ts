import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  
  constructor(
    public message: String
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
    // console.log("Execute Hello World Bean Service")
  }

 

  executeHelloWorldServicePathVariable(name:string){
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`,
    {headers:header});
    // console.log("Execute Hello World Bean Service")
  }

  createBasicAuthenticationHttpHeader(){
    let username='deb'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic'+ window.btoa(username+ ':' + password);
    return basicAuthHeaderString;


  }
}
