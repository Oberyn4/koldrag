import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Racun } from './models/Racun';

@Injectable({
  providedIn: 'root'
})
export class RacuniService {

  constructor(private http:HttpClient) { }

  getRacuni():Observable<Racun[]>{
    return this.http.get<Racun[]>('http://localhost:3000/potrosnjaMeseci');
  }
}
