import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkquestionComponent } from './linkquestion.component';

describe('LinkquestionComponent', () => {
  let component: LinkquestionComponent;
  let fixture: ComponentFixture<LinkquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
