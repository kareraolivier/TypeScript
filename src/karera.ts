//Basic types

let id:number = 3;
let company:string ="karera"
let isPublished:boolean=true
let x:any="hello"
let age:number
age = 45
 if(age<90){
    console.log('you are a',age+1);
}

 
//functions
const mynumber=(x:number, y:number):number => {
    return x+y
}
console.log("ansuer is: ",mynumber(12, 56))

//void
const log = (message:string|number):void =>{
  console.log(message)
}
log("karera")

//interfaces
interface User {
    pid:number
    readonly fname:string
    age:string
}
const user : User = {
    pid : 1,
    fname : "olivier",
    age: "10"
}
//assigning new value to age is not posstible bcs it is read only
//user.fname="karera"
console.log(user)

interface mathafunc{
(x:number, y:number):number
}
const add:mathafunc=(x:number, y:number):number=>{
    return x+y
}
console.log("sum is:",add(12, 32))
const sub:mathafunc=(x:number, y:number):number=>{
    return x-y
}
console.log("sub is:",sub(12, 32))

//class

class person{
    id:number
    name:string
    constructor(id:number, name:string){
        this.id=id
        this.name=name
        console.log('will')
    }
}
const brad= new person(1, "william")
const felix= new person(2, "wilson")
console.log(brad, felix)

//generics

// const getArray =(items:any[]):any[]=>{
//   return new Array().concat(items)
// }
// let numArray = getArray([1,2,2,3,4,5])
// let stringArray = getArray(["one","two","three"])

// console.log(numArray, stringArray)
// console.log(Array())

const getArray =<T>(items:T[]):T[]=>{
    return new Array().concat(items)
  }
  let numArray = getArray<number>([1,2,2,3,4,5])
  let stringArray = getArray<string>(["one","two","three"])
  
  console.log(numArray, stringArray)
  console.log(Array())