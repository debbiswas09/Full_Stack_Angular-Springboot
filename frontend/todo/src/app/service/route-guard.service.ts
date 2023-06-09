import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';
import { HardcodedAuthenticationService } from './http/hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate  {

   constructor(
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService,
    private router:Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
    
}
}
