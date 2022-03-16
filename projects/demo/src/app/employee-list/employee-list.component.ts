import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { Option } from '../models/Option';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeOptionList$: Observable<Option<Employee>[]> | null = null;

  selectedOptions: Option<Employee>[] = [];

  constructor(private employeeSrvc: EmployeeService) { }

  ngOnInit() {
    this.employeeOptionList$ = this.employeeSrvc.getEmployees().pipe(
      map((employees) =>
        employees.map((employee) => ({
          label: `${employee.firstName} ${employee.lastName}`,
          value: employee
        })))
    );
  }
}
