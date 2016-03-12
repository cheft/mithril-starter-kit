module.exports = {
  view: function(scope) {
    return (
      <div class="banner">
        <div class="center">
          <h3>千家品牌厂商直供，多家报价可比，平台统一承保</h3>
          <h1>上门安装LED屏</h1>
          <div id="tips_signup" class="btn pop">10秒登记，三家上门提供方案
          </div>
          <form class="mt20 bookin" action="javascript:;" method="post" id="to_signup">
            <div class="signinName hide">
              <span>请输入您的称呼
              </span>
            </div>
            <div class="signinPhone hide">
              <span>请输入正确的手机号
              </span>
            </div>
            <input class="nick input l" placeholder="您的称呼" value="" />
            <input class="phone input l" placeholder="手机号" value="" />
            <div class="changeCity">
              <span class="city_name"></span>
              <i class="city_id hide">18</i>
              <div class="clicktochange">修改</div>
            </div>
            <input class="btn l" type="submit" value="提交" />
          </form>
        </div>
      </div>
    )
  },

  controller: function(params) {
    
  }
};
