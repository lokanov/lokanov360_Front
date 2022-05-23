import { DashbordHomeComponent } from './dashbord/dashbord-home/dashbord-home.component';
import { TopbarComponent } from './dashbord/topbar/topbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { UpdateVisitComponent } from './dashbord/update-visit/update-visit.component';
import { StatisticComponent } from './dashbord/statistic/statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordLokanovComponent } from './dashbord/dashbord-lokanov/dashbord-lokanov.component';
import { UpdateVideoComponent } from './dashbord/update-video/update-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitVideoComponent } from './home/visit-video/visit-video.component';
import { VisitVideoCardsComponent } from './home/visit-video-cards/visit-video-cards.component';
import { HeaderComponent } from './home/header/header.component';
import { AddVideoComponent } from './dashbord/add-video/add-video.component';
import { AddVisitComponent } from './dashbord/add-visit/add-visit.component';
import { ListVisitComponent } from './dashbord/list-visit/list-visit.component';
import { ListVideoComponent } from './dashbord/list-video/list-video.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListUserComponent } from './dashbord/list-user/list-user.component';
import { AddCompanyComponent } from './dashbord/add-company/add-company.component';
import { DashbordLokanovHomeComponent } from './dashbord/dashbord-lokanov-home/dashbord-lokanov-home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashbordComponent,
    DashbordHomeComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    UpdateVisitComponent,
    StatisticComponent,
    DashbordLokanovComponent,
    UpdateVideoComponent,
    VisitVideoComponent,
    VisitVideoCardsComponent,
    HeaderComponent,
    AddVideoComponent,
    AddVisitComponent,
    ListVisitComponent,
    ListVideoComponent,
    ListUserComponent,
    AddCompanyComponent,
    DashbordLokanovHomeComponent

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ModalModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }