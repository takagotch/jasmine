describe('Profile', function(){

  beforeEach(function(){
    this.server = sinon.fakeServer.create();
  });

  afterEach(function(){
    this.server.restore();
  });

  it('Should return some tweets', function(){
    var timeline = new com.apress.collection.Timeline();

    var timelineResponse =
      '[{"created_at": "Tue...",
         "text": "..."},
        {"created_at": "Tue...",
	 "text": "another simulated tweet"}]';
  
    this.server.respondWith("GET", "/tweet",
      [200, {"Content-Type": "application/json"}, timelineResponse]);

    timeline.url = '/test';

    timeline.fetch({reset: true});

    this.server.respond();

    console.log('Timeline has ' + timeline.length);
    expect(timeline.length).toBe(2);
  });


  it('should have an id', function(){
    var profile = new com.apress.model.Profile({id: 'sugrue'});
    expect(profile.get('id')).toBe('sugrue');
    expect(profile.get('id')).not.toBe('james');
  });

  it('should have a view', function(){
    loadFixures('app-fixture.html');
    var profileView = new com.apress.view.ProfileView({user: 'sugrue'});
    expect(profileView.render().$el).toExist();
  });

});

