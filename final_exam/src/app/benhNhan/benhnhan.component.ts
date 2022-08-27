import {Component, OnInit} from '@angular/core';
import {BenhNhan} from '../benhNhan';
import {BenhNhanService} from '../service/benhNhan.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhAn} from '../benhAn';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-benhnhan',
  templateUrl: './benhnhan.component.html',
  styleUrls: ['./benhnhan.component.css']
})
export class BenhnhanComponent implements OnInit {

  constructor(private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService) {
  }

  id: number;
  name: string;
  idBenhAn: string;

  benhNhanList: BenhNhan[];

  benhAnList: BenhAn[];

  benhNhanForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z-a-z ]{5,}$')]),
    dateStart: new FormControl('', Validators.required),
    dateEnd: new FormControl('', Validators.required),
    lyDo: new FormControl('', Validators.required),
    phuongPhap: new FormControl('', Validators.required),
    bacSi: new FormControl('', Validators.required),
    benhAn: new FormControl('', Validators.required)
  });
  p = 1;

  ngOnInit(): void {
    this.getAllBenhNhan();
    this.getAllBenhAn();
    const toast = this.activatedRoute.snapshot.params.toast;
    if (toast === 'edit-success') {
      this.toast.success('Edit Bệnh Án thành công!', 'Bệnh Án!');
    }
  }

  getAllBenhNhan() {
    this.benhNhanService.findAll().subscribe(value => {
      this.benhNhanList = value;
    }, error => {
      console.log(error);
    });
  }

  getAllBenhAn() {
    this.benhNhanService.findAllBenhAn().subscribe(value => {
      this.benhAnList = value;
    }, error => {
      console.log(error);
    });
  }

  valueOf(idDelete: number, name: string) {
    this.id = idDelete;
    this.name = name;
    console.log(this.id);
  }

  delete() {
    this.benhNhanService.delete(this.id).subscribe(value => {
    }, error => {

    }, () => {
      this.toast.success('Xóa Bệnh Án thành công !', 'Bệnh án!');
      this.getAllBenhNhan();
    });
  }
}
