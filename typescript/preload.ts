import 'phaser';
import 'index';
import { zoom_str } from '.';
export class Preload extends Phaser.Scene {
    preload() {
        this.load.image('snow', 'assets/png/tiles/' + zoom_str + 'snow.png');

        this.load.image('grass', 'assets/png/tiles/' + zoom_str + 'grass.png');
        this.load.image('next_turn_button', 'assets/png/hud/' + zoom_str + 'button.png');
        this.load.image('tbm', 'assets/png/hud/' + zoom_str + 'to_be_made.png');
        this.load.image('hud', 'assets/png/hud/' + zoom_str + 'hud.png');
        this.load.image('build', 'assets/png/hud/' + zoom_str + 'build.png');
        this.load.image('farm', 'assets/png/buildings/' + zoom_str + 'farm.png');
        this.load.image('info_panel', 'assets/png/hud/' + zoom_str + 'info_panel.png');

        this.load.image('0000', 'assets/png/edge_tiles/' + zoom_str + '0.png');
        this.load.image('0001', 'assets/png/edge_tiles/' + zoom_str + '1.png');
        this.load.image('0010', 'assets/png/edge_tiles/' + zoom_str + '10.png');
        this.load.image('0011', 'assets/png/edge_tiles/' + zoom_str + '11.png');

        this.load.image('0100', 'assets/png/edge_tiles/' + zoom_str + '100.png');
        this.load.image('0101', 'assets/png/edge_tiles/' + zoom_str + '101.png');
        this.load.image('0110', 'assets/png/edge_tiles/' + zoom_str + '110.png');
        this.load.image('0111', 'assets/png/edge_tiles/' + zoom_str + '111.png');

        this.load.image('1000', 'assets/png/edge_tiles/' + zoom_str + '1000.png');
        this.load.image('1001', 'assets/png/edge_tiles/' + zoom_str + '1001.png');
        this.load.image('1010', 'assets/png/edge_tiles/' + zoom_str + '1010.png');
        this.load.image('1011', 'assets/png/edge_tiles/' + zoom_str + '1011.png');
        this.load.image('1100', 'assets/png/edge_tiles/' + zoom_str + '1100.png');
        this.load.image('1101', 'assets/png/edge_tiles/' + zoom_str + '1101.png');
        this.load.image('1110', 'assets/png/edge_tiles/' + zoom_str + '1110.png');
        this.load.image('1111', 'assets/png/edge_tiles/' + zoom_str + '1111.png');

        this.load.image('ex_11111110', 'assets/png/edge_tiles/' + zoom_str + 'ex_11111110.png');
        this.load.image('ex_11111011', 'assets/png/edge_tiles/' + zoom_str + 'ex_11111011.png');
        this.load.image('ex_1111111', 'assets/png/edge_tiles/' + zoom_str + 'ex_1111111.png');
        this.load.image('ex_11011111', 'assets/png/edge_tiles/' + zoom_str + 'ex_11011111.png');
    }

}