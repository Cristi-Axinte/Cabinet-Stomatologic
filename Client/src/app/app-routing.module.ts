import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'userRegistration', pathMatch:'full'},
  {path: 'userRegistration', component: UserRegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
