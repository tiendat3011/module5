import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/component/customer/customer.component';
import {FacilityComponent} from './facility/facility/facility.component';
import {ContractComponent} from './contract/contract/contract.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contract', component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
