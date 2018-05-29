import {Tiles} from "./tiles";
    export class Game_State{
        build_gui_up: boolean = false; //checks if build gui is up
        money: number = 0;
        money_per_turn:number = 0;
        game_tiles:Tiles;
        constructor(){
            this.game_tiles = new Tiles(20,20);
        }
    }
