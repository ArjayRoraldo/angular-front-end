import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelValidationComponent } from './model-validation.component';

describe('ModelValidationComponent', () => {
  let component: ModelValidationComponent;
  let fixture: ComponentFixture<ModelValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelValidationComponent]
    });
    fixture = TestBed.createComponent(ModelValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
