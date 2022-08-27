import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../model/type-customer';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[ ] = [];
  id: number;
  name: string;
  p = 1;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomerType();
    this.deleteCustomer();
  }

  getAll() {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
  }

  valueDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe(value => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
