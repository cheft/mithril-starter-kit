var request = require('request');
var aa = require('superagent');

var r = request.defaults({
  // json: true,
  headers: {
    cookie: 'JSESSIONID=aaa2A-mMgYyyedJcbzihv; cookieId=e17f58d5-9e3f-4c9e-9ebc-1ad040f7a27e; userID=2076783; _jzqa=1.653455269209893900.1450840944.1450856183.1450863953.3; _jzqc=1; Hm_lvt_de678bd934b065f76f05705d4e7b662c=1449822853,1450057229,1450408209,1450679240; Hm_lpvt_de678bd934b065f76f05705d4e7b662c=1450929365; sid=a65fcaf3-9db5-4e3c-87d4-a01b093d2420; _ga=GA1.3.1902058524.1450836382; _dc_gtm_UA-47416713-1=1',
    'content-Type': 'application/json;charset=utf-8',
  },

  resolveWithFullResponse: true
  // encoding: null,
  // gzip: true
});

r({
  url: 'http://nanning.qfang.com/brokerweb/grabExpose/exposeInfo',

}, function(err, res, data) {
  console.log(22222, res.headers['Content-Type']);
  console.log(22222, res.charset);
  console.log(res.body);
})

// .then(function(data) {
//   console.log(data.result.expertRecommendList);
// })

aa.get('http://nanning.qfang.com/brokerweb/grabExpose/exposeInfo')
  .send({})
  .set('cookie', 'JSESSIONID=aaa2A-mMgYyyedJcbzihv; cookieId=e17f58d5-9e3f-4c9e-9ebc-1ad040f7a27e; userID=2076783; _jzqa=1.653455269209893900.1450840944.1450856183.1450863953.3; _jzqc=1; Hm_lvt_de678bd934b065f76f05705d4e7b662c=1449822853,1450057229,1450408209,1450679240; Hm_lpvt_de678bd934b065f76f05705d4e7b662c=1450927557; sid=2c38a410-a457-4dc6-987c-ef3eb0fb80ac; _ga=GA1.3.1902058524.1450836382; _dc_gtm_UA-47416713-1=1')
  .end(function(err, res){
    console.log(11111, res.headers['Content-Type']);
    console.log(11111, res.charset);
  });

