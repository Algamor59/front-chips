export class Note {

  public id : number;

  public reproductionGout : number;

  public originalite : number;

  public addictivite : number;

  public bonus : number;

  public note : number;

  constructor(data : any){
    this.id = data.id ? data.id : null;
    this.originalite = data.originalite ? data.originalite : null;
    this.addictivite = data.addictivite ? data.addictivite : null;
    this.bonus = data.bonus ? data.bonus : null;
    this.note = data.note ? data.note : null;
    this.reproductionGout = data.reproductionGout ? data.reproductionGout : null;
  }
}
