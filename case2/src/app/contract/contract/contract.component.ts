import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/Contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contract: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contract = this.contractService.getAll();
  }
}
