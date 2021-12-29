import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-check',
  templateUrl: './logout-check.component.html',
  styleUrls: ['./logout-check.component.css']
})
export class LogoutCheckComponent implements OnInit {

  constructor(public router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/userLogin'])
    this.activeModal.close(LogoutCheckComponent);
  }

  no() {
    this.activeModal.close(LogoutCheckComponent);
  }
}
