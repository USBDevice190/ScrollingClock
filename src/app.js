var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window();

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(10, 20),
  size: new Vector2(124, 60),
  backgroundColor: 'white'
});

// Add Rect to Window
window.add(bgRect);

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'black',
  textAlign: 'center'
});

// Add the TimeText
window.add(timeText);

// Show the Window
window.show();