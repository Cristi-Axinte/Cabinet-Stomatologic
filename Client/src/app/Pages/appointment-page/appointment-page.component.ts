import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAppointmentDisplay } from 'src/app/Models/IAppointmentDisplay';
import { IAppointments } from 'src/app/Models/IAppointments';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent implements OnInit {
  formModel ={
    date: '',
    message: '',
  }
  userId : string = ''
  appointments: IAppointmentDisplay[] = []

  constructor(public appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
    this.getUserId();
  }

    
  getAppointments() {
    this.appointmentService.getAppointments().subscribe((appointmentsFromDB) => 
       {
        appointmentsFromDB.forEach(appointment => {
            this.appointments.push(appointment);
        })
       }
    )
    console.log(this.appointments);
  }

  getUserId() {
      var token = localStorage.getItem('token');
      if(token != null) {
        var payLoad = JSON.parse(window.atob(token.split('.')[1]));
        this.userId = payLoad.UserID;
      }
      console.log(this.userId);
  }

  onSubmit()
  {
    this.appointmentService.postAppointment(this.userId).subscribe((res:any) =>
    {
        this.appointmentService.appointmentForm.reset();
    })
  }
}
