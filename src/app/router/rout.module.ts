import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../main/home/home.component';
import { MainComponent } from '../main/main.component';
import { AddsymptomComponent } from '../main/home/addsymptom/addsymptom.component';
import { DiseaseComponent } from '../main/home/disease/disease.component';
import { QuestionComponent } from '../main/home/question/question.component';
import { AdmissionComponent } from '../main/admission/admission.component';
import { EditdiseaseComponent } from '../main/home/editdisease/editdisease.component';
import { EditquestionComponent } from '../main/home/editquestion/editquestion.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [

      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'addsymptom',
        component: AddsymptomComponent
      },
      {
        path: 'disease',
        component: DiseaseComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'admission',
        component: AdmissionComponent,
      },
      {
        path: 'editdisease',
        component: EditdiseaseComponent,
      },
      {
        path: 'editquestion',
        component: EditquestionComponent,
      }


    ],
    canActivate: [AuthService],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class Rout {
}
