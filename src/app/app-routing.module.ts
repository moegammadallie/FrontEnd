import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patient/patient-edit/patient-edit.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { BookingCreateComponent } from './components/booking/booking-create/booking-create.component';
import { BookingEditComponent } from './components/booking/booking-edit/booking-edit.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioEditComponent } from './components/physio/physio-edit/physio-edit.component';


const routes: Routes = [
  
  {path: 'patients', component: PatientListComponent}, 
  {path: 'patients/new', component: PatientCreateComponent},
  {path: 'patients/edit', component: PatientEditComponent},
  {path: 'appointments', component: BookingListComponent},
  {path: 'appointments/new', component: BookingCreateComponent},
  {path: 'appointments/view', component: BookingEditComponent},
  {path: 'physios', component: PhysioListComponent},
  {path: 'physios/create', component: PhysioCreateComponent},
  {path: 'physios/edit', component: PhysioEditComponent},
  {path: '', redirectTo: 'appointments', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
