var Student = /** @class */ (function () {
    function Student(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.fullName = firstName + "" + secondName;
    }
    return Student;
}());
function greeTer(person) {
    return "Hello" + person.firstName + "" + person.secondName;
}
var user = new Student("Yan", "S");
console.log(greeTer(user));
