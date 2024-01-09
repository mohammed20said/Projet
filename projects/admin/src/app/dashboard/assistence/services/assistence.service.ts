import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistenceService {

  private baseUrl = 'http://localhost:8088/api/assistence';

  constructor(private http:HttpClient) { }

  getAllAssistence(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/api/assistence/all');
  }
  createAssistence(model:any){
    return this.http.post('http://localhost:8088/api/assistence/save',model);
  }

  updateAssistence(nom:string,adresse:string,telephone: string,email:string, catastropheId1: number, id: number): Observable<any> {
    const requestBody = {
      nom:nom,
      adresse:adresse,
      telephone: telephone,
      email: email,
      catastropheId: catastropheId1,
    };
  
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, requestBody);
  }

  deleteAssistence(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
