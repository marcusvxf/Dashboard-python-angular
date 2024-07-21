import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgressionTypeComponent } from './agression-type.component';

describe('AgressionTypeComponent', () => {
  let component: AgressionTypeComponent;
  let fixture: ComponentFixture<AgressionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgressionTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgressionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
