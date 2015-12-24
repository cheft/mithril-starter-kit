var m = require('mithril');

//namespace
var app = {};

//model
// app.model = function() {
//   return m.request({
//     url: 'https://api.github.com/repositories?since=364',
//     // url: 'http://nanning.qfang.com/brokerweb/header/newslist/index',
//     method: 'GET'
//   })
// };

//controller
app.controller = function() {
  var scope = {};
  // var pages = m.prop([]);
  // app.promise = m.deferred();
  m.request({
    url: 'https://api.github.com/repositories?since=364',
    // url: 'http://nanning.qfang.com/brokerweb/header/newslist/index',
    method: 'GET'
  }).then(function(data) {
    // pages(data);
    // app.promise.resolve(data);
    console.log(data);
    scope.pages = data;
  });
  return scope;

  // return {
  //   promise: app.promise.promise,
  //   pages: pages,
  //   rotate: function() {
  //     pages(pages().reverse());
  //   }
  // }
};

//view
app.view = function(ctrl) {
  return (
    <div>
      <h1>这是个异步请求的组件</h1>
      <button onclick={ctrl.rotate}>Rotate links</button>
      <ul>
      {ctrl.pages.map(function(page) {return (
        <li>
          <img src={page.owner.avatar_url} />
          <p>
            <a href={page.owner.url} title={page.description}>{page.full_name}</a>
          </p>
        </li>
      )})}
      </ul>
    </div>
  )
};

//initialize
m.mount(document.body, app);
// module.exports = app;
