import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Datos {
  userId: number
  id: number
  title: string
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(
    private http: HttpClient
  ) { }
  obtenerDatoss(): Observable<Datos[]> {
    return this.http.get<Datos[]>(this.url);
  }
}
