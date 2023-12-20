import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Note } from '../../model/note/note.model';

export interface DialogNote {
  note : Note;
}


@Component({
  selector: 'dialog-note-example-dialog',
  templateUrl: 'dialog-note.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogNoteExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogNoteExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogNote
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}