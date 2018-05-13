import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { EmprestimoService } from './services/emprestimo.service';
import { MessageService } from './services/message.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { EmprestimoFormComponent } from './components/emprestimo-form/emprestimo-form.component'

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    })
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    EmprestimoFormComponent
  ],

  providers: [EmprestimoService/* , MessageService, HttpErrorHandler */],
  bootstrap: [AppComponent]
})
export class AppModule { }
