import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFormDataComponent } from './parent-form-data.component';

describe('ParentFormDataComponent', () => {
  let component: ParentFormDataComponent;
  let fixture: ComponentFixture<ParentFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentFormDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
