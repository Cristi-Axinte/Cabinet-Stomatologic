import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../../shared/user-login.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  constructor(public service:UserLoginService,
    private router: Router,) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }


  onSubmit()
  {
    this.service.login().subscribe((res:any) => {localStorage.setItem('token', res.token);
    this.service.formModel.reset();
    this.router.navigateByUrl('/mainPage');
  });
  }
}