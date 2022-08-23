import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractComponent} from './contract/contract.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContractComponent,
    CreateContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
