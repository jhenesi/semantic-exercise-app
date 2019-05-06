import { PeriodicElement } from './../../admin/secured/secured.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private elementsUrl = 'api/elements';

  constructor(private http: HttpClient) { }

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementsUrl);
  }
}
