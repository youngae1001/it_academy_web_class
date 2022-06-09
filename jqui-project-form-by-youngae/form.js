let userData = []

function handleData() {

  const id = $('form')[0].id.value
  const pw = $('form')[0].pw.value
  const name = $('form')[0].name.value
  const tel = $('form')[0].phone.value
  const addr = $('form')[0].addr.value + " " + $('form')[0].addrdetail.value
  const birth = $('form')[0].birth.value
  const job = $('form')[0].job.value
  const gender = $('form')[0].gender.value
  const email = $('form')[0].email.value // + $('form')[0].emailaddr.value
  const intro = $('form')[0].intro.value

  const userObj = {
    id : id,
    pw : pw,
    name : name,
    tel : tel,
    addr : addr,
    birth : birth,
    job : job,
    gender : gender,
    email : email,
    intro : intro
  }

  userData.push(userObj)
  console.log(userData)

}

function init() {
  $("input[name='birth']").datepicker({
    showButtonPanel : true,
    changeYear : true,
    closeText : "Close",
    monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames : ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesMin : ['월', '화', '수', '목', '금', '토', '일'],
    nextText : "다음 달",
    prevText : "이전 달"
  })
  $("select").selectmenu();
  $("input[type='radio']").checkboxradio();
  $(".btn").button();
  $(document).tooltip();
}

function searchPostcode() {
  $("input[name='addr']").click(function() {
    new daum.Postcode({
      oncomplete: function (data) {
        $("input[name='addr']").val(data.address);
      }
    }).open();
  })
}

$(document).ready(function() {
  init();
  searchPostcode();
  $('form').submit(function(e) {
    e.preventDefault()
    handleData()
  })
})