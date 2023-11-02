// you have define fix type in object
// you have use optional ?
// mens field not exist not any error

let person : {name?:string , age:number} ={
    name:"smit",
    age:45
}
// person.email = "smitsavaliya@321";
console.log(person);

// 2nd method define type using type keyword
type obj = {
      name:string,
      age?:number | string,
      email:string
}

let person2 :obj = {
       name:"smit",
       age:"56",
       email:"smitsavavaliya321@gmail.com"
}
console.log(person2);
