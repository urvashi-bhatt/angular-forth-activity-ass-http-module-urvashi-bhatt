import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
@Component({
  selector: 'app-employee-list',
  template: `<h2>Employee List</h2>
<ul *ngFor="let x of employees">
  <li>{{x.id}}--->{{x.age}}--->{{x.name}}</li>
</ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
 public employees = [] as any;
 public errorMSG:any

  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployees().subscribe(data => 
      this.employees=data, 
      error => this.errorMSG = error);
  }

}
