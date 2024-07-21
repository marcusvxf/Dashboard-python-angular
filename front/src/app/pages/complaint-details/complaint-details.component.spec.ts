import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailsComponent } from './complaint-details.component';

describe('ComplaintDetailsComponent', () => {
  let component: ComplaintDetailsComponent;
  let fixture: ComponentFixture<ComplaintDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should calculate the age', () => {
    expect(component.get_age('1999-11-25T17:20:00')).toEqual(24);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
