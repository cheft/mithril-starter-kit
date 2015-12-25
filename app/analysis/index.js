var config = require('../config');
var Menu = require('../common/menu');
var NProgress = require('NProgress');

module.exports = {
  view: function(scope) {
    var list = scope.data.result;
    return (
      <div>
        <Menu />
        <table>
          <thead id="listHeader">
            <tr>
              <th>日期</th>
              <th><a>新增<i></i></a></th>
              <th><a>删除<i></i></a></th>
              <th><a>总刷新<i></i></a></th>
              <th><a>标签使用<i></i></a></th>
              <th><a>登陆天数<i></i></a></th>
              <th><a>日积分<i></i></a></th>
            </tr>
          </thead>
          <tbody>
            {list.map(function(item) {return (
            <tr>
              <td>{item.dataDate}</td>
              <td>{item.addRoomCount}</td>
              <td>{item.delRoomCount}</td>
              <td>{item.useRefurbishCount}</td>
              <td>{item.useLabelCount}</td>
              <td>{item.loginCount}</td>
              <td>{item.integralCount}</td>
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
      url: config.apiPrefix + 'userCenter/query/statistical'
    }).then(function(data) {
      // scope.data = JSON.parse(data);
      scope.data = data;
      done && done(scope);
      !m.isServer && NProgress.done();
    });
    return scope;
  }
}