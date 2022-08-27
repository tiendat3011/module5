import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/type-customer';
import {Customer} from '../model/customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  id: number;

  constructor(private router: Router,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypes = value;
    }, error => {
      console.log(error);
    });
  }

  getCustomer(id: number) {
    return this.customerService.getCustomerById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[1-9]{9}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^090[0-9]{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.pattern('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
        address: new FormControl(customer.address, [Validators.required]),
        customerType: new FormControl(customer.customerType.id, [Validators.required]),
      });
    }, error => {
      console.log(error);
    });
  }

  submit() {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerService.getCustomerTypeById(customer.customerType).subscribe(customerType => {
        customer.customerType = {
          id: customerType.id,
          name: customerType.name
        };
        this.customerService.updateCustomer(this.id, customer).subscribe(() => {
          setTimeout(() => {
            alert('Edit Success');
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
