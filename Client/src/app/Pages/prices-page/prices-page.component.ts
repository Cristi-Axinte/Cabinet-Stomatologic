import { Component, OnInit } from '@angular/core';
import { IConsultationsPrices } from 'src/app/Models/IConsultationsPrices';
import { ConsultationsPricesService } from 'src/app/shared/consultations-prices.service';

@Component({
  selector: 'app-prices-page',
  templateUrl: './prices-page.component.html',
  styleUrls: ['./prices-page.component.css']
})
export class PricesPageComponent implements OnInit {

  consultations: IConsultationsPrices[] = [];
  constructor(public consultationService : ConsultationsPricesService) { }

  ngOnInit(): void {
    this.getConsultations();
  }


  getConsultations() {
      this.consultationService.getConsultations().subscribe((consultationsPricesFromDB) => 
         {
           this.consultations = consultationsPricesFromDB;
         }
      )
      console.log(this.consultations);
  }
}
