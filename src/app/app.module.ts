import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {NgIf, NgFor} from '@angular/common';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { NotepanelComponent } from './Components/notepanel/notepanel.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    CreatenoteComponent,
    GetallnoteComponent,
    NotepanelComponent,
    DisplaynotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    NgFor,
    NgIf
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
