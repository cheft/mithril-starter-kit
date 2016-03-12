module.exports = {
  view: function (scope) {
    var list = scope.flows || [];
    return (
      <div class="process bl">
        <div class="center">
          <h3 class="cb fm fadeInUp2 animated">服务流程<span class="cl">客户权益第一，我们以保障客户权益为天职</span></h3>
          {list.map(function(item) {return (
          <div class="fadeInUp2 animated">
            <h4><i class={item.icon}></i>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          )})}
          <span class="clearfix"></span>
        </div>
      </div>
    )
  },

  controller: function (params) {
    var scope = {flows: params.flows};
    return scope;
  }
};

