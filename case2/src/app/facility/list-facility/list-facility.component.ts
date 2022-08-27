import {Component, OnInit, ViewChild} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';
import {Router} from '@angular/router';
import {FacilityType} from '../model/facilityType';
import {RentType} from '../model/rentType';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  id: number;
  name: string;

  constructor(private facilityService: FacilityService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getAllFacilityList();
    this.getAllFacilityType();
    this.getAllRentType();
  }

  getAllFacilityList() {
    this.facilityService.getAll().subscribe(value => {
      this.facilityList = value;
    });
  }

  getAllFacilityType() {
    this.facilityService.getAllFacilityType().subscribe(value => {
      this.facilityTypes = value;
    });
  }
  getAllRentType() {
    this.facilityService.getAllRentType().subscribe(value => {
      this.rentTypes = value;
    });
  }
  valueDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteFacility() {
    this.facilityService.delete(this.id).subscribe(value => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
