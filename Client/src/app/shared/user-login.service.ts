import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  readonly rootUrl = 'http://localhost:55066/api';

  formModel = this.form.group({
    Email: [' ',[Validators.email, Validators.required]],
    Password: [' ',Validators.required],
  });

  constructor(private http:HttpClient,
    private form:FormBuilder) { }

    login(){
      var body = {
        Email: this.formModel.value.Email,
        Password: this.formModel.value.Password,
      };
    
      return this.http.post(this.rootUrl + '/User/Login', body);
    }

    
}
