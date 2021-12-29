import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegistrationService } from '../../shared/user-registration.service';


@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.css']
})
export class UserRegistrationPageComponent implements OnInit {

  constructor(public service: UserRegistrationService, public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe((res: any) => 
    {
      this.router.navigateByUrl('/userLogin');
      this.toastr.success("Account created!");
    },
    err=>{
      this.toastr.error("Invalid credentials!");
    });
  }
}
