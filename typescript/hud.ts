//
function draw_hud(){
  var textStyle = {
    font: "normal 24px Arial",
    fill: '#000000',
    align: 'center',

  };
  var hud_base = add_sprite(config.width/2,0,"hud").setOrigin(.5,0);
  this.money_text = magic.add.text(config.width/2 - 54*zoom,2*zoom,money.toString(),textStyle);
  this.button = magic.add.sprite(config.width,config.height,'next_turn_button').setOrigin(1,1);
  this.button.setInteractive();
  this.button.on('pointerdown',function (pointer){
    next_turn();
  });

}
function update_hud(){
  this.money_text.setText(money.toString());
}
