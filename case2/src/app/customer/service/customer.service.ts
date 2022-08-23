import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerTypeService} from './customer-type.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private customerTypeService: CustomerTypeService) {
    this.customerList.push({
      id: 1,
      name: 'Võ Tiến Đạt ',
      birthday: '29-11-1999', gender: true, idCard: '123456789',
      phone: 12345,
      email: 'tiendat30111999@gmail.com',
      address: 'QN',
      customerType: customerTypeService.customerTypeList[0]
    }, {
      id: 2, name: 'Trần Dog', birthday: '02-02-1999', gender: false, idCard: '222222',
      phone: 789123, email: 'ly@gmail.com', address: 'Da Nang', customerType: customerTypeService.customerTypeList[1]
    }, {
      id: 3, name: 'Lê Vịt', birthday: '03-03-1995', gender: true, idCard: '333333',
      phone: 132342, email: 'duc@gmail.com', address: 'HN', customerType: customerTypeService.customerTypeList[1]
    });
  }

  getAll() {
    return this.customerList;
  }

  save(customer) {
    customer.id = this.customerList.length + 1;
    if (customer.customerType === 1) {
      customer.customerType = this.customerTypeService.customerTypeList[0];
    } else if (customer.customerType === 2) {
      customer.customerType = this.customerTypeService.customerTypeList[1];
    }
    this.customerList.push(customer);
  }

  getById(id) {
    for (const item of this.customerList) {
      if (item.id === id) {
        return item;
      }
    }
  }

  update(customer) {
    if (customer.customerType === 1) {
      customer.customerType = this.customerTypeService.customerTypeList[0];
    } else if (customer.customerType === 2) {
      customer.customerType = this.customerTypeService.customerTypeList[1];
    }
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === customer.id) {
        this.customerList[i] = customer;
      }
    }
    console.log(this.customerList);
  }

  delete(id) {
    this.customerList = this.customerList.filter(customer => {
      return customer.id !== id;
    });
  }
}
