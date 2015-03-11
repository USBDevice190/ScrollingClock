var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window();

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(0, 55),
  size: new Vector2(144, 60),
  backgroundColor: 'white'
});

// Add Rect to Window
window.add(bgRect);

// Create TimeText Left
var timeTextleft = new UI.TimeText({
  position: new Vector2(20, 55),
  size: new Vector2(144, 30),
  text: "%H",
  font: 'bitham-42-bold',
  color: 'black',
  textAlign: 'left'
});

// Create TimeText Right
var timeTextright = new UI.TimeText({
  position: new Vector2(-20, 55),
  size: new Vector2(144, 30),
  text: "%M",
  font: 'bitham-42-bold',
  color: 'black',
  textAlign: 'right'
});

// Create TimeText UpLeft
var timeTextleftUp = new UI.TimeText({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  text: "%H",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'left'
});

// Create TimeText DownLeft
var timeTextleftDown = new UI.TimeText({
  position: new Vector2(0, 115),
  size: new Vector2(144, 30),
  text: "%H",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'left'
});

// Create TimeText UpRight
var timeTextrightUp = new UI.TimeText({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  text: "%M",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'right'
});

// Create TimeText DownRight
var timeTextrightDown = new UI.TimeText({
  position: new Vector2(0, 115),
  size: new Vector2(144, 30),
  text: "%M",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'right'
});

// Add the TimeText
window.add(timeTextleft);
window.add(timeTextright);
window.add(timeTextleftUp);
window.add(timeTextleftDown);
window.add(timeTextrightUp);
window.add(timeTextrightDown);

// Show the Window
window.show();