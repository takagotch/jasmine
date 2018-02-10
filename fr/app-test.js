describe('add function test', function(){

  beforeEach(function(){
    console.log('before >>>');
  });

  afterEach(function(){
    console.log("<<< after");
  });

  it('', function(){
    expect(add(1, 1)).toBe(2);
  });
  
  it('', function(){
    expect(add(1, 4)).toBe(5);
  });

  it('', function(){
    expect(add(10 2)).toBe(5); //EER
  });
});

