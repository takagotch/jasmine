
describe("Profile", function(){

  beforeEach(function(){
    console.log('Any code required for setup');
    this.profile = new com.apress.model.Profile({id: 'sugrue'});
  });

  it('should have an id', function(){
    expect(this.profile.get('id')).toBe('sugrue');
    expect(this.profile.get('id')).not.toBe('james');
  });

  afterEach(function(){
    console.log('Cleanup code...');
  });
});

