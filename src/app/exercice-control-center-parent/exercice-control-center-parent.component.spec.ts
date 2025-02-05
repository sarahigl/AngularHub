import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceControlCenterParentComponent } from './exercice-control-center-parent.component';

describe('ExerciceControlCenterParentComponent', () => {
  let component: ExerciceControlCenterParentComponent;
  let fixture: ComponentFixture<ExerciceControlCenterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceControlCenterParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceControlCenterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
