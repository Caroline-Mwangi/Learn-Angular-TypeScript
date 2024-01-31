class Student {
  //Properties
  /* Member visiblity:
        By default all properties are public
        # -> Private property: Declared but not read
        protected -> useful when extending a class, it is only within a class and the classes that extends it.
      */

  #id: number;
  name: string;
  protected course: string;

  get stdName(): string {
    return this.name;
  }

  // Constructors - responsible for creating an instance of the class

  constructor(id: number, name: string, course: string) {
    this.#id = id;
    this.name = name;
    this.course = course;
  }

  // Methods
  getNameAndCourse(): string {
    return `${this.name} is a ${this.course} student`;
  }
}

let newStudent = new Student(4, "Jane", "Computer Science");

let info = newStudent.getNameAndCourse();

console.log(newStudent);

console.log(info);
console.log(newStudent.stdName);

class Teacher extends Student {
  constructor(id: number, name: string, course: string) {
    super(id, name, course);
  }

  getNameWithCourse(): string {
    return `${this.name} teaches ${this.course}`;
  }
}

let teacher = new Teacher(3, "John", "Computer Science");

console.log(teacher.getNameWithCourse());
