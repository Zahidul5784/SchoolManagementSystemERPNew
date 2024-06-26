import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksListComponent } from './Components/marks/marks-list/marks-list.component';
import { MarksAddComponent } from './Components/marks/marks-add/marks-add.component';
import { MarksEditComponent } from './Components/marks/marks-edit/marks-edit.component';
import { MarksDeleteComponent } from './Components/marks/marks-delete/marks-delete.component';
import { AttendanceListComponent } from './Components/attendance/attendance-list/attendance-list.component';
import { AttendanceAddComponent } from './Components/attendance/attendance-add/attendance-add.component';
import { FeetypeListComponent } from './Components/feetype/feetype-list/feetype-list.component';
import { FeetypeEditComponent } from './Components/feetype/feetype-edit/feetype-edit.component';
import { FeetypeCreateComponent } from './Components/feetype/feetype-create/feetype-create.component';
import { FeeListComponent } from './Components/fee/fee-list/fee-list.component';
import { FeeCreateComponent } from './Components/fee/fee-create/fee-create.component';
import { FeeEditComponent } from './Components/fee/fee-edit/fee-edit.component';
import { MonthlypaymentListComponent } from './Components/monthlypayment/monthlypayment-list/monthlypayment-list.component';
import { MonthlypaymentEditComponent } from './Components/monthlypayment/monthlypayment-edit/monthlypayment-edit.component';
import { MonthlypaymentCreatComponent } from './Components/monthlypayment/monthlypayment-create/monthlypayment-create.component';
import { MonthlypaymentDetailsComponent } from './Components/monthlypayment/monthlypayment-details/monthlypayment-details.component';
import { StaffListComponent } from './Components/staff/staff-list/staff-list.component';

import { StaffSalaryListComponent } from './Components/staff-salary/staff-salary-list/staff-salary-list.component';
import { LoginComponent } from './Authentication/SecurityComponents/login/login.component';
import { AuthGuard } from './Authentication/SecurityModels/auth.guard';
import { StaffCreateComponent } from './Components/staff/staff-create/staff-create.component';
import { OtherpaymentListComponent } from './Components/otherpayment/otherpayment-list/otherpayment-list.component';
import { OtherpaymentCreatComponent } from './Components/otherpayment/otherpayment-creat/otherpayment-creat.component';
import { OtherpaymentEditComponent } from './Components/otherpayment/otherpayment-edit/otherpayment-edit.component';
import { OtherpaymentDetailsComponent } from './Components/otherpayment/otherpayment-details/otherpayment-details.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentCreateComponent } from './Components/department/department-create/department-create.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { StandardListComponent } from './Components/standard/standard-list/standard-list.component';
import { StandardCreateComponent } from './Components/standard/standard-create/standard-create.component';
import { PaymentDetailsPerStudentComponent } from './Components/PaymentDetails/payment-details-per-student/payment-details-per-student.component';
import { StandardEditComponent } from './Components/standard/standard-edit/standard-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/marksList", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  /*{ path: "", redirectTo: "/attendanceList", pathMatch: "full" },*/
  { path: "marksList", component: MarksListComponent, canActivate: [AuthGuard] },
  { path: 'marks/add', component: MarksAddComponent, canActivate: [AuthGuard] },
  { path: 'marks/edit/:id', component: MarksEditComponent },
  { path: "marks/delete/:id", component: MarksDeleteComponent },
  { path: "attendanceList", component: AttendanceListComponent, canActivate: [AuthGuard] },
  { path: "attendance/add", component: AttendanceAddComponent },

  { path: 'fee-types', component: FeetypeListComponent },
  { path: 'fee-types/create', component: FeetypeCreateComponent },
  { path: 'fee-types/:id/edit', component: FeetypeEditComponent },

  { path: 'fees', component: FeeListComponent },
  { path: 'fees/create', component: FeeCreateComponent },
  { path: 'fees/:id/edit', component: FeeEditComponent },

  { path: 'monthlypayment', component: MonthlypaymentListComponent },
  { path: 'monthlypayment/create', component: MonthlypaymentCreatComponent },
  { path: 'monthlypayment/:id/edit', component: MonthlypaymentEditComponent },
  { path: 'monthlypayment/:id/details', component: MonthlypaymentDetailsComponent },
  { path: 'staff-list', component: StaffListComponent },
  { path: 'staff-salaries', component: StaffSalaryListComponent },
  { path: 'staff-create', component: StaffCreateComponent },


  { path: 'otherpayment', component: OtherpaymentListComponent },
  { path: 'otherpayment/create', component: OtherpaymentCreatComponent },
  { path: 'otherpayment/:id/edit', component: OtherpaymentEditComponent },
  { path: 'otherpayment/:id/details', component: OtherpaymentDetailsComponent },

  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/create', component: DepartmentCreateComponent },
  { path: 'departments/:id/edit', component: DepartmentEditComponent },

  { path: 'standards', component: StandardListComponent },
  { path: 'standard/create', component: StandardCreateComponent },
  { path: 'standard/:id/edit', component: StandardEditComponent },

  { path: 'pmaymentdetails', component: PaymentDetailsPerStudentComponent },









];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
