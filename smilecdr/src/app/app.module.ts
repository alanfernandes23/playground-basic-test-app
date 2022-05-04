import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/dashboard/patient.component';

import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { QuestionnaireDisplayComponent } from './patient/questionnaire-display/questionnaire-display.component';
import { QuestionnaireEditComponent } from './patient/questionnaire-edit/questionnaire-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    QuestionnaireDisplayComponent,
    QuestionnaireEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenubarModule,
    TableModule,
    RadioButtonModule,
    CardModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
