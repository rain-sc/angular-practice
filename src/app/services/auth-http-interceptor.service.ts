import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('ngToken');
    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    const started = Date.now();

    return next.handle(newReq).pipe(
      tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${newReq.urlWithParams} took ${elapsed} ms.`, event.status);
        }
      })
    )
}
}