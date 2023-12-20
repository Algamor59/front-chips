export class Note {

  public id : number;

  public reproductionGout : number;

  public originalite : number;

  public addictivite : number;

  public ressenti : number;

  public bonus : number;

  public note : number;

  constructor(id : number, reproductionGout: number, originalite : number, addictivite : number, ressenti : number, bonus : number, note : number){
    this.id = id ? id : 22;
    this.reproductionGout = reproductionGout ? reproductionGout : 0;
    this.originalite = originalite ? originalite : 0;
    this.addictivite = addictivite ? addictivite : 0;
    this.ressenti = ressenti ? ressenti : 0;
    this.bonus = bonus ? bonus : 0;
    this.note = note ? note : 0;
  }
}
