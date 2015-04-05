Template[getTemplate('layout')].helpers({
  mobile_nav: function () {
    return getTemplate('mobile_nav');
  },
  nav: function () {
    return getTemplate('nav');
  },
  navLayout: function () {
    return getSetting('navLayout', 'top-nav');
  },
  messages: function () {
    return getTemplate('messages');
  },
  notifications: function () {
    return getTemplate('notifications');
  },
  footer: function () {
    return getTemplate('footer');
  },
  pageName : function(){
    return getCurrentTemplate();
  },
  css: function () {
    return getTemplate('css');
  },
  extraCode: function() {
    return getSetting('extraCode');
  },
  heroModules: function () {
    return _.sortBy(heroModules, 'order');
  },
  getTemplate: function () {
    return getTemplate(this.template);
  }
});

Template[getTemplate('layout')].created = function(){
  Session.set('currentScroll', null);
};

Template[getTemplate('layout')].rendered = function(){
  if(currentScroll=Session.get('currentScroll')){
    $('body').scrollTop(currentScroll);
    Session.set('currentScroll', null);
  }

  // favicon
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = getSetting('faviconUrl', '/img/favicon.ico');
  document.getElementsByTagName('head')[0].appendChild(link);

  //animated gif and silent icons
  $('a.category-silent-hangout').after('<span class="silent-icons"> <img src="http://codebuddies.org/images/icon-video-off.png" alt="turn off video" width="25" height="25"> <img src="http://codebuddies.org/images/icon-mute.png" alt="turn off microphone" width="25" height="25"></span>'); 
  $('.in-progress').closest('.post').addClass('firework');

};

Template[getTemplate('layout')].events({
  'click .inner-wrapper': function (e) {
    if ($('body').hasClass('mobile-nav-open')) {
      e.preventDefault();
      $('body').removeClass('mobile-nav-open');
    }
  }
});