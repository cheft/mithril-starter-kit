var Menu = require('../common/menu');
var Form = require('./form');
var List = require('./list');

module.exports = {
  view: function(scope) {
    return (
      <div>
        <Menu />
        <hr />
        <Form list={List}/>
        <List />
      </div>
    )
  },

  controller: function(params) {
    console.log(this);
  }
};
