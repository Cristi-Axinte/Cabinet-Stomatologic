import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppointments } from '../Models/IAppointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  readonly rootUrl = 'http://localhost:55066/api';
  fullDate : string = '';

  appointmentForm = this.formBuilder.group({
    date: ['', Validators.required],
    message: [''],
    time:['', Validators.required]
  });

  constructor(public http: HttpClient, public formBuilder: FormBuilder) { }

  getAppointments() {
    return this.http.get<IAppointments[]>(this.rootUrl + '/Appointment/Get');
  }
  postAppointment(userId : string) {
    this.fullDate = this.appointmentForm.value.date;
    console.log(this.fullDate);
    var appointmentBody = {
      userId: userId,
      data: this.fullDate,
      message: this.appointmentForm.value.message,
      time: this.appointmentForm.value.time,
    }
      console.log(appointmentBody.data);
      return this.http.post(this.rootUrl + '/Appointment/Post', appointmentBody)
  }
}
