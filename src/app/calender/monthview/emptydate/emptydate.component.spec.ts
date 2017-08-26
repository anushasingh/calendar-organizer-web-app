import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptydateComponent } from './emptydate.component';

describe('EmptydateComponent', () => {
  let component: EmptydateComponent;
  let fixture: ComponentFixture<EmptydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
