import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceControlCenterChildComponent } from './exercice-control-center-child.component';

describe('ExerciceControlCenterChildComponent', () => {
  let component: ExerciceControlCenterChildComponent;
  let fixture: ComponentFixture<ExerciceControlCenterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceControlCenterChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceControlCenterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
