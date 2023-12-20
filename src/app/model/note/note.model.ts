export class Note {

  public id : number;

  public reproductionGout : number;

  public originalite : number;

  public addictivite : number;

  public ressenti : number;

  public bonus : number;

  public note : number;

  constructor(data : any){
    this.id = data.id ? data.id : 22;
    this.reproductionGout = data.reproductionGout ? data.reproductionGout : 0;
    this.originalite = data.originalite ? data.originalite : 0;
    this.addictivite = data.addictivite ? data.addictivite : 0;
    this.ressenti = data.ressenti ? data.ressenti : 0;
    this.bonus = data.bonus ? data.bonus : 0;
    this.note = data.note ? data.note : 0;
  }
}
