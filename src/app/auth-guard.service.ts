import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardComponent implements CanActivate {

  constructor(private _router:Router, private authService:AuthService) { }

  canActivate(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot){

      return this.authService.isAuthenticated().then(
            (authenticated:boolean)=> {
                if(authenticated){
                    return true;
                }
                else {
                    this._router.navigate(["/"]);

                }
                     
            
            }
        )
    } 

}
