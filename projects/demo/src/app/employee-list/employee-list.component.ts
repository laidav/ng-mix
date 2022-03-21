import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../models/Option';
import { map } from 'rxjs/operators';
import { EmployeeListMixin } from '../../mixins/employee-list.mixin';
import { Employee } from '../models/Employee';
import { Base } from 'ng-mix';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent extends EmployeeListMixin(Base) implements OnInit {
  employeeOptionList$: Observable<Option<Employee>[]> | null = null;
  selectedOptions: Option<Employee>[] = [];

  constructor(public inj: Injector) { super(inj); }

  optionToggled(option: Option<Employee>) {
    const index = this.selectedOptions.indexOf(option);

    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.addOption(option);
    }
  }

  addOption(option: Option<Employee>) {
    this.selectedOptions.push(option);
  }

  ngOnInit() {
    super.ngOnInit();

    this.employeeOptionList$ = this.employeeList$?.pipe(
      map((employees) =>
        employees.map((employee) => ({
          label: `${employee.firstName} ${employee.lastName}`,
          value: employee
        })))
    ) || null;
  }
}
