import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponseDTO } from "./my-blog-response";
import { IData } from "./my-blog-data-component";

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {

  }
  getData(): Observable<IData> {
    console.log("---------------Inside service--------");


    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log(this.http.get<IData>("http://localhost:9090/data") + "---");
    return this.http.get<IData>("http://localhost:9090/data");
  }
  nextData(nextNode:string):Observable<IData> {
    console.log("---------------Inside service--------");


    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log(this.http.get<IData>("http://localhost:9090/data") + "---");
    return this.http.get<IData>("http://localhost:9090/next/"+nextNode);
  }

}