import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.css'],
})
export class InstituteDetailsComponent implements OnInit {
  totalCourseCount:any;
  totalNumber:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.http.get('../../../assets/institure.json').subscribe((data:any) =>{
      this.totalCourseCount = data.data.total_courses_count;
      this.totalNumber = data.data.total;
    })
  }
}
