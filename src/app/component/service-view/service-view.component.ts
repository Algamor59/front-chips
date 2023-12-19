import {Component, Input, signal} from '@angular/core';
import {Chips} from "../../model/chips/chips.model";
import { Catalog } from 'src/app/model/catalog/catalog.model';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);

  displayedColumns: Array<string> = ["nom","description","note"];

  createNote (){
    //todo
  }

showNote(chips : Chips){

}

}
