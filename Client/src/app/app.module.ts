import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';
import { UserRegistrationService } from './shared/user-registration.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
