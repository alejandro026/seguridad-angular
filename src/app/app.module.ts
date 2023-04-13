import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './componentes/alumno/form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
