var rocky = require('rocky');

rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  var ctx = event.context;
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';

  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;
  ctx.fillText('JavaScript\non the watch!', w / 2, h / 2);
});