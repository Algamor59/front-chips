import {Note} from "../note/note.model";

export class Chips {

  public id : number;

  public nom : string;

  public marque : string;

  public note : Note;


  constructor(id : any, nom : string, marque : string, note : Note) {
    this.id = 0;
    this.nom = nom;
    this.marque = marque;
    this.note = note ? new Note(note) : Object.create(null);
  }

}
