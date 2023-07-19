import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'forget',
    component: ForgetpasswordComponent,
    children: [
      { path: 'createnote', component: CreatenoteComponent },
      { path: 'getallnote', component: GetallnoteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
