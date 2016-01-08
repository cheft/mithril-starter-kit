module.exports = {
  view: function(scope) {
    return (
      <ul className='menu clearfix'>
        <li><a config={scope.route} href="/">我的博客</a></li>
        <li><a config={scope.route} href="/aboutme">关于我</a></li>
      </ul>
    )
  },

  controller: function() {
    return {
      route: function(el, isInit, cxt, vdom) {
        m.isModern() && m.route(el, isInit, cxt, vdom);
      }
    }
  }
};

