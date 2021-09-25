import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageListComponent } from './orphanage-list.component';

describe('OrphanageListComponent', () => {
  let component: OrphanageListComponent;
  let fixture: ComponentFixture<OrphanageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
