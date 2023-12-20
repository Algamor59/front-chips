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

export interface DialogCreate {
  note : Note;
}


@Component({
  selector: 'dialog-create-example-dialog',
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
export class DialogCreateExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCreate
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}