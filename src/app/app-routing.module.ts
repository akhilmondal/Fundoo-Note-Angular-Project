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
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'createnote', component: CreatenoteComponent },
      { path: 'getallnote', component: GetallnoteComponent },
    ],
  },
  { path: 'createnote', component: CreatenoteComponent },
  { path: 'forget', component: ForgetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
