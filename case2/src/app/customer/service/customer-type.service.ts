import {Injectable} from '@angular/core';
import {TypeCustomer} from '../model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() {
  }

  typeCustomers: TypeCustomer[] = [
    {customerTypeId: 1, customerTypeName: 'Diamond'},
    {customerTypeId: 2, customerTypeName: 'Platinum'},
    {customerTypeId: 3, customerTypeName: 'Gold'},
    {customerTypeId: 4, customerTypeName: 'Silver'},
    {customerTypeId: 5, customerTypeName: 'Member'},
  ];

  getAll() {
    return this.typeCustomers;
  }
}
