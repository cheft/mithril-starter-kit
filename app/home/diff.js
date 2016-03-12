module.exports = {
  view: function(scope) {
    var list = scope.diffs || [];
    return (
      <div class="pk bf">
        <div class="center">
          <div class="c1 wow fadeInRight animated" data-wow-delay="0.1s" data-wow-duration=".3s" style="visibility: visible; animation-duration: 0.3s; animation-delay: 0.1s;">
            <h3>pk</h3>
            <p>货源</p>
            <p>商家</p>
            <p>方案</p>
            <p>报价</p>
            <p>安装</p>
            <p>检测</p>
            <p>维修</p>
            <p>咨询</p>
            <div class="ifle7 c1line"></div>
          </div>
          <div class="c3 c0 wow fadeInRight animated" data-wow-delay="0.2s" data-wow-duration=".3s" style="visibility: visible; animation-duration: 0.3s; animation-delay: 0.2s;">
            <h2>万屏汇</h2>
            {list.map(function(item) {return (
            <p>{item.name}</p>
            )})}
          </div>
          <div class="c3 wow fadeInRight animated" data-wow-delay="0.3s" data-wow-duration=".3s" style="visibility: visible; animation-duration: 0.3s; animation-delay: 0.3s;">
            <h2>传统供应商</h2>
            <p>从二道贩子手上进货</p>
            <p>碰到谁是谁</p>
            <p>跑断腿找多家</p>
            <p>好货不便宜，便宜无好货</p>
            <p>上门安装，给师傅包烟</p>
            <p>自己盯着</p>
            <p>供应商售后（如果能找到）</p>
            <p>看供应商时间</p>
          </div>
          <div class="c3 cfinal wow fadeInRight animated" data-wow-delay="0.4s" data-wow-duration=".3s" style="visibility: visible; animation-duration: 0.3s; animation-delay: 0.4s;">
            <h2>X宝／X里巴巴</h2>
            <p>厂商或者二道贩子搞不清楚</p>
            <p>碰到谁是谁</p>
            <p>自己判断，自己做方案</p>
            <p>好货不便宜，便宜无好货</p>
            <p>自己安装</p>
            <p>祈祷千万别坏</p>
            <p>没有售后一说</p>
            <p>卖出不管</p>
          </div>
          <span class="clearfix"></span>
        </div>
      </div>
    )
  },

  controller: function (params) {
    var scope = {diffs: params.diffs};
    return scope;
  }
};
  