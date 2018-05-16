import { Injectable } from '@angular/core';
import { LoginService } from './login.service'
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private log:LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    //console.log(url);
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if(this.log.isLogin()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
