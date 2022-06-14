
// 비동기작업 예 : ajax

/* 
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("하하")
    resolve("성공")
  }, 2000);
})

// then() : 성공시 반응할 핸들러 지정
// 위의 resolve의 데이터를 then이 받아올 수 있음
// resolveData랑 resolveValue랑 같은 거!(수업 진행과 pdf파일 상의 차이)
p.then((resolveData) => {
  console.log(resolveData)
})
*/

// 랜덤 강아지 이미지 사이트
// https://dog.ceo/api/breeds/image/random

const button = document.getElementById("push")
const img = document.getElementById("dog")

const p = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.open("GET", "https://dog.ceo/api/breeds/image/random")
  request.addEventListener("load", () => {
    if(request.status == 200) { // 응답코드 200 : 요청이 잘 처리되었음을 의미
      resolve(request.responseText)
    } else {
      reject("요청 실패")
    }
  })
  request.send()
})

button.addEventListener("click", () => {
  p.then((resolveData) => {
    const data = JSON.parse(resolveData)
    const src = data.message
    img.src = src
    
  }).catch((rejectData) => {
    console.log(rejectData)
  })
})