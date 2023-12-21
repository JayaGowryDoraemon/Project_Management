import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectstageComponent } from './addprojectstage.component';

describe('AddprojectstageComponent', () => {
  let component: AddprojectstageComponent;
  let fixture: ComponentFixture<AddprojectstageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprojectstageComponent]
    });
    fixture = TestBed.createComponent(AddprojectstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
