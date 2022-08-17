import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFacilityComponent } from './modal-create-facility.component';

describe('ModalCreateFacilityComponent', () => {
  let component: ModalCreateFacilityComponent;
  let fixture: ComponentFixture<ModalCreateFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
