import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facilityType';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypeList: FacilityType[] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'}
  ];

  constructor() {
  }

  getAllFacilityType(): Observable<FacilityType[]> {
    return of(this.facilityTypeList);
  }
}

