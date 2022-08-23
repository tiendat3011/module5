import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {RentTypeService} from './rent-type.service';
import {FacilityTypeService} from './facility-type.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor(private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService) {
    this.facilityList.push({
        id: 1,
        name: 'OCEAN SUITE',
        area: 10,
        cost: 1000,
        maxPeople: 2,
        rentType: {
          id: 1,
          name: 'Year'
        },
        standardRoom: 'vip',
        descriptionOtherConvenience: 'không',
        poolArea: 50,
        numberOfFloors: 2,
        facilityFree: 'không',
        facilityType: {
          id: 1,
          name: 'House'
        },
        url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
      },
      {
        id: 2,
        name: 'OCEAN STUDIO SUITE',
        area: 80,
        cost: 2000,
        maxPeople: 3,
        rentType: {
          id: 1,
          name: 'Year'
        },
        standardRoom: 'vip',
        descriptionOtherConvenience: 'không',
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: 'không',
        facilityType: {
          id: 1,
          name: 'House'
        },
        url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
      },
      {
        id: 3,
        name: 'OCEAN DELUXE',
        area: 30,
        cost: 3000,
        maxPeople: 5,
        rentType: {
          id: 1,
          name: 'Year'
        },
        standardRoom: 'vip',
        descriptionOtherConvenience: 'không',
        poolArea: 40,
        numberOfFloors: 4,
        facilityFree: 'không',
        facilityType: {
          id: 1,
          name: 'House'
        },
        url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
      }, {
        id: 4,
        name: 'STUDIO  BEACH',
        area: 30,
        cost: 3000,
        maxPeople: 5,
        rentType: {
          id: 1,
          name: 'Year'
        },
        standardRoom: 'vip',
        descriptionOtherConvenience: 'không',
        poolArea: 40,
        numberOfFloors: 4,
        facilityFree: 'không',
        facilityType: {
          id: 1,
          name: 'House'
        },
        url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
      });
  }

  getAllFacility() {
    return this.facilityList;
    console.log(this.facilityList);
  }

  saveFacility(facility): Observable<Facility> {
    this.facilityList.push(facility);
    return of(facility);
  }

  delete(id: number) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    });
  }

  update(facility) {
  }

  getById(id: number) {
    for (const item of this.facilityList) {
      if (item.id === id) {
        return item;
      }
    }
  }
}
