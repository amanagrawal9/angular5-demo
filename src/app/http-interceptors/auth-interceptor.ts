import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('authToken')) {
      return next.handle(req.clone({
        setHeaders: {
          'Authentication': localStorage.getItem('authToken')
        }
      }));
    } else {
      return next.handle(req);
    }
  }
}
