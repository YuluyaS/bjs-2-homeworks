function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

  this.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    console.log("Error: Student has been expelled.");
    return;
  }

  if (!!marksToAdd.length) {
    this.marks.push(...marksToAdd);
  }
  return;
};

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) {
    return 0;
  }

  const sum = this.marks.reduce((acc, curr) => acc + curr);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student("Василиса", "женский", 19);
console.log(student1.name);
student1.setSubject("Algebra");
console.log(student1.age);
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude("плохая учёба");
console.log(student2);
console.log(student2.getAverage());
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
