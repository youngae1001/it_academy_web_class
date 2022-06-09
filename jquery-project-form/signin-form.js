let userData = [] // 회원가입하면, 여기에 저장


function handleData() {

  /*  모든 데이터를 모으기! */
  const id = $('form')[0].id.value
  const password = $('form')[0].pw.value
  const name = $('form')[0].name.value
  const tel = $('form')[0].phone.value
  const addr = $('form')[0].addr.value + " " + $('form')[0].addrdetail.value
  const birth = $('form')[0].birth.value
  const job = $('form')[0].job.value
  const gender = $('form')[0].gender.value
  const email = $('form')[0].email.value
  const intro = $('form')[0].intro.value

  // 회원가입 정보를 나타내는 하나의 객체!
  const userObj = {
    id: id,
    password: password,
    name: name,
    tel: tel,
    addr: addr,
    birth: birth,
    job: job,
    gender: gender,
    email: email,
    intro: intro
  }
  userData.push(userObj) // 배열에 유저 추가!
  console.log(userData)
}

// 주소 찾기 모듈 사용 함수
// + 다 찾은 다음의 동작도 추가로 정의함
function searchPostcode() {
  $("input[name='addr']").click(function() {

    new daum.Postcode({
      oncomplete: function (data) {
        $("input[name='addr']").val(data.address);
      }
    }).open();
  });
}

// 제이쿼리 UI를 적용할 요소들에 싹다 적용하는 부분
function init() {
  $("input[name='birth']").datepicker({ // datepicker : 달력
    showButtonPanel: true,
    changeYear: true,
    closeText: "CLOSE"
  });
  $("select").selectmenu();
  $("input[type='radio']").checkboxradio();
  $(".btn").button();
  $(document).tooltip();
}

// 문서가 로드되면 실행될 코드 블록
$(document).ready(function() {
  init(); // 제이쿼리UI 세팅
  searchPostcode(); // 다음(DAUM) 주소찾기 세팅
  $('form').submit(function (e) { // form을 제출했을 때
    e.preventDefault() // 제출되었을 때 기존 기능을 차단
    handleData() // 기존 기능 말고 내가 만든 기능으로 제출했을 때 작동되게 하기
  })
})




