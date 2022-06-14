
// 구조 분해 : 기본적으로 복사! 따라서 원본을 훼손하지 않음

const pet = {
  dog : "강아지",
  cat : "고양이"
}

// 중괄호 : 객체에서 끄집어낸 값
const { dog : d, cat : c } = pet
// console.log(dog)
console.log(d, c)

const cafe = ["스타벅스", "커피빈", "이디야"]

// 대괄호 : 요소들에 이름을 붙여주는 것..!
let [star, bean, ediya] = cafe
console.log(star, bean)


const mini = "미니"
const ray = "레이"

// 향상된 객체 리터럴
const car = {
  mini, ray
}

console.log(car)

