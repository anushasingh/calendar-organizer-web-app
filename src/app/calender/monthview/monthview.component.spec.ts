import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthviewComponent } from './monthview.component';

describe('MonthviewComponent', () => {
  let component: MonthviewComponent;
  let fixture: ComponentFixture<MonthviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
