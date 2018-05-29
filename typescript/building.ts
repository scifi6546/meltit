var build_gui_up = false;
//tests if build gui is up, false if not/

function building(x,y){
  this.x = x;
  this.y = y;

  this.build_farm = function(){
    add_sprite(x*tile_size,y*tile_size,"farm");
  }
  this.build_farm();
}
function build_gui(x,y){
  if(!build_gui_up){
    var place_x = x*tile_size + tile_size*.5
    var place_y = y*tile_size +3;
    this.build = add_sprite(place_x,place_y,'build').setOrigin(.5,.5);
    this.panel = new info_panel("placeholder");
    //this.build.setOrigin(.5,.5);
    build_gui_up = true;
    this.build.on('pointerdown',function (pointer){
      build_gui_up = false;
      building(x,y);
      remove_gui()

    });
  }
  this.remove_gui = function(){
    this.build.destroy();
    this.panel.remove();
  }
}
