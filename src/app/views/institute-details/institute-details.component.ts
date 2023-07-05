import { Component, OnInit } from '@angular/core';
import { InstituteServiceService } from 'src/app/services/institute-service.service';
@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.css'],
})
export class InstituteDetailsComponent implements OnInit {
  totalCourseCount: any;
  totalNumber: any;
  lists: any;
  panelOpenState = false;
  schools: any;
  masterCheckboxSelected: any;
  bachelorsCheckboxSelected: any;
  DoctorateCheckboxSelected: any;
  geoinformaticsCheckboxSelected: any;
  computerCheckboxSelected: any;
  architectureCheckboxSelected: any;
  philosophyCheckboxSelected: any;
  filteredLists: any[] = [];
  showFilteredData: boolean = false;
  constructor(private httpService: InstituteServiceService) {}

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList() {
    this.httpService.getAllInstituteList().subscribe((data: any) => {
      this.totalCourseCount = data.data.total_courses_count;
      this.totalNumber = data.data.total;
      this.lists = data.data.results;
      this.filteredLists = this.lists.slice();
      this.lists.map((x: any) => {
        this.schools = x.courses;
      });

    });
  }

  filterList(event: any) {
    const input = event.target.value;
    console.log(input)
    this.filteredLists = this.lists.filter((item: any) => {
      const instituteName = item.name.toLowerCase();
      return instituteName.includes(input.toLowerCase());
    });
    this.showFilteredData = true;
  }

  onChange() {
    this.filteredLists = [];

    this.lists.forEach((list: any) => {
      const filteredCourses = list.courses.filter((course: any) => {
        if (
          this.bachelorsCheckboxSelected &&
          course.degree.includes('Bachelors')
        ) {
          return true;
        }
        if (this.masterCheckboxSelected && course.degree.includes('Masters')) {
          return true;
        }
        if (
          this.DoctorateCheckboxSelected &&
          course.degree.includes('Doctorate')
        ) {
          return true;
        }
        if (
          this.geoinformaticsCheckboxSelected &&
          course.name.includes('Geoinformatics')
        ) {
          return true;
        }
        if (
          this.philosophyCheckboxSelected &&
          course.name.includes('Psychology')
        ) {
          return true;
        }
        if (
          this.computerCheckboxSelected &&
          course.name.includes('Computer Science')
        ) {
          return true;
        }
        if (
          this.architectureCheckboxSelected &&
          course.name.includes('Architecture')
        ) {
          return true;
        }
        return false;
      });

      if (filteredCourses.length > 0) {
        const filteredList = { ...list, courses: filteredCourses };
        this.filteredLists.push(filteredList);
      }

      console.log(this.filteredLists);
    });
    this.showFilteredData =
      this.bachelorsCheckboxSelected ||
      this.masterCheckboxSelected ||
      this.geoinformaticsCheckboxSelected ||
      this.DoctorateCheckboxSelected ||
      this.architectureCheckboxSelected ||
      this.computerCheckboxSelected ||
      this.philosophyCheckboxSelected;
  }
}
