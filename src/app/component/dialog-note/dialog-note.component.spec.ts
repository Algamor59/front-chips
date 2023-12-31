import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoteExampleDialog } from './dialog-note.component';

describe('DialogNoteExampleDialog', () => {
  let component: DialogNoteExampleDialog;
  let fixture: ComponentFixture<DialogNoteExampleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNoteExampleDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogNoteExampleDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
