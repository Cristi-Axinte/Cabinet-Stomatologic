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
}
