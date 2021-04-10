import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';
import { UserRegistrationService } from './shared/user-registration.service';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationPageComponent,
    UserLoginPageComponent,
    MainPageComponent,
    AuctionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
