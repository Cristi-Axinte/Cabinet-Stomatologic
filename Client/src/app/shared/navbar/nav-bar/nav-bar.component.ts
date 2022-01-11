import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  language = 1;

  @Output() sender = new EventEmitter();

  constructor(public userService : UserService, public modalService: NgbModal,
    public router: Router) { }

  ngOnInit(): void {
    this.checkifAdmin = this.userService.getAndCheckUserRole();
  }

  logout() {
    this.currentDialog = this.modalService.open(LogoutCheckComponent);
    this.currentDialog.componentInstance.language = this.language;
  }

  onRadioChange(event : any) {
    this.language = event.value;
    this.sender.emit(this.language);
    console.log(this.language);
  }
}