import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateFacilityComponent } from './modal-update-facility.component';

describe('ModalUpdateFacilityComponent', () => {
  let component: ModalUpdateFacilityComponent;
  let fixture: ComponentFixture<ModalUpdateFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
