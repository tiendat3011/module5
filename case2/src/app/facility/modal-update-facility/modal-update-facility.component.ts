import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-update-facility',
  templateUrl: './modal-update-facility.component.html',
  styleUrls: ['./modal-update-facility.component.css']
})
export class ModalUpdateFacilityComponent implements OnInit {

  constructor() {
  }

  type = '';

  ngOnInit(): void {
  }

  getType(type) {
    this.type = type;

  }
}
