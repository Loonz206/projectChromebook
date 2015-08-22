describe('sometest', function(){
	it('should be true', function(){
		expect(true).toEqual(true);
	});
});

describe('an addition test', function (){
	var a,b;
	beforeEach(function(){
		a = 2;
		b = 1;
	});
	it('should come to the value of three', function(){
		var result = a + b;
		expect(result).toEqual(3);
	});
	it('should not to come to the value of 13', function (){
		a = 12;
		var result = a + b;
		expect(result).not.toEqual(3);
	});
});