import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiStepComponent } from './pi-step.component';

describe('PiStepComponent', () => {
  let component: PiStepComponent;
  let fixture: ComponentFixture<PiStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
