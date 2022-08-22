import {Injectable} from '@angular/core';
import {Customer} from '../../customer/model/customer';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() {
  }

  contract: Contract[] = [{
    contractId: 1,
    contractStartDay: '10-08-2022',
    contractEndDay: '18-08-2022',
    contractDeposit: 50000,
    contractTotalMoney: 100000
  }, {
    contractId: 2,
    contractStartDay: '15-08-2022',
    contractEndDay: '20-08-2022',
    contractDeposit: 55000,
    contractTotalMoney: 150000
  }, {
    contractId: 3,
    contractStartDay: '20-08-2022',
    contractEndDay: '25-08-2022',
    contractDeposit: 60000,
    contractTotalMoney: 200000
  }];

  getAll() {
    return this.contract;

  }
}
