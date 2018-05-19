import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionmanageComponent } from './questionmanage.component';

describe('QuestionmanageComponent', () => {
  let component: QuestionmanageComponent;
  let fixture: ComponentFixture<QuestionmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
