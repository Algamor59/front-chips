import {Component, Input} from '@angular/core';
import { Catalog } from 'src/app/model/catalog/catalog.model';
import { Note } from 'src/app/model/note/note.model';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DialogCreateExampleDialog } from 'src/app/component/dialog-note/dialog-note.component';


@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css'],
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);

  constructor(public dialog: MatDialog) {}

  displayedColumns: Array<string> = ["nom","marque","note","actions"];

  createNote (){
    //todo
  }

  openDialogNote(note : Note): void {
    const dialogRef = this.dialog.open(DialogCreateExampleDialog, {
    data : {note : note}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog(): void {
  }

  }

