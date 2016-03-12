module.exports = {
  view: function(scope) {
    return (
      <div>
        <div class="header bf">
          <div class="center">
            <a class="headLogo" href="index.html">万屏汇</a>
            <div class="nav">
              <a class="@@index" href="index.html">快速报装</a>
              <a class="" href="examples.html">24H托管</a>
              <a class="" href="service.html">自助报修</a>
              <a class="" href="#">选用指南</a>
            </div>
            <select name="" id="">
              <option value="">language</option>
              <option value="">language</option>
              <option value="">language</option>
              <option value="">language</option>
              <option value="">language</option>
            </select>
            <div class="user">
              <div class="user_nav guest">
                <p>你还没登录/注册</p>
                <div>
                <a class="ms" href="#">我的屏幕</a>
                <a class="mf" href="#">个人资料</a>
                <a class="ll" href="#">登录/注册</a>
                </div>
              </div>
              <div class="user_nav c client">
                <div>
                <a class="ms" href="my_screens.html">我的屏幕</a>
                <a class="mf" href="my_screens.html?pop=profile">个人资料</a>
                <a class="lo" href="#">注销</a>
                </div>
              </div>
              <div class="user_nav s manaScreen">
                <div>
                <a class="ms" href="bs_my_screens.html">我管理的屏幕</a>
                <a class="mw" href="bs_my_screens.html?pop=bs_wallet">我的钱包</a>
                <a class="mf" href="bs_my_screens.html?pop=bs_profile">个人资料</a>
                <a class="lo" href="#">注销</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="user_form login c hide">
          <div class="close"></div>
          <h2>登录/注册</h2>
          <form method="post">
            <input class="input phone" type="text" placeholder="手机号" value="" />
              <input class="input l code" type="text" placeholder="验证码" />
              <input class="btn l getcode" type="button" value="获取验证码" />
            <input type="button" class="btn submit" value="提交" />
          </form>
          <div class="loginError">验证码出错，重新登录</div>
          <a class="to_supplier" href="#">我是供应商</a>
        </div>

        <div class="user_form login s hide">
          <div class="returnBack"></div>
          <div class="close"></div>
          <form method="post">
            <h2>供应商登录/注册</h2>
            <input class="input phone" type="text" placeholder="手机号" />
            <div>
              <input class="input l code" type="text" placeholder="验证码" />
              <input class="btn l getcode" type="button" value="获取验证码" />
            </div>
            <div class="loginError">验证码出错，重新登录</div>
            <input type="button" class="btn submit" value="提交"/>
          </form>
        </div>
      </div>
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

