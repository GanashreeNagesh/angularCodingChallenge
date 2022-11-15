import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.interface";

@Injectable({
  providedIn: "root",
})
export class PostingsService {
  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "fr-access-token": "Vd6phDRvh6BDNbDGpzOLI1FxHorF12jK",
    }),
  };

  getPostList(): Observable<Post[]> {
    return this._http.get<Post[]>(
      "https://fe-challenge.api.alphin.dev/v1/postings"
    );
  }

  getPost(id) {
    return this._http.get(
      `https://fe-challenge.api.alphin.dev/v1/postings/${id}`
    );
  }
}
