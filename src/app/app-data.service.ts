import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AppDataService {

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get('../files/example.json');
  }
}
