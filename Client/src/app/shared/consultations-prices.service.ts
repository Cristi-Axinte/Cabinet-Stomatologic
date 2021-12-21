import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConsultationsPrices } from '../Models/IConsultationsPrices';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsPricesService {

  readonly rootUrl = 'http://localhost:55066/api';

  constructor(public http: HttpClient) { }

  getConsultations() {
    return this.http.get<IConsultationsPrices[]>(this.rootUrl + '/Consultation/Get');
  }

  getConsultationById(consultationId : number) {
    return this.http.get<IConsultationsPrices>(this.rootUrl + '/Consultation/'+ consultationId)
  }

   
  sendUpdatedConsultation(editConsultationModel : any) {
    var consultationDetails = {
      Id : editConsultationModel.value.Id,
      ConsultationType : editConsultationModel.value.ConsultationType,
      Price: editConsultationModel.value.Price,
    }
    return this.http.post(this.rootUrl + '/Consultation/UpdateConsultation', consultationDetails);
  }

  deleteConsultationById(consultationId : number) {
    return this.http.delete(this.rootUrl + '/Consultation/' + consultationId)
  }
}
