import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../../model/catalog/catalog.model";
import {environment} from "../../../environments/environment";
import { Chips } from 'src/app/model/chips/chips.model';
import { Note } from 'src/app/model/note/note.model';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  url : string;
  constructor(private httpClient : HttpClient) {
    this.url = environment.apiUrl;
  }

  //GET
  getCatalog(){
    return this.httpClient.get<Catalog>(this.url);
  }

  //POST
  createCatalog(chips : Chips){
    return this.httpClient.post(this.url+ '/save/chips',chips);
  }

  //POST
  createNote(note : Note){
    return this.httpClient.post(this.url+ '/save/note',note);
  }

  //PUT
  updateCatalog(id : number, chips : Chips){
    return this.httpClient.put(this.url + '/update/' + id, chips);
  }

  //DELETE
  deleteCatalog(id : number){
    return this.httpClient.delete(this.url + '/delete/' + id);
  }
}
