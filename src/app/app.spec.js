describe('sometest', function(){
	it('should be true', function(){
		expect(true).toEqual(true);
	});
});

describe('an addition test', function (){
	it('should come to the value of three', function(){
		var a = 2;
		var b = 1;
		var result = a + b;
		expect(result).toEqual(3);
	});
});