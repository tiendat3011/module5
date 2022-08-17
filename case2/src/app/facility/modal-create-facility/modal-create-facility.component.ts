import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-create-facility',
  templateUrl: './modal-create-facility.component.html',
  styleUrls: ['./modal-create-facility.component.css']
})
export class ModalCreateFacilityComponent implements OnInit {

  constructor() {
  }

  type = '';

  ngOnInit(): void {
  }

  getType(type) {
    this.type = type;

  }

}
