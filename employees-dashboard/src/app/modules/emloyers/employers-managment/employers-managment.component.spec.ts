import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersManagmentComponent } from './employers-managment.component';

describe('EmployersManagmentComponent', () => {
  let component: EmployersManagmentComponent;
  let fixture: ComponentFixture<EmployersManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
