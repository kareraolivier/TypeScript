//Basic types
var id = 3;
var company = "karera";
var isPublished = true;
var x = "hello";
var age;
age = 45;
console.log(age);
//functions
var mynumber = function (x, y) {
    return x + y;
};
console.log("ansuer is: ", mynumber(12, 56));
//void
var log = function (message) {
    console.log(message);
};
log("karera");
var user = {
    pid: 1,
    fname: "olivier",
    age: "10"
};
//assigning new value to age is not posstible bcs it is read only
//user.fname="karera"
console.log(user);
var add = function (x, y) {
    return x + y;
};
console.log("sum is:", add(12, 32));
var sub = function (x, y) {
    return x - y;
};
console.log("sub is:", sub(12, 32));
//class
var person = /** @class */ (function () {
    function person(id, name) {
        this.id = id;
        this.name = name;
        console.log('will');
    }
    return person;
}());
var brad = new person(1, "william");
var felix = new person(2, "wilson");
console.log(brad, felix);
//generics
// const getArray =(items:any[]):any[]=>{
//   return new Array().concat(items)
// }
// let numArray = getArray([1,2,2,3,4,5])
// let stringArray = getArray(["one","two","three"])
// console.log(numArray, stringArray)
// console.log(Array())
var getArray = function (items) {
    return new Array().concat(items);
};
var numArray = getArray([1, 2, 2, 3, 4, 5]);
var stringArray = getArray(["one", "two", "three"]);
console.log(numArray, stringArray);
console.log(Array());
