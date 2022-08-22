import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/type-customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  id: number;
  name: string;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private serverHttp: ServerHttpService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAll();
    this.customerTypes = this.customerTypeService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id);
    this.customers = this.customerService.getAll();
  }
}
