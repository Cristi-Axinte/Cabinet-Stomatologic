import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  userRole: string ="";
  constructor() { }

  getAndCheckUserRole() {
    var token = localStorage.getItem('token');
    var tokenDetails : any;
    if(token != null) {
      tokenDetails = window.atob(token.split('.')[1]);
    }
    tokenDetails = JSON.parse(tokenDetails);
    console.log(tokenDetails)
    this.userRole = tokenDetails.role;
    if(this.userRole === "Admin")
    {
      return true;
    }
    else 
    {
      return false;
    }
  }

  roleMatch(allowedRoles : string[]) : boolean{
    var isMatch = false;
    var token = localStorage.getItem('token');
    var tokenDetails : any;
    if(token != null) {
      tokenDetails = window.atob(token.split('.')[1]);
    }
    tokenDetails = JSON.parse(tokenDetails);
    this.userRole = tokenDetails.role;
    allowedRoles.forEach(allowedRole => {
      if(this.userRole == allowedRole)
      {
        console.log("User role din alta functie " + this.userRole);
        return isMatch = true;
      }
      else 
      {
        return isMatch = false;
      }
    });
    return isMatch;
  }
}


