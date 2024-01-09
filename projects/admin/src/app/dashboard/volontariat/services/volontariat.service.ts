import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolontariatService {

  private baseUrl = 'http://localhost:8088/api/volontariat';

  constructor(private http:HttpClient) { }

  getAllVolontariat(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/volontariat/all');
  }
  createVolontariat(model:any){
    return this.http.post('http://localhost:8088/api/volontariat/save',model);
  }

  updateVolontariat(nom:string,adresse:string,telephone: string,email:string,disponibilite:string, catastropheId1: number, id: number): Observable<any> {
    const requestBody = {
      nom:nom,
      adresse:adresse,
      telephone: telephone,
      email: email,
      disponibilite:disponibilite,
      catastropheId: catastropheId1,
    };
  
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, requestBody);
  }

  deleteVolontariat(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
