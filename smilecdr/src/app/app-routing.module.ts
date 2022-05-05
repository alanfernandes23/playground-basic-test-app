import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/dashboard/patient.component';
import { QuestionnaireDisplayComponent } from './patient/questionnaire-display/questionnaire-display.component';
import { QuestionnaireEditComponent } from './patient/questionnaire-edit/questionnaire-edit.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'patient', component: PatientComponent},
  { path: 'questionnaireedit', component: HomeComponent},
  { path: 'questionnairedisplay', component: QuestionnaireDisplayComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
