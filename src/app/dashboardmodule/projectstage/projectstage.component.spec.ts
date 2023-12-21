import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstageComponent } from './projectstage.component';

describe('ProjectstageComponent', () => {
  let component: ProjectstageComponent;
  let fixture: ComponentFixture<ProjectstageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectstageComponent]
    });
    fixture = TestBed.createComponent(ProjectstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
