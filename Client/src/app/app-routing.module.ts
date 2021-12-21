import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AppointmentPageComponent } from './Pages/appointment-page/appointment-page.component';
import { AppointmentsPanelPageComponent } from './Pages/appointments-panel-page/appointments-panel-page.component';
import { ConsultationsEditorPageComponent } from './Pages/consultations-editor-page/consultations-editor-page.component';
import { ConsultationsPanelPageComponent } from './Pages/consultations-panel-page/consultations-panel-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { PricesPageComponent } from './Pages/prices-page/prices-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { UserLoginPageComponent } from './Pages/user-login-page/user-login-page.component';
import { UserRegistrationPageComponent } from './Pages/user-registration-page/user-registration-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'userRegistration', pathMatch:'full'},
  {path: 'userRegistration', component: UserRegistrationPageComponent},
  {path: 'userLogin', component: UserLoginPageComponent},
  {path: 'mainPage', component: MainPageComponent},
  {path: 'contactPage', component: ContactPageComponent},
  {path: 'appointmentPage', component:AppointmentPageComponent},
  {path: 'servicesPage', component:ServicesPageComponent},
  {path: 'pricesPage', component:PricesPageComponent},
  {path: 'consultationsPanelPage', component:ConsultationsPanelPageComponent},
  {path: 'appointmentsPanelPage', component:AppointmentsPanelPageComponent},
  {path: 'consultationEditorPage/:consultationId', component:ConsultationsEditorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
