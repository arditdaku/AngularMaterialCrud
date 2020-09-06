import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) {}

  ngOnInit(): void {}

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 4, value: 'Dep 2' },
    { id: 5, value: 'Dep 3' },
  ];
}
