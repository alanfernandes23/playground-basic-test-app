import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/dashboard/patient.component';
import { QuestionnaireDisplayComponent } from './patient/questionnaire-display/questionnaire-display.component';
import { QuestionnaireEditComponent } from './patient/questionnaire-edit/questionnaire-edit.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent},
  { path: 'questionnaireedit', component: QuestionnaireEditComponent},
  { path: 'questionnairedisplay', component: QuestionnaireDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
