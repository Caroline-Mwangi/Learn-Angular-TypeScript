//Properties - Define the data attached to an instance of a class.
/* Member visiblity:
        By default all properties are public
        # -> Private property: Declared but not read
        protected -> useful when extending a class, it is only within a class and the classes that extends it.
*/

class Student {
  #id: number;
  name: string;
  protected course: string;

  /* Methods - Functions that run in context of an object
  When methods don't declare an explicit returning type and return value 
  then it is assumed they can return anything
  */

  getstdName(): string {
    return this.name;
  }

  getNameAndCourse(): string {
    return `${this.name} is a ${this.course} student`;
  }

  /* Constructors - responsible for creating an instance of the class 
    - Usually where you perform any initial setup for new objects. 
    - They can take parameters but cannot return any value. 
    - When a class has no constructor defined explicitly, one will be created automatically.
    - In TypeScript there can only be one constructor per class.
  */

  constructor(id: number, name: string, course: string) {
    this.#id = id;
    this.name = name;
    this.course = course;
  }
}

let newStudent = new Student(4, "Jane", "Computer Science");

let info = newStudent.getNameAndCourse();

console.log(newStudent);

console.log(info);
console.log(newStudent.getstdName());

/* Inheritance: A way to indicate that a class retrieves behaviour from a parent class
    - Achieved through the extends keyword.
    - 
*/

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



