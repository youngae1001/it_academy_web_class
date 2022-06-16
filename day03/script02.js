
class Person {

  // new 연산시 호출되는 메소드
  // constructor의 매개변수는 new Person 때의 매개변수를 의미
  constructor(job) {
    this.job = job
  }

  intro() {
    console.log(`내 직업은 ${this.job}`)
  }

  // static sayHello() {
  //   console.log("Hello")
  // }
}

class Student extends Person {
  myRole() {
    console.log("학생은 공부")
  }
}

// static 선언된 것은 객체를 통하지 않고 클래스 원본에서 호출 가능
// Person.sayHello()

// const a = new Person("회사원")
// const b = new Person("프리랜서")

// a.intro()
// b.intro()

const s1 = new Student("학생")
s1.intro()
s1.myRole()
