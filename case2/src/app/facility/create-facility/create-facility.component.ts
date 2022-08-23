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
  rentTypeList: RentType[] = [];
  facilityForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityTypeService.getAllFacilityType().subscribe(facilityType => {
      this.facilityTypes = facilityType;
    }, err => {
    }, () => {
      this.rentTypeService.getAllRentType().subscribe(value => {
        this.rentTypeList = value;
      }, error => {
      }, () => {
        this.facilityForm = new FormGroup({
          name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
          area: new FormControl('', [Validators.required, Validators.min(1)]),
          cost: new FormControl('', [Validators.required, Validators.min(0)]),
          maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
          standardRoom: new FormControl('0', [Validators.required]),
          descriptionOtherConvenience: new FormControl('0', [Validators.required]),
          poolArea: new FormControl('0', [Validators.required, Validators.min(1)]),
          numberOfFloors: new FormControl('0', [Validators.required, Validators.min(0)]),
          facilityFree: new FormControl('0', [Validators.required]),
          url: new FormControl('0', [Validators.required]),
          rentType: new FormControl('1'),
          facilityType: new FormControl('1'),
        });
      });
    });
  }

  createFacility() {
    console.log(this.facilityForm.value);
    this.facilityService.saveFacility(this.facilityForm.value).subscribe(value => {
      this.router.navigateByUrl('list-facility').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong');
        }, 1000);
      });
    });
  }
}
