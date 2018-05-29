"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <refrence path="phaser.d.ts"/>
const phaser_1 = require("phaser");
const tiles_1 = require("./tiles");
var temp = {
    preload: preload,
    create: create,
    update: update,
    add_sprite: add_sprite
};
var config = {
    type: phaser_1.Phaser.AUTO,
    width: 800,
    height: 700,
    backgroundColor: '#ffffff',
    scene: temp
};
var zoom = 2;
var zoom_str = zoom + "x";
console.log("zoom_str: " + zoom_str);
var tile_size = 32 * zoom;
var game = new phaser_1.Phaser.Game(config);
var scene = new phaser_1.Phaser.Scene(config);
var magic; //magic variable used to add images
var money = 10;
var money_per_turn = 0;
var people = 0;
var people_per_turn = 0;
var hapiness = 0;
var grass_cost = 10;
var grass_revenue = 2;
var game_tiles;
function preload() {
    phaser_1.Phaser.load.image('snow', 'assets/png/tiles/' + zoom_str + 'snow.png');
    phaser_1.Phaser.load.image('grass', 'assets/png/tiles/' + zoom_str + 'grass.png');
    phaser_1.Phaser.load.image('next_turn_button', 'assets/png/hud/' + zoom_str + 'button.png');
    phaser_1.Phaser.load.image('tbm', 'assets/png/hud/' + zoom_str + 'to_be_made.png');
    phaser_1.Phaser.load.image('hud', 'assets/png/hud/' + zoom_str + 'hud.png');
    phaser_1.Phaser.load.image('build', 'assets/png/hud/' + zoom_str + 'build.png');
    phaser_1.Phaser.load.image('farm', 'assets/png/buildings/' + zoom_str + 'farm.png');
    phaser_1.Phaser.load.image('info_panel', 'assets/png/hud/' + zoom_str + 'info_panel.png');
    phaser_1.Phaser.load.image('0000', 'assets/png/edge_tiles/' + zoom_str + '0.png');
    phaser_1.Phaser.load.image('0001', 'assets/png/edge_tiles/' + zoom_str + '1.png');
    phaser_1.Phaser.load.image('0010', 'assets/png/edge_tiles/' + zoom_str + '10.png');
    phaser_1.Phaser.load.image('0011', 'assets/png/edge_tiles/' + zoom_str + '11.png');
    phaser_1.Phaser.load.image('0100', 'assets/png/edge_tiles/' + zoom_str + '100.png');
    phaser_1.Phaser.load.image('0101', 'assets/png/edge_tiles/' + zoom_str + '101.png');
    phaser_1.Phaser.load.image('0110', 'assets/png/edge_tiles/' + zoom_str + '110.png');
    phaser_1.Phaser.load.image('0111', 'assets/png/edge_tiles/' + zoom_str + '111.png');
    phaser_1.Phaser.load.image('1000', 'assets/png/edge_tiles/' + zoom_str + '1000.png');
    phaser_1.Phaser.load.image('1001', 'assets/png/edge_tiles/' + zoom_str + '1001.png');
    phaser_1.Phaser.load.image('1010', 'assets/png/edge_tiles/' + zoom_str + '1010.png');
    phaser_1.Phaser.load.image('1011', 'assets/png/edge_tiles/' + zoom_str + '1011.png');
    phaser_1.Phaser.load.image('1100', 'assets/png/edge_tiles/' + zoom_str + '1100.png');
    phaser_1.Phaser.load.image('1101', 'assets/png/edge_tiles/' + zoom_str + '1101.png');
    phaser_1.Phaser.load.image('1110', 'assets/png/edge_tiles/' + zoom_str + '1110.png');
    phaser_1.Phaser.load.image('1111', 'assets/png/edge_tiles/' + zoom_str + '1111.png');
    phaser_1.Phaser.load.image('ex_11111110', 'assets/png/edge_tiles/' + zoom_str + 'ex_11111110.png');
    phaser_1.Phaser.load.image('ex_11111011', 'assets/png/edge_tiles/' + zoom_str + 'ex_11111011.png');
    phaser_1.Phaser.load.image('ex_1111111', 'assets/png/edge_tiles/' + zoom_str + 'ex_1111111.png');
    phaser_1.Phaser.load.image('ex_11011111', 'assets/png/edge_tiles/' + zoom_str + 'ex_11011111.png');
    //Phaser.load.image('0','0.png');
}
function create() {
    game_tiles = new tiles_1.Tiles(Math.ceil(config.width / tile_size), Math.ceil(config.height / tile_size));
    draw_hud();
}
function update() {
}
function add_sprite(x, y, sprite_c) {
    var sprite = magic.add.sprite(x, y, sprite).setInteractive();
    sprite.setOrigin(0, 0);
    return sprite;
}
function next_turn() {
    money += money_per_turn;
    update_hud();
    console.log("turned");
}
