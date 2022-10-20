import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveDataInfo } from './student.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(public http: HttpClient) {}
  saveDetails(info: SaveDataInfo): Observable<any> {
    return this.http.post('https://localhost4200', info);
  }
}
