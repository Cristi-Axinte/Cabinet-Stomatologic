import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutCheckComponent } from 'src/app/Pages/logout-check/logout-check.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  checkifAdmin : boolean = false;
  currentDialog: any = null;

  constructor(public userService : UserService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.checkifAdmin = this.userService.getAndCheckUserRole();
  }

  logout() {
    this.currentDialog = this.modalService.open(LogoutCheckComponent);
   
  }
}
