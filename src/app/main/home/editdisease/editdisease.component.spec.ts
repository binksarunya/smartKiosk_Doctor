import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiseaseComponent } from './editdisease.component';

describe('EditdiseaseComponent', () => {
  let component: EditdiseaseComponent;
  let fixture: ComponentFixture<EditdiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
