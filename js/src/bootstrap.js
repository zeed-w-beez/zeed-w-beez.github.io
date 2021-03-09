$(document).ready(function () {
  Even.backToTop();
  Even.mobileNavbar();
  Even.toc();
  Even.fancybox();
  Even.visits();
  
  
  var beian = function () {
    var l = document.getElementById('beian');
    if (l && window && window.location.hostname === 'www.mercenaryunion.com') {
      l.innerHTML = '<a href="http://www.beian.miit.gov.cn">豫ICP备15012164号-1</a>';
    }
  };
  
  beian();
  
});
