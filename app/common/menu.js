module.exports = {
  view: function(scope) {
    return (
      <ul>
        <li><a config={m.route} href='/'>博客</a></li>
        <li><a config={m.route} href='/exposure'>抢曝光</a></li>
        <li><a config={m.route} href='/analysis'>我的统计</a></li>
      </ul>
    )
  }
};
