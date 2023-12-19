import {Note} from "../note/note.model";

export class Chips {

  private _id : number;

  public nom : string;

  public marque : string;

  private _note : Array<Note> = []


  constructor(data : any) {
    this._id = data.id ? data.id : null;
    this.nom = data.nom ? data.nom : null;
    this.marque = data.marque ? data.marque : null;
    this._note = data.note ? new Note(data.note) : Object.create(null);
  }

}
