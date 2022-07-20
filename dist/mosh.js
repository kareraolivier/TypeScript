"use strict";
let number = 1234;
let corse = "mathematics";
let is_assigned = true;
let mike;
mike = 1;
console.log(mike);
mike = "mike";
console.log("hello ", mike);
const doc = (doc) => {
    return doc;
};
console.log(doc("karera"));
// Array
//  let array:(number)[] =[1,2,4,5,'12']
let array1 = [1, 2, 4, 5, '12'];
let array2 = [1, 2, 4, 5, '12'];
//  let array3:(string)[] =[1,2,4,5,'12']
let array4;
console.log(array1);
// toples
let student = [1, 'susu', false];
student.push(2, 2, 'karera'); //confussion
console.log(student);
const newstring = student.join().toString();
console.log(newstring);
student.splice(2).pop();
console.log(student);
//enums
const small = 1;
const medium = 2;
const large = 3;
let myShirt = 12 /* ShirtSize.Large */;
console.log(myShirt);
//large=12
//functions
// "noImplicitReturns": true
// "noUnusedParameters": true 
// "noUnusedLocals": true 
const sum = (age, age1) => {
    if (age < 20)
        return age * 10;
    return age1;
};
console.log(sum(30, 23));
// objects
let school = {
    id: 0,
    name: "greenhills",
    startDate: (date) => {
        return date;
    }
};
console.log("school:", school);
let school2 = {
    id01: 1,
    fullname: "CCAKS",
    startingDate: (date) => {
        return date;
    }
};
console.log("school:", school2);
// union type
const ciment = (weight) => {
    if (typeof weight === 'number') {
        return weight + 10;
    }
    else {
        return parseInt(weight) + 23;
    }
};
console.log(ciment('23kg'));
let quantity = 40;
let distsnce = "hr";
// nullable types
const great = (name) => {
    return name;
};
great(undefined);
const getCustomer = (cid) => {
    return cid === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(1);
// if(customer!==null && customer!==undefined)
// optional property
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=mosh.js.map