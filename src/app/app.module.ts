import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { DocAppointHomeComponent } from './doc-appoint-home/doc-appoint-home.component';
import { PatientNavBarComponent } from './patient/patient-nav-bar/patient-nav-bar.component';
import { DoctorNavBarComponent } from './doctor/doctor-nav-bar/doctor-nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { RegisterComponent } from './register/register.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    RegisterComponent,
    DoctorRegistrationComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    DocAppointHomeComponent,
    PatientHomeComponent,
    DoctorHomeComponent,
    PatientNavBarComponent,
    DoctorNavBarComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   {provide : HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
