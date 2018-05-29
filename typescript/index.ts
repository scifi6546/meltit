/// <refrence path="phaser.d.ts"/>
import 'phaser';
//import "Phaser";
import {Game_State} from "./game";
import {Tiles} from "./tiles";
import {Preload} from "./preload"


var temp = {
    preload: preload,
    create: create,
    update: update,
    add_sprite: add_sprite
};
var config: GameConfig = {
    type:<any> Phaser.AUTO,
    width:<number> 800,
    height:<number> 700,
    backgroundColor:<string> '#ffffff',
    scene:temp
};
var zoom = 2;
export var zoom_str:string = zoom+"x";
console.log("zoom_str: " + zoom_str);
export var tile_size = 32*zoom;
var game = new Phaser.Game(config);
var scene = new Phaser.Scene(config);
var magic:any ;//magic variable used to add images
var money = 10;
var money_per_turn = 0;
var people = 0;
var people_per_turn = 0;
var hapiness = 0;
var grass_cost = 10
var grass_revenue = 2;
var game_tiles;
function preload(){
  var preload:Preload = new Preload(config);
 


  //Phaser.load.image('0','0.png');

}
function create(){
  game_tiles = new Tiles(Math.ceil(config.width/tile_size),
      Math.ceil(config.height/tile_size));
  draw_hud();
  
}
function update(){

}
function add_sprite(x:number,y:number,sprite_c:string):Phaser.GameObjects.Sprite{
  var sprite:Phaser.GameObjects.Sprite;
  sprite = magic.add.sprite(x,y,sprite_c).setInteractive();
  sprite.setOrigin(0,0);
  return sprite;
}
function next_turn(){
  money+=money_per_turn;
  update_hud();
  console.log("turned");
}
