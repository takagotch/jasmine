describe('Profile', function(){
  it('should have an id', function(){
    var profile = new com.apress.model.Profile({id: 'sugrue'});
    expect(profile.get('id')).toBe('sugrue');
    expect(profile.get('id')).not.toBe('james');
  });
});

