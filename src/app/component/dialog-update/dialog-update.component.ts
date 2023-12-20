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
import { Note } from 'src/app/model/note/note.model';

export interface DialogUpdate {
  chips : Chips;

}


@Component({
  selector: 'dialog-update-example-dialog',
  templateUrl: 'dialog-update.component.html',
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
export class DialogUpdateExampleDialog {
  nom!: string;
  marque!: string;

  constructor(
    private catalogService : CatalogService,
    public dialogRef: MatDialogRef<DialogUpdateExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUpdate
  ) {}

  onSendClick(): void{
    const updateChips = new Chips(this.data.chips.id,this.nom,this.marque,Object.create(null));
    if (this.catalogService.updateCatalog(this.data.chips.id,updateChips).subscribe()){
      
    } else {
      alert("/!\\ MISSION FAILED CHEF !");
    };
    window.location.reload();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}