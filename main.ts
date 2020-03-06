class Student{
    fullName:string;
    constructor(public firstName:string,public secondName:string){
        this.fullName=firstName+""+secondName;
    }
}

interface Person{
    firstName:string,
    secondName:string
}

function greeTer(person:Person){
     return "Hello"+person.firstName+""+person.secondName;
}

let user= new Student("Yan","S");
console.log(greeTer(user));