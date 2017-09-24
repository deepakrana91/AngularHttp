import { Injectable } from '@angular/core';

@Injectable()
export class FormdataService {

  formdata:any[] = [];

  constructor() { }

  addData(item:any){
    this.formdata.unshift(item);
  }

  getData(){
    return this.formdata;
  }



}
