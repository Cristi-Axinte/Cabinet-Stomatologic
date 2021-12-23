import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationsPricesService } from 'src/app/shared/consultations-prices.service';

@Component({
  selector: 'app-add-consultation-page',
  templateUrl: './add-consultation-page.component.html',
  styleUrls: ['./add-consultation-page.component.css']
})
export class AddConsultationPageComponent implements OnInit {

  addConsultationModel = this.form.group({
    ConsultationType: ['', Validators.required],
    Price: ['', Validators.required],
  })
  constructor(public modalService: NgbModal,
    public activeModal: NgbActiveModal, private form:FormBuilder, public consultationService: ConsultationsPricesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.consultationService.addConsultation(this.addConsultationModel).subscribe((res:any) => {
  });
  }

}
