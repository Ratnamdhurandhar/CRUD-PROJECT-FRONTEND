import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
employees: Employee[]=[];

constructor(private employeeServices: EmployeeService,private router : Router){}



ngOnInit():void{
this.getEmployees();
}

private getEmployees(){
  this.employeeServices.getEmployeeList().subscribe(data => {
    this.employees=data;
  });
}

updateEmployee(id:number){
  this.router.navigate(['update-employee',id]);
}

deleteEmployee(id:number){
  this.employeeServices.deleteEmployee(id).subscribe(data =>{
    console.log(data);
    this.getEmployees();
  })
}

employeeDetails(id:number){
  this.router.navigate(['employee-details',id]);
}


}
