import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../model/facilityType';
import {RentType} from '../model/rentType';
import {Facility} from '../model/facility';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
import {FacilityService} from '../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityTypes: FacilityType[] = [];
  rentType: RentType[] = [];
  facility: Facility;
  id: number;
  facilityForm: FormGroup;
  p = 1;


  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });

  }

  ngOnInit(): void {
    this.facilityService.getAllFacilityType().subscribe(facilityType => {
      this.facilityTypes = facilityType;
    }, err => {
    }, () => {
      this.facilityService.getAllRentType().subscribe(value => {
        this.rentType = value;
      }, error => {
      }, () => {
      });
    });
  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(value => {
      this.facilityForm = new FormGroup({
        id: new FormControl(value.id),
        name: new FormControl(value.name, [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
        area: new FormControl(value.area, [Validators.required, Validators.min(1)]),
        cost: new FormControl(value.cost, [Validators.required, Validators.min(0)]),
        maxPeople: new FormControl(value.maxPeople, [Validators.min(1)]),
        standardRoom: new FormControl(value.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(value.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(value.poolArea, [Validators.required, Validators.min(1)]),
        numberOfFloors: new FormControl(value.numberOfFloors, [Validators.required, Validators.min(0)]),
        facilityFree: new FormControl(value.facilityFree, [Validators.required]),
        url: new FormControl(value.url, [Validators.required]),
        rentType: new FormControl(value.rentType.id, [Validators.required]),
        facilityType: new FormControl(value.facilityType.id, [Validators.required]),
      });
    }, error => {
      console.log(error);
    });
  }

  update(id: number) {
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
        this.facilityService.update(id, facility).subscribe(() => {
          setTimeout(() => {
            alert('Edit Success');
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
