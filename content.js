var block = document.getElementById("readEasy_block");

if (block) {
  clearInterval(window.readEasyLoop);
  block.remove();
} else {
  d = document;
  var div = d.createElement('div');
  div.id = 'readEasy_block';
  d.body.appendChild(div);

  var mouseY = 0;
  var follower = document.getElementById("readEasy_block");

  window.readEasyLoop = setInterval(function(){
    yp = mouseY + 16;
    yp = (yp < 0) ? 0 : yp;
    follower.style.top = yp + 'px';
  }, 15);

  document.onmousemove = function(e) {
    mouseY = e.pageY;
  }
}
