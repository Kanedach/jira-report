import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStepComponent } from './state-step.component';

describe('StateStepComponent', () => {
  let component: StateStepComponent;
  let fixture: ComponentFixture<StateStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
