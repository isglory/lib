//인풋 타입에 사용자 정의 타입만들어 쓰기
$('#id').click(function(){									
  var obj = Number($(this).attr('data-cash')); //input 안에 data-cash = '' 사용자정의로 만들어서 사용가능
  // .toLocaleString()); // ,스트링 만드는 간단한 방법
});

//현재날짜로 상환일 예상하기
function setReimDay(today) {
	var selDate = ['01','03','05']; //셀렉트박스 날짜
	var setDate = '01'; //계산후 선택한 날짜
	if(today <= 25){
		for(var i=0; i<selDate.length; i++){
			if(today <= Number(cDt[i])) {
				setDate = selDate[i];
				break;
			} 
		}
	}
	//$('#id').val(setDate);
}
//화면관련
location.reload(); 
location.href="/ /?page="+ page +"&v1="+v1+"&v2="+v2+"&word="+encodeURI(word);

//버튼 여러번 눌러도 한번만 커밋
$('selector').click(function(event) {
  if(!event.detail || event.detail == 1){ return true; }
  else { return false; }
});

$('selector').click(e => e.detail < 2)

//모바일인지 확
function isMobile() {
	if (navigator.platform) {
		var filter = "win16|win32|win64|mac|macintel";

		return filter.indexOf(navigator.platform.toLowerCase()) < 0;
	}
}
