export class User {

    firstname:string;
    lastname:string;
    age:number;
    date:Date;
    prefix:string;

    constructor(firstname:string,lastname:string,age:number,date:Date,prefix:string){

        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.date=date;
        this.prefix=prefix;

    }


}
