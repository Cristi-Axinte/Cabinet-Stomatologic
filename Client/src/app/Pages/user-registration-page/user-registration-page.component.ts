import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../../shared/user-registration.service';


@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.css']
})
export class UserRegistrationPageComponent implements OnInit {

  constructor(public service: UserRegistrationService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res : any) => {
        if(res.succeded) {
          this.service.formModel.reset();
        }
        else 
        {
          
        }
      },
      err => {}
    );
  }

}
