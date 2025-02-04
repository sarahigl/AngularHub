import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpBindingComponent } from './tp-binding.component';

describe('TpBindingComponent', () => {
  let component: TpBindingComponent;
  let fixture: ComponentFixture<TpBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
