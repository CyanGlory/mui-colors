
window.onload = function() {
  // 点击展开
  $('.flex-container').click(function(ev) {
    $('.active').removeClass('active');
    $(ev.target).addClass('active');
  });
  // 追加子元素
  var colorKeys = Object.keys(muiColors);
  colorKeys.forEach(addChildColor);

  function addChildColor(colorName) {
    var $parent = $(`.bg-${colorName}-500`);
    var childs = muiColors[colorName];
    
    for (var prop in childs) {
      var colorValue = `<span class="depth">${prop}</span>${childs[prop]}`;
      var child = $(`<div class="color-item bg-${colorName}-${prop}">${colorValue}</div>`);
      // 深色字体
      if (['50', '100', '200', '300', '400', 'A100'].indexOf(prop) !== -1) {
        child.addClass('grey-900');
      }
      $parent.append(child);
    }
    // 杂色
    $parent.prepend(`<div class="motley-item motley-${colorName}">${colorName}</div>`);
  }
}