import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  id = 0;
  name = '';

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerList = this.customerService.getAll();

  }

  ngOnInit(): void {
  }

  valueDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete() {
    this.customerService.delete(this.id);
    this.customerList = this.customerService.getAll();
  }
}
