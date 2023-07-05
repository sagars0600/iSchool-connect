import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituteServiceService {
  constructor(private http: HttpClient) {}

  getAllInstituteList(){
    return this.http.get('../../assets/institure.json');
  }
}
