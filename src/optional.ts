class Account{
    id:number;
    name:string;
    course?:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name = name;
    }

    getStudent(course:string):void{
        console.log(`Student name ${this.name} id ${this.id} course ${course}`)
    }

}
let account = new Account(5,'account')
account.getStudent('cse')
