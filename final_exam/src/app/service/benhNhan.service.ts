import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhNhan} from '../benhNhan';
import {BenhAn} from '../benhAn';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private http: HttpClient) {
  }

  API = 'http://localhost:8080/benhNhanList';
  API_CLASS = 'http://localhost:8080/benhAnList';


  findAll(): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(this.API);
  }

  create(student: BenhNhan): Observable<void> {
    return this.http.post<void>(this.API, student);
  }

  findById(id: number): Observable<BenhNhan> {
    return this.http.get<BenhNhan>(this.API + '/' + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.API + '/' + id);
  }

  update(student: BenhNhan): Observable<void> {
    return this.http.patch<void>(this.API + '/' + student.id, student);
  }

  findAllBenhAn(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(this.API_CLASS);
  }

  search(name: string, idClass: string): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(this.API + '?name_like=' + name + '&' + 'class.id_like=' + idClass);
  }
}
