import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireEditComponent } from '../patient/questionnaire-edit/questionnaire-edit.component';


import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    QuestionnaireEditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    MenubarModule,
    TableModule,
    RadioButtonModule,
    CardModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ]
})
export class HomeModule { }
