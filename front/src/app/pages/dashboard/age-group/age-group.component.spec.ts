import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGroupComponent } from './age-group.component';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';

describe('AgeGroupComponent', () => {
  let component: AgeGroupComponent;
  let fixture: ComponentFixture<AgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGroupComponent],
      providers: [GroupService, HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
