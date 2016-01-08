module.exports = {
  view: function(scope) {
    return (
      <ul>
        <li><a config={m.route} href='/'>博客</a></li>
        <li><a config={m.route} href='/aboutme'>关于我</a></li>
        <li><a config={m.route} href='/exposure' style='display: none;'>抢曝光</a></li>
        <li><a config={m.route} href='/analysis' style='display: none;'>我的统计</a></li>
      </ul>
    )
  }
};
