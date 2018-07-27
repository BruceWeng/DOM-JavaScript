// SHOW THE DOCUMENT OBJECT 
// (console.dir(object) shows hierachy of an object)
// console.dir(document);

// SHOW CURRENT URL
console.log(document.URL); // http://127.0.0.1:5500/index.html
// SHOW CURRENT DOMAIN NAME
console.log(document.domain); // 127.0.0.1
// SHOW WEBPAGE TITLE
console.log(document.title);
// SHOW head DOM (has events as properties default set to null)
console.log(document.head);
// SHOW body DOM
console.log(document.body);
// SHOW ALL HTML DOMs IN AN ARRAY
console.log(document.all);
// SHOW forms DOM
console.log(document.forms);
// SHOW JSON in table format
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let datas = [
    new User("Ashley", 18, "test1@mail.com"),
    new User("Bruce", 24, "test2@mail.com"),
    new User("Randy", 28, "test3@mail.com"),
    new User("Shaw", 38, "test4@mail.com"),
]
console.table(datas);