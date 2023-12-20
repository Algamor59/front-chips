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
import { Chips } from '../../model/chips/chips.model';
import { CatalogService } from 'src/app/service/catalog/catalog.service';

export interface DialogDelete {
  chips : Chips;
}


@Component({
  selector: 'dialog-delete-example-dialog',
  templateUrl: 'dialog-delete.component.html',
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
export class DialogDeleteExampleDialog {
  constructor(
    private catalogService : CatalogService,
    public dialogRef: MatDialogRef<DialogDeleteExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDelete
  ) {}

  onClickDelete(chips : Chips): void {
    this.catalogService.deleteCatalog(this.data.chips.id).subscribe();
    window.location.reload();
    this.dialogRef.close();
  }

  onNoClick(): void{
    this.dialogRef.close();
  }
}