import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/type-customer';
import {CustomerTypeService} from '../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^090[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });
  id: number;


  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypes = value;
    }, error => {
      console.log(error);
    });
    console.log(this.customerTypes);
  }

  createCustomer() {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      console.log(customer.customerType);
      this.customerService.getCustomerTypeById(customer.customerType).subscribe(customerType => {
        customer.customerType = {
          id: customerType.id,
          name: customerType.name
        };
        this.customerService.createCustomer(customer).subscribe(() => {
          setTimeout(() => {
            alert('Create Succsess');
          }, 1000);
        }, error => {
          console.log(error);
        }, () => {
          this.router.navigate(['/customer/list-customer']);
        });
      });
    }
  }
}
