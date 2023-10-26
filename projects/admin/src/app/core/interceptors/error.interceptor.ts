import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  
  constructor(private toastr : ToastrService,private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.toastr.error(error.error.message);
        if(error.error.message == 'jwt expired'){
          this.router.navigate(['/login']);
          localStorage.removeItem('token');  
        }
        throw error;
      })
    )
  }
}
