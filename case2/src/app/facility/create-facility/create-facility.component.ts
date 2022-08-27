import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../model/facilityType';
import {RentType} from '../model/rentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityTypes: FacilityType[] = [];
  rentType: RentType[] = [];
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    area: new FormControl('', [Validators.required, Validators.min(1)]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
    facilityFree: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    rentType: new FormControl(''),
    facilityType: new FormControl(''),
  });
  id: number;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacilityType().subscribe(value => {
      this.facilityTypes = value;
    }, err => {
    }, () => {
      this.facilityService.getAllRentType().subscribe(value => {
        this.rentType = value;
      }, error => {
      }, () => {
      });
    });
  }

  createFacility() {
    const facility = this.facilityForm.value;

    this.facilityService.findByIdFacilityType(facility.facilityType).subscribe(value => {
      this.facilityService.findByIdRentType(facility.rentType).subscribe(value1 => {
        facility.facilityType = {
          id: value.id,
          name: value.name
        };
        facility.rentType = {
          id: value1.id,
          name: value1.name
        };
        this.facilityService.save(facility).subscribe(() => {
          setTimeout(() => {
            alert('Create Succsess');
          }, 1000);
        }, error => {
          console.log(error);
        }, () => {
          this.router.navigate(['/facility/list-facility']);
        });
      });
    });


  }
}
