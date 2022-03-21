import { Injectable, OnInit } from '@angular/core';
import { BaseInjectorConstructor } from 'ng-mix';
import { Observable } from 'rxjs';
import { Employee } from '../app/models/Employee';
import { EmployeeService } from '../services/employee.service';

export const EmployeeListMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

  @Injectable()
  class EmployeeList extends superClass implements OnInit {
    employeeList$: Observable<Employee[]> | null = null
    employeeSrvc = this.injector.get(EmployeeService);
	

    ngOnInit(): void {
      super.ngOnInit();

      this.employeeList$ = this.employeeSrvc.getEmployees();
    }		
  }

  return EmployeeList;
}