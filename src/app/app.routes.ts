import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
//   { path: 'add', component: CreateEmployeeComponent },
//   { path: 'update/:id', component: UpdateEmployeeComponent },
//   { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
