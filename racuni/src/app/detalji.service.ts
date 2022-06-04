import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Racun } from './models/Racun';

@Injectable({
  providedIn: 'root'
})
export class DetaljiService {

  constructor(private http:HttpClient) { }

  getRacuniById(id:number):Observable<Racun>{
    return this.http.get<Racun>('http://localhost:3000/potrosnjaMeseci/' + id);
  };
}
