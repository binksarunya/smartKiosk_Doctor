import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInput } from '@angular/material'
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
 


import { Rout } from './router/rout.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { AddsymptomService } from './services/addsymptom.service';
import { DiseaseService } from './services/disease.service';
import { QuestionService } from './services/question.service';
import { DiagService } from './services/diag.service';
import { GetpatientService } from './services/getpatient.service';

import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { AddsymptomComponent } from './main/home/addsymptom/addsymptom.component';
import { DiseaseComponent } from './main/home/disease/disease.component';
import { QuestionComponent } from './main/home/question/question.component';
import { AdmissionComponent } from './main/admission/admission.component';
import { EditdiseaseComponent } from './main/home/editdisease/editdisease.component';
import { EditquestionComponent } from './main/home/editquestion/editquestion.component';

import { HeadbarComponent } from './headbar/headbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    MenuComponent,
    AddsymptomComponent,
    DiseaseComponent,
    QuestionComponent,
    AdmissionComponent,
    EditdiseaseComponent,
    EditquestionComponent,
    HeadbarComponent,
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    HttpModule,
    Rout,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    LoginService,
    AuthService,
    RegisterService,
    AddsymptomService,
    DiseaseService,
    QuestionService,
    DiagService,
    GetpatientService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
