
// 함수 정의(선언)
const sayMyName = () => {
  console.log("내 이름은 영애");
}

// 함수 호출
sayMyName();

const sayYourName = name => {
  console.log("네 이름은 " + name);
}

sayYourName("바보");

const sayYourNames = (name1, name2) => name1 + name2;
console.log(sayYourNames("아리", "까리")); 

// 또 다른 특징 : 반환값이 아닌 실행문이 한 줄이어도 중괄호 생략 가능
// const sayYourNames = (name1, name2) => console.log(name1 + name2);
// sayYourNames("아리", "까리");

const sayYourNames2 = (n1="바", n2="보") => console.log(n1 + n2);
// 디폴트 파라미터는 안전장치일 뿐, 매개변수가 제대로 들어오면 매개변수 값으로 결과 나옴

sayYourNames2();