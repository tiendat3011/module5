import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/type-customer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-create-customer',
  templateUrl: './modal-create-customer.component.html',
  styleUrls: ['./modal-create-customer.component.css']
})
export class ModalCreateCustomerComponent implements OnInit {
  customerFormCreate: FormGroup = new FormGroup({
    // id: new FormControl('',[Validators.required]),
    code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    dayOfBirth: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required,
      Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    typeCustomer: new FormControl('', Validators.required),
  });
  customerType: TypeCustomer[] = this.customerTypeService.getAll();

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }


  ngOnInit(): void {
  }

  onSubmit() {
    const customer = this.customerFormCreate.value;
    this.customerService.create(customer);
    this.router.navigate(['/customer']);
  }
}
