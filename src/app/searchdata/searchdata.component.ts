import { User } from './../user.model';
import { SavedDataService } from './../saved-data.service';
import { FormdataService } from './../formdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.css']
})
export class SearchdataComponent implements OnInit {

  filterName='';
  userDataArray:any[]=[];

  constructor(private formdataService:FormdataService,private savedDataService:SavedDataService) { }

  ngOnInit() {

    //this.userDataArray= this.formdataService.getData();

  }

  //Gettting the data from the server using the http.get fuction and later subscribing the value here and store it
  // to the userDataAray

  onGet(){
    this.savedDataService.getUserData()
    .subscribe(
      (data:any[]) => this.userDataArray=data

    );

  }

  

}
