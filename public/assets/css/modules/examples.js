
// var params = {
//   this_left: 0,
//   other_left: 0,
//   selected_left:0,
//   selected_width:0,
//   currentX: 0,
//   currentY: 0,
//   flag: false
// };
// //获取相关CSS属性
// var getCss = function(o,key){
//   //o是移动对象
//   return parseInt(o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]);
// };

// //拖拽的实现
// function startDrag(target,other,_selected,option){
//   var _this = this;
//   _this.flag = false;
//   _this.this_left = getCss(target, "left");
//   _this.selected_left = getCss(_selected, "left");
//   params.selected_width = getCss(_selected, "width");
//   target.onmousedown = function(event){
//     params.flag = true;
//     if(!event){
//       event = window.event;
//       //防止IE文字选中
//       target.onselectstart = function(){
//         return false;
//       }
//     }
//     var e = event;
//     _this.currentX = e.clientX;
//   };
//   target.onmouseup = function(){
//     _this.flag = false;
//     _this.this_left = getCss(target, "left");
//     _this.selected_left = getCss(_selected, "left");
//     _this.selected_width = getCss(_selected, "width");
//   };
//   target.onmousemove = function(event){
//     var e = event ? event: window.event;
//     if(_this.flag){
//       if(option.type == 'left'){
//         var cur_pos = getCss(target, "left");//当前位置
//         var move_len = e.clientX - _this.currentX;//移动的距离
//         var move_in = move_len + _this.this_left;//移动范围
//         var max_pos = getCss(other, "left") - option.min_unit;//最右边位置 left
//         if(move_in >= 0 && move_in <= max_pos){
//           target.style.left = move_len + _this.this_left + "px";
//           _selected.style.width = _this.selected_width - move_len + 'px';
//           _selected.style.left = move_len + _this.selected_left + 'px';
//         }
//       }else if(option.type == 'right'){
//         var cur_pos = getCss(target, "left");//当前位置
//         var move_len = e.clientX - _this.currentX;//移动的距离
//         var move_in = move_len + _this.this_left;//移动范围
//         var min_pos = option.min_unit + getCss(other, "left");//最左边位置 left
//         var max_pos = 260 - getCss(other, "left") + 7;//最右边位置 left 7是圆球半径
//         if(move_in >= min_pos && move_in <= max_pos){
//           target.style.left = move_len + _this.this_left + "px";
//           _selected.style.width = _this.selected_width + move_len + 'px';
//         }
//       }

//     }
//   }
// };

// $(function(){
//   var _bars = document.getElementsByClassName('selected-left');
//   var _others = document.getElementsByClassName('selected-right');
//   var _selecteds = document.getElementsByClassName('selected-content');
//   //startDrag(_bars[0],_others[0],_selecteds[0],{'type':'left','min_unit':20});
//   //startDrag(_bars[1],_others[1],_selecteds[1],{'type':'left','min_unit':20});
//   startDrag(_others[0],_bars[0],_selecteds[0],{'type':'right','min_unit':20});
//   //startDrag(_bars[1],_others[1],_selecteds[1],{'type':'right','min_unit':20});
//   //var _icon = document.getElementsByClassName('select-icon')[0];
// })
