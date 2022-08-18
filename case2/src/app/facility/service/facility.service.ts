import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() {
  }

  facility: Facility[] = [{
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
    name: 'PHÒNG SUITE HƯỚNG BIỂN',
    useAble: 85.8
  }, {
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg',
    name: 'PHÒNG STUDIO HƯỚNG BIỂN',
    useAble: 40.1
  }, {
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg',
    name: 'PHÒNG DELUXE HƯỚNG BIỂN',
    useAble: 43.7
  }, {
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg',
    name: 'PHÒNG SUPERIOR CÓ VƯỜN',
    useAble: 85.8
  }, {
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg',
    name: 'PHÒNG SUPERIOR HƯỚNG HỒ',
    useAble: 77.8
  }, {
    url: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg',
    name: 'BIỆT THỰ CÓ HỒ BƠI RIÊNG',
    useAble: 66.8
  }];

  getAll() {
    return this.facility;
  }
}
