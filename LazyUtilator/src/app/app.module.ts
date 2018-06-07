import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { AccountModule } from './account/account.module';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { LoginComponent } from './component/account/login.component';
import { RegisterComponent } from './component/account/register.component';
import { SharedModule } from './shared/shared.module';
import { AppfeatureModule } from './appfeature/appfeature.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'signin', pathMatch: 'full'
      },
      {
        path: 'signin', component: LoginComponent
      },
      {
        path: 'dashboard', loadChildren: './appfeature/appfeature.module#AppfeatureModule'
      },
      {
        path: '**', component: PagenotfoundComponent
      }
    ])
   // AppfeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
