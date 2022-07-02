import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';




const routes:Routes = [
  {path:'',component:LoginComponent},
  {path:'regis',component:RegisComponent},
  {path:'task',component:TaskComponent},
    
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisComponent,
    TaskComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

