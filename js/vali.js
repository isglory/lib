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

  
