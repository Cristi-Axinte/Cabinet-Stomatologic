import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  checkifAdmin : boolean = false;
  constructor(public router: Router, public userService : UserService) { }

  ngOnInit(): void {
    this.checkifAdmin = this.userService.getAndCheckUserRole();
  }

  logout() {
    this.router.navigate(['/userLogin'])
  }
}
