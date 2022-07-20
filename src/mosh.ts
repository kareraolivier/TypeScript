let number :number = 1234;
let corse:string = "mathematics";
let is_assigned:boolean =true;
let mike;
 mike=1;
 console.log (mike)
 mike="mike";
 console.log ("hello ",mike)

 const doc= (doc:string): string =>{
   return doc
 }
 console.log(doc("karera"))

 // Array

//  let array:(number)[] =[1,2,4,5,'12']
 let array1:(number|string)[] =[1,2,4,5,'12']
 let array2: any[] =[1,2,4,5,'12']
//  let array3:(string)[] =[1,2,4,5,'12']
 let array4: [1,2,4,5,'12']
 
console.log(array1)

// toples

let student:[number, string, boolean]=[1, 'susu', false]
student.push(2, 2, 'karera')   //confussion
console.log(student)
const newstring:string= student.join().toString()
console.log(newstring)
student.splice(2).pop()  
console.log(student)

//enums

const small = 1
const medium = 2
const large = 3

//Pascal naming convention

// enum ShirtSize {Small, Medium, Large}
// enum ShirtSize {Small="small", Medium="medium", Large="large"}
const enum ShirtSize {Small=10, Medium, Large}
let myShirt:ShirtSize= ShirtSize.Large
console.log(myShirt)

//large=12

//functions

// "noImplicitReturns": true
// "noUnusedParameters": true 
// "noUnusedLocals": true 

const sum =(age:number , age1:number):number=>{
   if (age<20)
      return age*10
   return age1
}
console.log(sum(30, 23))


// objects

let school:{
 readonly id:number, name:string, startDate:(date:Date)=>void
}={
    id: 0,
    name: "greenhills",
    startDate: (date: Date) =>{
        return date;
    }
}

console.log("school:",school)


// type aliases

type School1 = {
    readonly id01:number, fullname:string, startingDate:(date:Date)=>void
   }

   let school2:School1={
    id01: 1,
    fullname: "CCAKS",
    startingDate: (date: Date) =>{
        return date;
    }
}
console.log("school:",school2)


// union type

const ciment=(weight:number|string)=>{
    if (typeof weight === 'number'){
        return weight+10
    }
    else{
        return parseInt(weight)+23
    }
}
console.log(ciment('23kg'))


//intersection types
// .......i need more research on this topic/.................


// literal types

type Quantity = 20|40
let quantity:Quantity = 40

type Distance = "km"|"hr"
let distsnce:Distance = "hr"


// nullable types

const great =(name:string|null|undefined)=>{
  return name
}
great(undefined)


// optional chainning

type Customer ={
    birthday:Date
};
const getCustomer = (cid:number) : Customer | null|undefined => {
    return cid === 0 ? null :{birthday:new Date()}
}
let customer = getCustomer(1)
// if(customer!==null && customer!==undefined)
// optional property
console.log(customer?.birthday)