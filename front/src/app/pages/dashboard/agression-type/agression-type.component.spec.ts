import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgressionTypeComponent } from './agression-type.component';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';

describe('AgressionTypeComponent', () => {
  let component: AgressionTypeComponent;
  let fixture: ComponentFixture<AgressionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgressionTypeComponent],
      providers: [GroupService, HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(AgressionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
