import { SavedDataService } from './saved-data.service';

import { AuthService } from './auth.service';
import { Router } from '@angular/Router';

import { GenderService } from './gender.service';
import { FormdataService } from './formdata.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchdataComponent } from './searchdata/searchdata.component';
import { UserdataComponent } from './userdata/userdata.component';
import { FilterPipe } from './filter.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardComponent } from 'app/auth-guard.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchdataComponent,
    UserdataComponent,
    FilterPipe,
    CapitalizePipe,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [GenderService,
              FormdataService,
              AuthService,
              AuthGuardComponent,SavedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
