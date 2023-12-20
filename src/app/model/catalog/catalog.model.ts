import {Chips} from "../chips/chips.model";

export class Catalog {

  private _chips : Array<Chips> = [];

  constructor(data : any) {
   if(data){
     data.forEach((uneChips : Chips) => {
       this._chips.push(new Chips(uneChips.id,uneChips.nom,uneChips.marque,uneChips.note));
     });
   }
  }


  get chips(): Array<Chips> {
    return this._chips;
  }

  set chips(value: Array<Chips>) {
    this._chips = value;
  }
}
