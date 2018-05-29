"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiles_1 = require("./tiles");
class Game_State {
    constructor() {
        this.build_gui_up = false; //checks if build gui is up
        this.money = 0;
        this.money_per_turn = 0;
        this.game_tiles = new tiles_1.Tiles(20, 20);
    }
}
exports.Game_State = Game_State;
