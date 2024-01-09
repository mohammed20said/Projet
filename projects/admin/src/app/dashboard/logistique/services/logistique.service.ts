import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogistiqueService {

  private baseUrl = 'http://localhost:8088/api/logistique';

  constructor(private http:HttpClient) { }

  getAllLogistique(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/logistique/all');
  }
  createLogistique(model:any){
    return this.http.post('http://localhost:8088/api/logistique/save',model);
  }

  updateLogistique(latitude:number,longitude:number,description1: string, catastropheId1: number, id: number): Observable<any> {
    const requestBody = {
      latitude:latitude,
      longitude:longitude,
      description: description1,
      catastropheId: catastropheId1,
    };
  
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, requestBody);
  }

  deleteLogistique(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }

}
