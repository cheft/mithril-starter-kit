/*
$(function() {

    $('.user').on('click', function() {
        $('.user_nav').toggle()
    })

    $('.user_form > div').on('click', function() {
        $('.user_form').hide()
    })

    $('.city > span').on('click', function() {
        $('.city').hide()
    })

})*/
//滚动条事件
function z_docScroll() {
  var t, n, i;
  t = 390;
  getScrollTop() + getClientHeight() >= $(document.body).height() - t ? (i = t - ($(document.body).height() - (getScrollTop() + getClientHeight())), $('.right_pos').css("bottom", i + "px")) : $('.right_pos').css("bottom", "10px")
}

function getScrollTop() {
  var n = 0;
  return document.documentElement && document.documentElement.scrollTop ? n = document.documentElement.scrollTop : document.body && (n = document.body.scrollTop), n
}

function getClientHeight() {
  var n = 0;
  return document.body.clientHeight && document.documentElement.clientHeight ? document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight : document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight
}
z_docScroll();
//页面滚动至顶部
var currentPosition, timer;

function GoTop() {
  timer = setInterval("runToTop()", 1);
}

function runToTop() {
  currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  currentPosition -= 10;
  if (currentPosition > 0) {
    window.scrollTo(0, currentPosition);
  } else {
    window.scrollTo(0, 0);
    clearInterval(timer);
  }
}
//获取url参数
function GetRequest() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
var Request = new Object();
Request = GetRequest();
var zm_pop = Request['pop'];

$(function() {
  $('.back_to_top').click(function() {
    GoTop();
  });
  if (zm_pop == 'profile') {
    $('.left_nav').addClass('nav1');
  } else if (zm_pop = '') {} {
    $('.left_nav').addClass('nav2').removeClass('nav1');
  }
  $('.zm_slider a').on('click', function() {
    var _this = $(this),
      num = _this.index();
    switch (num) {
      case 0:
        $('#left_nav').removeClass().addClass('left_nav nav1');
        break;
      case 1:
        $('#left_nav').removeClass().addClass('left_nav nav2');
        break;
      case 2:
        $('#left_nav').removeClass().addClass('left_nav nav3');
        break;
      case 3:
        $('#left_nav').removeClass().addClass('left_nav nav4');
        break;
      case 4:
        $('#left_nav').removeClass().addClass('left_nav nav5');
        break;
    }
  });
  $(window).scroll(function() {
    z_docScroll();
  });
});
