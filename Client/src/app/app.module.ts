import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationPageComponent } from './Pages/user-registration-page/user-registration-page.component';
import { UserRegistrationService } from './shared/user-registration.service';
import { UserLoginPageComponent } from './Pages/user-login-page/user-login-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NavBarComponent } from './shared/navbar/nav-bar/nav-bar.component';
import { AppointmentPageComponent } from './Pages/appointment-page/appointment-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { PricesPageComponent } from './Pages/prices-page/prices-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationPageComponent,
    UserLoginPageComponent,
    MainPageComponent,
    NavBarComponent,
    AppointmentPageComponent,
    ServicesPageComponent,
    PricesPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
