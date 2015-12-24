var config = require('../config');
var Menu = require('../common/menu');
var NProgress = require('NProgress');

module.exports = {
  view: function(scope) {
    var list = scope.data.result.expertRecommendList;
    return (
      <div>
        <Menu />
        <table class="rob-info tc">
          <thead>
            <tr>
              <th style="width:40%;">我的曝光房源</th>
              <th style="width:30%;">曝光时段</th>
              <th style="width:16%;">曝光日点击量</th>
              <th style="width:14%;">状态</th>
            </tr>
          </thead>
          <tbody>
            {list.map(function(item) {return (
            <tr>
              <td><a class="alink-blue" href={'http://nanning.qfang.com/sale/' + item.roomCommentId} target="_blank"> [{item.gardenName}] {item.bedRoom}室{item.livingRoom}厅 {item.area} m² {item.floor}/{item.totalFloor}层 </a></td>
              <td>{item.showDate} {item.showTime}</td>
              <td>{item.clickCount}</td>
              <td>{item.showDateType}</td>
            </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  },

  controller: function(params, done) {
    var scope = {};
    !m.isServer && NProgress.start();
    m.request({
      url: config.apiPrefix + 'grabExpose/exposeInfo',
    }).then(function(data) {
      // scope.data = JSON.parse(data);
      scope.data = data;
      done && done(scope);
      !m.isServer && NProgress.done();
    });
    return scope;
  }
};
