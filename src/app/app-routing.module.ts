import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarpentryListComponent } from './components/carpentry-list/carpentry-list.component';
import { OnlineCalculationComponent } from './components/online-calculation/online-calculation.component';

const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'carpentry-list',component:CarpentryListComponent},
  {path:'online-calculation',component:OnlineCalculationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
