import { Injectable } from '@angular/core';

@Injectable()
export class GenderService {

  title = [
    {id:1, value:'Mr'},
    {id:2,value:'Mrs'}
  ]
  constructor() { }

}
