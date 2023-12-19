export class Note {

  private _id : number;

  private _reproductionGout : number;

  private _originalite : number;

  private _addictivite : number;

  private _bonus : number;

  private _note : number;

  constructor(data : any){
    this._id = data.id ? data.id : null;
    this._originalite = data.originalite ? data.originalite : null;
    this._addictivite = data.addictivite ? data.addictivite : null;
    this._bonus = data.bonus ? data.bonus : null;
    this._note = data.note ? data.note : null;
    this._reproductionGout = data.reproductionGout ? data.reproductionGout : null;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}
