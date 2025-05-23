import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksListComponent } from './works-list.component';

describe('WorksListComponent', () => {
  let component: WorksListComponent;
  let fixture: ComponentFixture<WorksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
