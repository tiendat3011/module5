import {Component, OnInit, ViewChild} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilityList: Facility[] = [];
  id = 0;
  name = '';

  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilityList = this.facilityService.getAllFacility();
  }

  valueDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete() {
    this.facilityService.delete(this.id);
    this.facilityList = this.facilityService.getAllFacility();
  }


}
