import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageEditorComponent } from './orphanage-editor.component';

describe('OrphanageEditorComponent', () => {
  let component: OrphanageEditorComponent;
  let fixture: ComponentFixture<OrphanageEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
