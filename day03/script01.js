
console.log(this)

document.querySelector("p").addEventListener("click", function() {
  console.log(this)
})

// 클래스를 만들었다고 어떠한 일이 일어나는 것은 아니다
// 클래스란 객체를 만들기 위해 설계한 설계도
class Dog {
  breed = "포메"
  bark() {
    console.log("멍멍")
  }
}

// 설계도를 통해 만든 데이터는 객체(Object)
// 서로의 관계를 표현할 때는 'd1은 Dog의 인스턴스(instance)다'라고도 함
const d1 = new Dog()

console.log(d1.breed)
d1.bark()