import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customer: Customer[] = [{
    customerId: 1,
    customerCode: 'KH-1111',
    customerName: 'Võ Tiến Đạt',
    customerBirthday: '29-11-1999',
    customerGender: 'Nam',
    customerIdCard: '123456789',
    customerPhone: '0336761813',
    customerEmail: 'tiendat30111999@gmail.com',
    customerAddress: 'Đà Nẵng',
    customerTypeName: 'Diamond'
  }, {
    customerId: 2,
    customerCode: 'KH-2222',
    customerName: 'Võ Như Hùng',
    customerBirthday: '28-11-1999',
    customerGender: 'Nam',
    customerIdCard: '123456789',
    customerPhone: '0336761813',
    customerEmail: 'hungvonhu30111999@gmail.com',
    customerAddress: 'Quảng Trị',
    customerTypeName: 'Gold'
  }, {
    customerId: 3,
    customerCode: 'KH-3333',
    customerName: 'Phạm Thành Tri',
    customerBirthday: '27-11-1999',
    customerGender: 'Nam',
    customerIdCard: '123456789',
    customerPhone: '0336761813',
    customerEmail: 'trisida30111999@gmail.com',
    customerAddress: 'Gia Lai',
    customerTypeName: 'Sliver'
  }];

  getAll() {
    return this.customer;
  }
}
