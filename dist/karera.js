"use strict";
//Basic types
let id = 3;
let company = "karera";
let isPublished = true;
let x = "hello";
let age;
age = 45;
if (age < 90) {
    console.log('you are a', age + 1);
}
//functions
const mynumber = (x, y) => {
    return x + y;
};
console.log("ansuer is: ", mynumber(12, 56));
//void
const log = (message) => {
    console.log(message);
};
log("karera");
const user = {
    pid: 1,
    fname: "olivier",
    age: "10"
};
//assigning new value to age is not posstible bcs it is read only
//user.fname="karera"
console.log(user);
const add = (x, y) => {
    return x + y;
};
console.log("sum is:", add(12, 32));
const sub = (x, y) => {
    return x - y;
};
console.log("sub is:", sub(12, 32));
//class
class person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('will');
    }
}
const brad = new person(1, "william");
const felix = new person(2, "wilson");
console.log(brad, felix);
//generics
// const getArray =(items:any[]):any[]=>{
//   return new Array().concat(items)
// }
// let numArray = getArray([1,2,2,3,4,5])
// let stringArray = getArray(["one","two","three"])
// console.log(numArray, stringArray)
// console.log(Array())
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 2, 3, 4, 5]);
let stringArray = getArray(["one", "two", "three"]);
console.log(numArray, stringArray);
console.log(Array());
//# sourceMappingURL=karera.js.map