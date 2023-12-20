import {Component, Input} from '@angular/core';
import { Catalog } from 'src/app/model/catalog/catalog.model';
import { Note } from 'src/app/model/note/note.model';
import { Chips } from 'src/app/model/chips/chips.model';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DialogNoteExampleDialog } from 'src/app/component/dialog-note/dialog-note.component';
import { DialogDeleteExampleDialog } from '../dialog-delete/dialog-delete.component';
import { DialogCreateExampleDialog } from '../dialog-create/dialog-create.component';
import { DialogUpdateExampleDialog } from '../dialog-update/dialog-update.component';
import { DialogUpdateNoteExampleDialog } from '../dialog-update-note/dialog-update-note.component';


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
    const dialogRef = this.dialog.open(DialogNoteExampleDialog, {
    data : {note : note}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog(): void {
  }

  openDialogDelete(chips : Chips): void {
    const dialogRef = this.dialog.open(DialogDeleteExampleDialog, {
    data : {chips : chips}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(DialogCreateExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUpdate(chips : Chips): void {
    const dialogRef = this.dialog.open(DialogUpdateExampleDialog, {
    data : {chips : chips}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUpdateNote(chips : Chips): void {
    const dialogRef = this.dialog.open(DialogUpdateNoteExampleDialog, {
    data : {chips : chips}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }

