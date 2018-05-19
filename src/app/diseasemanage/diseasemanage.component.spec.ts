import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasemanageComponent } from './diseasemanage.component';

describe('DiseasemanageComponent', () => {
  let component: DiseasemanageComponent;
  let fixture: ComponentFixture<DiseasemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
