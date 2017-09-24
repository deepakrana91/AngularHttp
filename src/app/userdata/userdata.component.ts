import { SavedDataService } from './../saved-data.service';
import { NgForm } from '@angular/forms';
import { FormdataService } from './../formdata.service';
import { GenderService } from './../gender.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  @ViewChild('f')  formdata:NgForm

  genderArray:any[] =[];
  userData:any[] =[];
  defaultDesignation='Mr'

  constructor(private genderService:GenderService,
  private formdataService:FormdataService, private saveddataService:SavedDataService) { }

  ngOnInit() {

    this.genderArray= this.genderService.title;
    this.userData= this.formdataService.getData();

  }

  onSubmit(form:NgForm){

    const user =  {
      firstname:form.value.fname,
      lastname:form.value.lname,
      Age:form.value.age,
      Date:form.value.date,
      Prefix:form.value.prefix,

    }

    this.formdataService.addData(user);
  }

  onSave(){
    const user =  {
      firstname:this.formdata.value.fname,
      lastname:this.formdata.value.lname,
      Age:this.formdata.value.age,
      Date:this.formdata.value.date,
      Prefix:this.formdata.value.prefix,

    }

    this.formdataService.addData(user);
    this.saveddataService.storeUserData(this.userData)
    .subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );
  }
  

}
