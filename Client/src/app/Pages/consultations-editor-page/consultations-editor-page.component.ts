import { Component, Input ,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IConsultationsPrices } from 'src/app/Models/IConsultationsPrices';
import { ConsultationsPricesService } from 'src/app/shared/consultations-prices.service';

@Component({
  selector: 'app-consultations-editor-page',
  templateUrl: './consultations-editor-page.component.html',
  styleUrls: ['./consultations-editor-page.component.css']
})
export class ConsultationsEditorPageComponent implements OnInit {

  @Input() consultationId: number = 0;

  editConsultationModel = this.form.group({
    Id: ['consultationId', Validators.required],
    ConsultationType: ['', Validators.required],
    Price: ['', Validators.required],
  })
  consultationfromDB !: IConsultationsPrices;
  
  constructor(public modalService: NgbModal,
    public activeModal: NgbActiveModal, private form:FormBuilder, public consultationService: ConsultationsPricesService, private router: Router) { }

  ngOnInit(): void {
    this.getConsultationById(this.consultationId);
  }

  getConsultationById(consultationId : number) {
    this.consultationService.getConsultationById(consultationId).subscribe((consultationFromDB) => {
        this.consultationfromDB = consultationFromDB

        this.editConsultationModel = this.form.group({
          Id: [this.consultationfromDB.id, Validators.required],
          ConsultationType: [this.consultationfromDB.consultationType, Validators.required],
          Price: [this.consultationfromDB.price, Validators.required],
        })
    })
  }

  submitChanges()
  {
    this.consultationService.sendUpdatedConsultation(this.editConsultationModel).subscribe((res:any) => {
    this.router.navigateByUrl('/consultationsPanelPage');
  });;
  }

  deleteConsultation(consultationId : number) {
      console.log(consultationId);
      this.consultationService.deleteConsultationById(consultationId).subscribe((res:any) => {
      })
  }

}
