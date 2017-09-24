import { AuthGuardComponent } from './../auth-guard.service';

import { PagenotfoundComponent } from './../pagenotfound/pagenotfound.component';
import { HomeComponent } from './../home/home.component';
import { SearchdataComponent } from './../searchdata/searchdata.component';
import { UserdataComponent } from './../userdata/userdata.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';



const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UserdataComponent},
  {path:'search',canActivate:[AuthGuardComponent],component:SearchdataComponent},
  {path:'not-found',component:PagenotfoundComponent},
  {path:'**', redirectTo:"/not-found",pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { 

}
