import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceControlCenterChildArticleComponent } from './exercice-control-center-child-article.component';

describe('ExerciceControlCenterChildArticleComponent', () => {
  let component: ExerciceControlCenterChildArticleComponent;
  let fixture: ComponentFixture<ExerciceControlCenterChildArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceControlCenterChildArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceControlCenterChildArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
