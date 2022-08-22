import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-create-list-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  constructor() {
  }

  type = '';

  ngOnInit(): void {
  }

  getType(type) {
    this.type = type;

  }

}
