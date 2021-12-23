import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppointmentDisplay } from 'src/app/Models/IAppointmentDisplay';
import { IAppointments } from 'src/app/Models/IAppointments';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { AppointmentsEditorPageComponent } from '../appointments-editor-page/appointments-editor-page.component';

@Component({
  selector: 'app-appointments-panel-page',
  templateUrl: './appointments-panel-page.component.html',
  styleUrls: ['./appointments-panel-page.component.css']
})
export class AppointmentsPanelPageComponent implements OnInit {

  appointments : IAppointments[] = [];
  appointmentsToDisplay : IAppointmentDisplay[] = [];
  currentDialog: any = null;
  dates: string[] = [];

  constructor(public appointmentService : AppointmentService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAppointments()
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((appointmentsFromDB) => 
       {
         this.appointmentsToDisplay = appointmentsFromDB;
       }
    )
  }

  openAppointmentEditor(appointmentId : number) {
    this.currentDialog = this.modalService.open(AppointmentsEditorPageComponent);
    this.currentDialog.componentInstance.appointmentId = appointmentId;
}
}
