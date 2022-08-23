import {Injectable} from '@angular/core';
import {RentType} from '../model/rentType';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeList: RentType[] = [
    {id: 1, name: 'Year'},
    {id: 1, name: 'Month'},
    {id: 1, name: 'Day'}
  ];

  constructor() {
  }

  getAllRentType(): Observable<RentType[]> {
    return of(this.rentTypeList);
  }
}

