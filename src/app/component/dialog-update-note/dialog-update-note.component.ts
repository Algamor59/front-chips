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

export interface DialogUpdateNote {
  chips : Chips;

}


@Component({
  selector: 'dialog-update-note-example-dialog',
  templateUrl: 'dialog-update-note.component.html',
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
export class DialogUpdateNoteExampleDialog {
  reproductionGout!: number;
  originalite!: number;
  addictivite!: number;
  ressenti!: number;
  bonus!: number;
  

  constructor(
    private catalogService : CatalogService,
    public dialogRef: MatDialogRef<DialogUpdateNoteExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUpdateNote
  ) {}

  onSendClick(): void{
    console.log(typeof this.reproductionGout);  // devrait afficher 'number'
    console.log(typeof this.originalite);  
    Number(this.reproductionGout);

    const finalNote =  Number(this.reproductionGout)+Number(this.originalite)+Number(this.addictivite)+Number(this.ressenti)+Number(this.bonus);
    if (finalNote <=22){
      const updateNote = new Note(this.data.chips.id, this.reproductionGout, this.originalite, this.addictivite, this.ressenti, this.bonus, finalNote);
      const updatedChips = new Chips(this.data.chips.id, this.data.chips.nom, this.data.chips.marque, updateNote);
      if (this.catalogService.createNote(updateNote).subscribe()){
          this.catalogService.updateCatalog(this.data.chips.id, updatedChips).subscribe();
      } else {
        alert("/!\\ MISSION FAILED CHEF !");
      };
      window.location.reload();
      this.dialogRef.close();
    } else {
      alert("/!\\ Le total est supérieur à 22.");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
} 