import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatastropheService {
  private baseUrl = 'http://localhost:8088/api/catastrophes';

  constructor(private http:HttpClient) { }

  createCatastrophe(model:FormData){
    console.log(model);
    return this.http.post('http://localhost:8088/api/catastrophes/save',model);
  }

  
  getCatastropheById(catastropheId: number): Observable<any> {
    const url = `${this.baseUrl}/getCatastropheById/${catastropheId}`;
    return this.http.get(url);
  }

  getAllCatastrophes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/catastrophes/all');
  }

  deleteCatastrophe(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }

  updateCatastrophe( updatedCatastrophe: any,id: any): Observable<any> {
    const url = `${this.baseUrl}/update/${id}`; 
    return this.http.put(url, updatedCatastrophe);
  }

  getAllCatastropheIds(): Observable<number[]> {
    const url = `${this.baseUrl}/all-ids`;
    return this.http.get<number[]>(url);
  }

  



}
