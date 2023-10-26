import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http : HttpClient) { }


  getUserTasks(userId:any,tasksParams : any){
    let params = new HttpParams();
    Object.entries(tasksParams).forEach(([key,value]:any)=>{
      params = params.append(key,value);
    })
    return this.http.get(environment.baseApi+'/user-tasks/'+userId,{params});
  }

  completeTask(model : any){
    return this.http.put(environment.baseApi + '/complete',model);
  }
  taskDetails(id : any){
    return this.http.get(environment.baseApi + '/task/'+id);
  }
}
