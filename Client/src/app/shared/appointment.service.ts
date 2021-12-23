import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppointmentDisplay } from '../Models/IAppointmentDisplay';
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
    return this.http.get<IAppointmentDisplay[]>(this.rootUrl + '/Appointment/Get');
  }

  getAppointmentsById(appointmentId : number) {
    return this.http.get<IAppointmentDisplay>(this.rootUrl + '/Appointment/'+ appointmentId)
  }

  postAppointment(userId : string) {
    this.fullDate = this.appointmentForm.value.date;
    var appointmentBody = {
      userId: userId,
      data: this.fullDate,
      message: this.appointmentForm.value.message,
      time: this.appointmentForm.value.time,
    }
      console.log(appointmentBody.data);
      return this.http.post(this.rootUrl + '/Appointment/Post', appointmentBody)
  }

  sendUpdatedAppointment(editAppointmentsModel : any) {
    var appointmentDetails = {
      Id : editAppointmentsModel.value.Id,
      Message: editAppointmentsModel.value.Message,
      Time: editAppointmentsModel.value.Time,
      Data: editAppointmentsModel.value.AppointmentDate,
    }
    console.log(appointmentDetails.Time);
    console.log(appointmentDetails.Data);

    return this.http.post(this.rootUrl + '/Appointment/UpdateAppointment', appointmentDetails);
  }

  deleteAppointmentById(appointmentId : number) {
    return this.http.delete(this.rootUrl + '/Appointment/' + appointmentId)
  }

}
