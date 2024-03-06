
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard2 implements CanActivate{
    constructor(private auth: AuthService, private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // if(this.auth.isLoggedIn()){
        //     return true;
        // }else {
        //     return this.router.createUrlTree(['customer'])
        // }
        if(!this.auth.isAdmin()){
            this.router.navigate([''])
        }
        return this.auth.isAdmin()
    }
}