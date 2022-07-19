import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Food } from "./model/Food";

@Injectable()

export class FoodService
{
  private urlApi = "https://sheet.best/api/sheets/7cf8ad6c-0869-4659-813d-f7ee8ee603ce";

  httpOptions = {
    Headers: new HttpHeaders({"content-type":"application/json"})
  }

  constructor(private http:HttpClient){}

  getFood(){
    return this.http.get(this.urlApi)
  }


}
