import { Injectable } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  formModel = this.form.group({
    FirstName: ['',Validators.required],
    LastName: ['',Validators.required],
    UserName : ['',Validators.required],
    Email: ['',[Validators.email, Validators.required]],
    Password: ['',Validators.required],
  });

  readonly rootUrl = 'http://localhost:55066/api';

  constructor(private form:FormBuilder,
    private http: HttpClient) { }
  
  register(){
    var body = {
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password,
    };
    return this.http.post(this.rootUrl + '/User/Register', body);
  }
}
