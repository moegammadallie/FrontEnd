import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patient/patient-edit/patient-edit.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioEditComponent } from './components/physio/physio-edit/physio-edit.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { BookingCreateComponent } from './components/booking/booking-create/booking-create.component';
import { BookingEditComponent } from './components/booking/booking-edit/booking-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PatientListComponent,
    PatientCreateComponent,
    PatientEditComponent,
    PhysioListComponent,
    PhysioCreateComponent,
    PhysioEditComponent,
    BookingListComponent,
    BookingCreateComponent,
    BookingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
