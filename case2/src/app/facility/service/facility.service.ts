import {Injectable} from '@angular/core';
import {RentTypeService} from './rent-type.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {FacilityTypeService} from './facility-type.service';
import {RentType} from '../model/rentType';
import {FacilityType} from '../model/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_FACILITY = 'http://localhost:3000/facility';
  private URL_FACILITY_TYPE = 'http://localhost:3000/facilityType';
  private URL_FACILITY_RENT_TYPE = 'http://localhost:3000/rentType';
  facilityList: Facility[] = [];

  constructor(facilityTypeService: FacilityTypeService,
              private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_FACILITY);
  }

  getAllFacilityType(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_FACILITY_TYPE);
  }
  getAllRentType(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_FACILITY_RENT_TYPE);
  }
  save(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.URL_FACILITY, facility);
  }
  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(this.URL_FACILITY + '/' + id);
  }
  findByIdRentType(id: number): Observable<RentType> {
    return this.http.get<RentType>(this.URL_FACILITY_RENT_TYPE + '/' + id);
  }
  findByIdFacilityType(id: number): Observable<FacilityType> {
    return this.http.get<FacilityType>(this.URL_FACILITY_TYPE + '/' + id);
  }
  delete(id: number): Observable<Facility> {
    return this.http.delete<Facility>(this.URL_FACILITY + '/' + id);
  }
  update(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(this.URL_FACILITY + '/' + id, facility);
  }
}
