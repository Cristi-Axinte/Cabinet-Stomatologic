import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'userRegistration', pathMatch:'full'},
  {path: 'userRegistration', component: UserRegistrationPageComponent},
  {path: 'userLogin', component: UserLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
