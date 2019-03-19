import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return !!sessionStorage.getItem('user');
    }
    constructor(private router: Router) { }
    canActivate() {

        if (!!sessionStorage.getItem('user')) {
            this.router.navigate(['/portale/home']);
            return false
        } else {
            return true;
        }



    }

}