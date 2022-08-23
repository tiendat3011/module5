import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ContractComponent} from './contract/contract.component';


const routes: Routes = [
  {path: 'list-contract', component: ContractComponent},
  {path: 'create-contract', component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
