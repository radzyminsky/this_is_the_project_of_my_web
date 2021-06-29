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
import { yourCarpentryComponent } from './components/yourCarpentry/yourCarpentry.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { UtillsComponent } from './components/utills/utills.component';
import { CuttingListComponent } from './components/cutting-list/cutting-list.component';

@NgModule({
  declarations: [                                                         
    AppComponent,
    
    RegisterComponent,
    OnlineCalculationComponent,
    LoginComponent,
    CarpentryListComponent,
    HomepageComponent,
    yourCarpentryComponent,
    UtillsComponent,
    CuttingListComponent
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
