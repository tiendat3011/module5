import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility/facility.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { ModalCreateCustomerComponent } from './customer/modal-create-customer/modal-create-customer.component';
import { ModalUpdateCustomerComponent } from './customer/modal-update-customer/modal-update-customer.component';
import { ModalUpdateFacilityComponent } from './facility/modal-update-facility/modal-update-facility.component';
import { ModalCreateFacilityComponent } from './facility/modal-create-facility/modal-create-facility.component';
import { ModalCreateContractComponent } from './contract/modal-create-contract/modal-create-contract.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    HomeComponent,
    ModalCreateCustomerComponent,
    ModalUpdateCustomerComponent,
    ModalUpdateFacilityComponent,
    ModalCreateFacilityComponent,
    ModalCreateContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
