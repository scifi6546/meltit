
function info_panel(text){
  this.sprite = add_sprite(0,0,'info_panel');
  var textStyle = {
    font: "normal 10px Arial",
    fill: '#000000',
    align: 'center',

  };

  this.text = magic.add.text(4*zoom,4*zoom,text,textStyle);
  this.text.setText(text);
  this.button = add_sprite(63*zoom,94*zoom,'next_turn_button');
  this.button.setInteractive();
  this.button.on('pointerdown',function (pointer){
    console.log("should build");
  });
  this.remove = function(){
    this.sprite.destroy();
    this.text.destroy();
    this.button.destroy();
  }
}
