module.exports = {
  view: function(scope) {
    return (
      <ul className='menu clearfix'>
        <li><a config={m.route} href='/'>我的博客</a></li>
        <li><a config={m.route} href='/aboutme'>关于我</a></li>
        <li style='display: none;'><a config={m.route} href='/exposure'>抢曝光</a></li>
        <li style='display: none;'><a config={m.route} href='/analysis'>我的统计</a></li>
      </ul>
    )
  }
};
