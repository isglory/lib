$('#id').on('input', function() {	
		this.value = this.value
			.replace(/(^\.+)/, '')			      	// .으로 시작 금지
			.replace(/(^0+)/, '0')			      	// 0으로 시작
			.replace(/[^\d.]/g, '')             // numbers and decimals only
			.replace(/(\..*)\./g, '$1')         // .은 하나만
			.replace(/(\.[\d]{2})./g, '$1');    // 소수점 두자리까지 입력
		var pattern = /(^0[1-9])/;
		if(pattern.test(this.value)){ 
			this.value = this.value.replace(/0/, '');
		}                                     // 01 -> 1로 출력
		this.value >= 100? $('#inputInterestAPR').val( 100 )  : $('#inputInterestAPR').val( this.value ); // ex) 최대값 100
});

$('#inputInterestAPR').focusout(function() {
	if(this.value.substr(this.value.length - 1) == '.') 					//마지막문자 열 확인
	$('#inputInterestAPR').val( this.value.substring(0, this.value.length-1) );		//마지막문자열 삭제
	if(this.value == '0.0' || this.value == '0.00' ) $('#inputInterestAPR').val(0);		//마지막에0.0 -> 0	
});

//금액 콤마 포멧
var addComma = function(str) {
	if (str != '') {
		str = parseInt(String(str));
		
		if(str == 0) {
			return '';
		}
	}
	
	return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

// 콤마 제거
var delComma = function(str) {
	str = '' + str.replace(/,/gi, '');
    
    return str.replace(/(^\s*)|(\s*$)/g, '');
};


  
