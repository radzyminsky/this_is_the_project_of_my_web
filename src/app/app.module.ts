import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { OnlineCalculationComponent } from './components/online-calculation/online-calculation.component';
import { LoginComponent } from './components/login/login.component';
import { CarpentryListComponent } from './components/carpentry-list/carpentry-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarpentryComponent } from './components/carpentry/carpentry.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [                                                         
    AppComponent,
    
    RegisterComponent,
    OnlineCalculationComponent,
    LoginComponent,
    CarpentryListComponent,
    HomepageComponent,
    CarpentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
