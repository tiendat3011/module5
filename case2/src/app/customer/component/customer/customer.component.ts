import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/type-customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  id: number;
  name: string;

  customer: Customer[];
  customerFormUpdate = new FormGroup({
    customerId: new FormControl(),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    customerGender: new FormControl('', Validators.required),
    customerPhone: new FormControl('', [Validators.required,
      Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    status: new FormControl(0),
  });


  constructor(private customerService: CustomerService,
              private router: Router) {

    customerType: TypeCustomer[] = this.customerTypeService.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

  // delete() {
  //   this.customerService.delete(this.id);
  // }
  getAll() {
    this.customer = this.customerService.getAll();
  }

  valueOf(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  onSubmitCreate() {
    const customerObj = this.customerFormUpdate.value;
    this.customerService.create(customerObj).subscribe(() => {
      this.customerFormUpdate.reset();
      // this.router.navigateByUrl('/list-customer');
      console.log(customerObj);
      alert('Them moi thanh cong');
    }, error => {
      console.log('error');
    });
  }

}
