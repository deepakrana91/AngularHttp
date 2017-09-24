import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class SavedDataService {

    constructor(private http:Http){}

    storeUserData(userdata:any[]){

       return this.http.put('https://http-ng-angular.firebaseio.com/data.json',userdata);
    }

    getUserData(){

        return this.http.get('https://http-ng-angular.firebaseio.com/data.json')
        .map(
            (responce:Response)=> {
                const data:any[] = responce.json();
                return data;
            }
        )
        
    }

}