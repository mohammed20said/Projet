import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {

  private baseUrl = 'http://localhost:8088/api/besoin';

  constructor(private http:HttpClient) { }

  getAllBesoin(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/besoin/all');
  }
  createBesoin(model:any){
    return this.http.post('http://localhost:8088/api/besoin/save',model);
  }

  updateBesoin(description1: string, catastropheId1: number, id: number): Observable<any> {
    const requestBody = {
      description: description1,
      catastropheId: catastropheId1,
    };
  
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, requestBody);
  }

  deleteBesoin(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }

}
