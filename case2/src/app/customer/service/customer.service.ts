import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerTypeService} from './customer-type.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:3000/customer';
  private URL_CUSTOMER_TYPE = 'http://localhost:3000/customerType';
  customerList: Customer[] = [];

  constructor(private customerTypeService: CustomerTypeService,
              private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL_CUSTOMER);
  }
  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.URL_CUSTOMER_TYPE);
  }
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.URL_CUSTOMER + '/' + id);
  }
  getCustomerTypeById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(this.URL_CUSTOMER_TYPE + '/' + id);
  }
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL_CUSTOMER, customer);
  }
  deleteCustomer(id: number): Observable<Customer>  {
    return this.http.delete<Customer>(this.URL_CUSTOMER + '/' + id);
  }
  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.URL_CUSTOMER + '/' + id, customer);
  }
}
