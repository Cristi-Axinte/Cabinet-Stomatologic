import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: UserService){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token')!=null)
      {
        let roles = next.data['permittedRoles'] as Array<string>;
        if(roles)
        {
          console.log(this.service.roleMatch(roles));
          if(this.service.roleMatch(roles)) return true;
          else 
          {
            this.router.navigate(['/mainPage']);
            return false;
          }
        }
        return true;
      }
      else 
      { 
        this.router.navigate(['/userLogin']);
        return false;
      }
  } 
}
