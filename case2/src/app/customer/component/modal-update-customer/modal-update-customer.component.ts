import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/type-customer';

@Component({
  selector: 'app-modal-update-customer',
  templateUrl: './modal-update-customer.component.html',
  styleUrls: ['./modal-update-customer.component.css']
})
export class ModalUpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerType: CustomerType[] = [];

  this.customerForm = new FormGroup({
  id: new FormControl(customer.id, [Validators.required]),
  name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
  birthday: new FormControl(customer.birthday, [Validators.required]),
  gender: new FormControl(customer.gender, [Validators.required]),
  idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
  phone: new FormControl(customer.phone, [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
  email: new FormControl(customer.email, [Validators.required, Validators.email]),
  address: new FormControl(customer.address, [Validators.required]),
  customerType: new FormControl(customer.customerType.name, [Validators.required])

  constructor() {
  }

  ngOnInit(): void {
  }

}
