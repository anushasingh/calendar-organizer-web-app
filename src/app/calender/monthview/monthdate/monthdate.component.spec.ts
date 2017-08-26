import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthdateComponent } from './monthdate.component';

describe('MonthdateComponent', () => {
  let component: MonthdateComponent;
  let fixture: ComponentFixture<MonthdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
