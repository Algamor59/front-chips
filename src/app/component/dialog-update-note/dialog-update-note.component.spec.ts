import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateNoteComponent } from './dialog-update-note.component';

describe('DialogUpdateNoteComponent', () => {
  let component: DialogUpdateNoteComponent;
  let fixture: ComponentFixture<DialogUpdateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUpdateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
