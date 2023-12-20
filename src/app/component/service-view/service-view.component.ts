import {Component, Input} from '@angular/core';
import { Catalog } from 'src/app/model/catalog/catalog.model';
import { Chips } from 'src/app/model/chips/chips.model';


@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);

  displayedColumns: Array<string> = ["nom","marque","note"];

  createNote (){
    //todo
  }

  openDialog(chips : Chips){
  }

  }

