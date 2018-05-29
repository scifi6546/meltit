import 'phaser';
import { Game_State } from "./game";
import {tile_size} from "./index";
export class Tiles {
  x: number = 0;
  y: number = 0;
  sprites: any = [];


  constructor(x_cord: number, y_cord: number) {
    this.x = x_cord;
    this.y = y_cord;
    this.sprites = [];

    for (var i = 0; i < this.x; i++) {
      this.sprites[i] = [];
      for (var j = 0; j < this.y; j++) {
        this.sprites[i][j] = new tile(i * tile_size, j * tile_size, 'snow');
      }
    }
  }
  clear_ice(x: number, y: number, check_cont: any) {
    console.log("tiles.x: " + Game_State.game_tiles.x);
    if (this.sprites[x][y].type === 'grass') {
      console.log("found grass");
      build_gui(x, y);
    } else {

      var contiguous = this.check_contiguous(x, y);
      if (check_cont === false)
        contiguous = true;
      if (money >= grass_cost && contiguous &&
        this.sprites[x][y].type !== 'grass') {

        money -= grass_cost;
        money_per_turn += grass_revenue;
        this.sprites[x][y].sprite.setTexture('grass');
        this.sprites[x][y].type = 'grass';

        for (var i = x - 1; i <= x + 1; i++) {
          for (var j = y - 1; j <= y + 1; j++) {
            console.log("supposed to set snow");
            this.set_snow_tile(i, j);
          }
        }
        update_hud();

      }
    }
  }
  check_contiguous(x: number, y: number): boolean {
    var other_tile = 'snow';
    var contiguous: boolean = false;
    for (var i = x - 1; i < x + 2; i++) {
      for (var j = y - 1; j < y + 2; j++) {
        console.log("i: " + i);
        console.log("j: " + j);
        if (i <= 0 || i >= this.x - 1 || j <= 0 || j >= this.y - 1) {
          other_tile = 'snow';
        } else {
          other_tile = this.sprites[i][j].type;

          console.log("texture: " + other_tile);
        }
        if (other_tile === "grass") {
          contiguous = true;
        }
      }

    }
    if (i === -1 || i === this.x || j === -1 || j === this.y)
      contiguous = false;
    return contiguous;
  }
  set_snow_tile(x: number, y: number) {
    console.log("x: " + x);
    console.log("y: " + y);
    if (x === -1 || x === this.x || y === -1 || y === this.y) {
    } else {
      if (this.sprites[x][y].type !== 'grass') {
        console.log("set snow tile");
        var key_num: number = this.gen_key_num(x, y);
        var key: string = this.gen_key(key_num);
        console.log("key: " + key);
        console.log("x: " + x);
        console.log("y: " + y);
        this.sprites[x][y].sprite.setTexture(key);
      }
    }
    console.log("*********************end tile build*************************")
  }
  gen_key_num(x: number, y: number): number {
    //using
    //http://www.angryfishstudios.com/2011/04/adventures-in-bitmasking/
    //as a guide
    var sum: number = 0;
    var power: number = 0;
    var snow: number = 0;

    for (var j = y - 1; j <= y + 1; j++) {
      for (var i = x - 1; i <= x + 1; i++) {
        console.log("i: " + i);
        console.log("j: " + j);
        console.log("power: " + power);
        if (i !== x || j !== y) {
          snow = 0;
          console.log("i!==x || j!==y true");
          if (i === -1 || i === this.x || j === -1 || j === this.y) {
            snow = 1;
          } else {
            snow = 0;
            if (this.sprites[i][j].type === "snow") {
              snow = 1;
            } else {
              console.log("no snow");
            }

          }
          sum += Math.pow(10, power) * snow;
          console.log("Math.pow(10," + power + ")*" + snow + "  = " + Math.pow(10, power) * snow);

          power++;

        }
      }
    }
    console.log("snow tile: " + sum);
    return sum;
  }

  gen_key(key_num: number): string {
    console.log("key_num: " + key_num);
    if (key_num === 11111110)
      return "ex_11111110";
    if (key_num === 11111011)
      return "ex_11111011";
    if (key_num === 1111111)
      return "ex_1111111";
    if (key_num === 11011111)
      return "ex_11011111";
    var original: string = String(key_num);
    console.log("length: " + original.length);
    if (original.length < 8) {
      for (var i = original.length; i < 8; i++) {
        var temp_str = "";
        console.log("i: " + i);
        temp_str += "0";
        temp_str += original;
        original = temp_str;
        console.log("temp_str: " + temp_str);
        //original=temp_str;
      }
    }
    console.log("key_num: " + key_num);
    console.log("original: " + original);
    var part1 = original.substr(1, 1);
    var part2 = original.substr(3, 2);
    var part3 = original.substr(6, 1);
    console.log("part1: " + part1);
    console.log("part2: " + part2);
    console.log("part3: " + part3);
    var out = part1;
    out = out.concat(part2);
    out = out.concat(part3);
    console.log("out: " + out);
    return out;
  }
  check_snow(x: number, y: number) {
    var snow: boolean = false;
    if ('snow' === this.sprites[x][y].type)
      snow = true;
    return snow;
  }
  startup() {
    money = grass_cost;
    this.clear_ice(7, 7, false);
  }

}

export class tile {
  x: number;
  y: number;
  type: string;
  sprite: any;
  constructor(x: number, y: number, sprite_char: string) {
    this.x = x;
    this.y = y;
    this.type = 'snow';
    this.sprite = add_sprite(x, y, sprite_char);
    this.sprite.x_grid_pos = x / tile_size;
    this.sprite.y_grid_pos = y / tile_size;
    this.sprite.on('pointerdown', function (pointer) {
      game_tiles.clear_ice(this.x_grid_pos, this.y_grid_pos, true);
    });
  }

  //magic.add.sprite(x,y,sprite_char);
  //this.sprite = game.add.image(0,0,sprite_char);


}
