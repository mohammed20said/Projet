import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AideService {
  private baseUrl = 'http://localhost:8088/api/aide';
  constructor(private http:HttpClient) { }


  getAllAides(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/aide/all');
  }

  createAide(model:any){
    return this.http.post('http://localhost:8088/api/aide/save',model);
  }

  updateAide(description1: string, montant1: number, catastropheId1: number, id: number): Observable<any> {
    const requestBody = {
      description: description1,
      montant: montant1,
      catastropheId: catastropheId1,
    };
  
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, requestBody);
  }

  deleteAide(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }




}
