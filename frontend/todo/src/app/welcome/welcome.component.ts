import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  name = ''
  welcomeMessageFromService:string=''

  //ActivateRoute
  constructor(private route: ActivatedRoute,
              private service:WelcomeDataService){

  }

  ngOnInit(){
    // console.log(this.route.snapshot.params['name']) 
    this.name =this.route.snapshot.params['name']
  }
  
  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
      
    );

    //console.log("Last line of  welcomeMessage")

    }

    getWelcomeMessageWithParameter(){
      //console.log(this.service.executeHelloWorldBeanService());
      this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error=> this.handleErrorResponse(error))
      } 

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService= response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error : any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService= error.error.message

  }

}
