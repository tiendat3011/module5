import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-update-list-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {

  constructor() {
  }

  type = '';

  ngOnInit(): void {
  }

  getType(type) {
    this.type = type;

  }
}
