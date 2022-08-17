import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customer: Customer[] = [{
    customerId: 1;
    customerCode: string;
    customerName: string;
    customerBirthday: string;
    customerGender: number;
    customerIdCard: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
    customerTypeName: string;  }];
}
