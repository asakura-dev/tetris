$(function(){
	// すべてのビューモデルを格納するビューモデル
	var root_vm = {};
	// テトリスの盤面のマスの数
	const ROW_NUM = 20;
	const COL_NUM = 10;
	// ゲームの状態を示す定数
	const START = 1;
	const PLAYING = 2;
	const PAUSE = 3;
	// マスの状態を示す定数
	const EMPTY = 0;
	const ACTIVED = 1;
	const FREEZED = 2;
	// デバッグ用
	function dd(message){
		console.log(message);
	}
	
	class GameViewModel{
		constructor(){
			this.mode = ko.observable(START);
			this.attach_events();
			this.stage = new Stage();
		}
		attach_events(){
			$('html').keydown(function(e){
				if(root_vm["game_vm"].mode() == PLAYING){
					switch(e.which){
					case 39: // right
						dd("right");
						break;
					case 37: // left
						dd("left");
						break;
					case 38: // up
						dd("up");
						break;
					case 40: // down
						dd("down");
						break;
					}
				}
			});
		}
		start(){
			// knockoutのビューから呼ばれた時、thisがroot_vmになってしまうため
			// this.method()ではなくroot_vm['game_vm'].method()としている
			root_vm['game_vm'].mode(PLAYING);
			root_vm['game_vm'].stage.start();
		}
		reset(){
			root_vm['game_vm'].mode(START);
			root_vm['game_vm'].stage.pause();
		}
		pause(){
			root_vm['game_vm'].mode(PAUSE);
			root_vm['game_vm'].stage.pause();
		}
	}
	class Stage{
		constructor(){
			this.intervalId = 0;
		}
		start(){
			this.intervalId = setInterval(this.frame, 2000);
		}
		pause(){
			clearInterval(this.intervalId);
		}
		frame(){
			console.log("frame");
		}
	}
	class Block{
		constructor(){
		}
	}
	// *
	// *
	// *
	// *
	class IBlock extends Block{
		constructor(){
			super();
		}
	}
	// *
	// *
	// * *
	class LBlock extends Block{
		constructor(){
			super();
		}
	}
	//   *
	//   *
	// * *
	class JBlock extends Block{
		constructor(){
			super();
		}
	}
	// *
	// * *
	// *
	class TBlock extends Block{
		constructor(){
			super();
		}
	}
	// * *
	// * *
	class OBlock extends Block{
		constructor(){
			super();
		}
	}
	// * *
	//   * *
	class ZBlock extends Block{
		constructor(){
			super();
		}
	}
	//   * *
	// * *
	class SBlock extends Block{
		constructor(){
			super();
		}
	}
	
	class Square{
		constructor(value){
			this.value = ko.observable(value);
			this.text = ko.computed(()=>{
				switch(this.value()){
				case EMPTY:
					return '';
				case ACTIVED:
					return 'actived';
				case FREEZED:
					return 'freezed';
				}
			});
		}
	}
	class TileViewModel{
		constructor(){
			var i;
			var j;
			this.square = [];
			for(i = 0; i < ROW_NUM; i++){
				this.square[i] = [];
				for(j = 0; j < COL_NUM; j++){
					this.square[i][j] = new Square(0);
				}
			}
		}
	}
	root_vm['game_vm'] = new GameViewModel();
	root_vm["tile_vm"] = new TileViewModel();
	ko.applyBindings(root_vm);
});
