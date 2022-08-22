import {Injectable} from '@angular/core';
import {CustomerType} from '../model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() {
  }

  customerType: CustomerType[] = [{
    customerTypeId: 1,
    customerTypeName: 'Member'
  },
    {
      customerTypeId: 2,
      customerTypeName: 'Silver'
    },
    {
      customerTypeId: 3,
      customerTypeName: 'Gold'
    },
    {
      customerTypeId: 4,
      customerTypeName: 'Diamond'
    }
  ];

  getAll() {
    return this.customerType;
  }
}
