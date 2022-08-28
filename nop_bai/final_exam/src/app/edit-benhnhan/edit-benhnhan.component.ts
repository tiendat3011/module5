import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../benhAn';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhNhan} from '../benhNhan';
import {BenhNhanService} from '../service/benhNhan.service';

@Component({
  selector: 'app-edit-benhnhan',
  templateUrl: './edit-benhnhan.component.html',
  styleUrls: ['./edit-benhnhan.component.css']
})
export class EditBenhnhanComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private benhNhanService: BenhNhanService) {
  }

  benhNhan: BenhNhan;

  benhAns: BenhAn[];

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

  ngOnInit(): void {
    this.benhNhanService.findAllBenhAn().subscribe(value => {
      this.benhAns = value;
    }, error => {
      console.log(error);
    });

    const id = Number(this.activatedRoute.snapshot.params.id);
    this.benhNhanService.findById(id).subscribe(value => {
      this.benhNhan = value;
      this.benhNhanForm.patchValue(this.benhNhan);
    });
  }

  onSubmitUpdate() {
    this.benhNhan = this.benhNhanForm.value;
    this.benhNhanService.update(this.benhNhan).subscribe(value => {
      console.log(this.benhNhan);
    }, error => {

    }, () => {
      this.router.navigateByUrl('./edit-success');
    });
  }

}
