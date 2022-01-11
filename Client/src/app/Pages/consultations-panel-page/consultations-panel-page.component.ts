import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IConsultationsPrices } from 'src/app/Models/IConsultationsPrices';
import { ConsultationsPricesService } from 'src/app/shared/consultations-prices.service';
import { AddConsultationPageComponent } from '../add-consultation-page/add-consultation-page.component';
import { ConsultationsEditorPageComponent } from '../consultations-editor-page/consultations-editor-page.component';

@Component({
  selector: 'app-consultations-panel-page',
  templateUrl: './consultations-panel-page.component.html',
  styleUrls: ['./consultations-panel-page.component.css']
})
export class ConsultationsPanelPageComponent implements OnInit {

  consultations: IConsultationsPrices[] = [];
  currentDialog: any = null;
  language = 1;

  constructor(public consultationService : ConsultationsPricesService,
    public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getConsultations();
  }


  getConsultations() {
      this.consultationService.getConsultations().subscribe((consultationsPricesFromDB) => 
         {
           this.consultations = consultationsPricesFromDB;
         }
      )
  }

  openConsultationEditor(consultationId : number) {
      this.currentDialog = this.modalService.open(ConsultationsEditorPageComponent);
      this.currentDialog.componentInstance.consultationId = consultationId;
      this.currentDialog.componentInstance.language = this.language;
  }

  openAddConsultation() {
    this.currentDialog = this.modalService.open(AddConsultationPageComponent);
    this.currentDialog.componentInstance.language = this.language;
  }

  receiver(event : any) {
    this.language = event;
    console.log(this.language);
  } 
}
