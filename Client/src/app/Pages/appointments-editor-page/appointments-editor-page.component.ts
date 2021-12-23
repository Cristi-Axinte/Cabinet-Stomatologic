import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppointmentDisplay } from 'src/app/Models/IAppointmentDisplay';
import { IAppointments } from 'src/app/Models/IAppointments';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointments-editor-page',
  templateUrl: './appointments-editor-page.component.html',
  styleUrls: ['./appointments-editor-page.component.css']
})
export class AppointmentsEditorPageComponent implements OnInit {

  @Input() appointmentId: number = 0;

  editAppointmentModel = this.form.group({
    Id: ['appointmentId', Validators.required],
    AppointmentDate: ['', Validators.required],
    Message: ['', Validators.required],
    Time: ['', Validators.required],
  })

  appointementsFromDB !: IAppointmentDisplay;
  constructor(public modalService: NgbModal,
    public activeModal: NgbActiveModal, private form:FormBuilder, public appointmentsService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAppointmentById(this.appointmentId);
  }

  getAppointmentById(appointmentId : number) {
    this.appointmentsService.getAppointmentsById(appointmentId).subscribe((appointmentsFromDB) => {

        this.appointementsFromDB = appointmentsFromDB
        console.log(this.appointementsFromDB.appointmentDate);

        this.editAppointmentModel = this.form.group({
          Id: [this.appointementsFromDB.id, Validators.required],
          AppointmentDate: [this.appointementsFromDB.appointmentDate, Validators.required],
          Message: [this.appointementsFromDB.message, Validators.required],
          Time: [this.appointementsFromDB.time, Validators.required],
        })
    })
  }

  submitChanges()
  {
    this.appointmentsService.sendUpdatedAppointment(this.editAppointmentModel).subscribe((res:any) => {
    this.router.navigateByUrl('/appointemtnsPanelPage');
  });;
  }

  deleteAppointment(appointmentId : number) {
      this.appointmentsService.deleteAppointmentById(appointmentId).subscribe((res:any) => {
      })
  }

}
