import { Injectable } from '@angular/core';
import * as data from '../files/example.json';

import { Observable, of } from 'rxjs';

@Injectable()
export class AppDataService {
  getData(): Observable<any> {
    return of((data as any).default);
  }
}
