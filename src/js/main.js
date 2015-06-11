$(function(){
	// すべてのビューモデルを格納するビューモデル
	var root_vm = {};
	// テトリスの盤面のマスの数
	const ROW_NUM = 20;
	const COL_NUM = 10;
	// ゲームの場面(状態)を示す定数
	const START = 1;
	const PLAYING = 2;
	const PAUSE = 3;
	const GAMEOVER = 4;
	// マスの状態を示す定数
	const EMPTY = 0;
	const ACTIVED = 1;
	const FREEZED = 2;
	// デバッグ用
	function dd(message){
		console.log(message);
	}
	// ゲーム全体を管理する
	class GameViewModel{
		constructor(){
			this.scene = ko.observable(START);
			this.attach_events();
			this.stage = new Stage();
		}
		// キー入力を受け付けるようにする
		attach_events(){
			$('html').keydown(function(e){
				if(root_vm["game_vm"].scene() == PLAYING){
					switch(e.which){
					case 39: // right
						dd("right");
						if(root_vm['game_vm'].scene() == PLAYING){
							root_vm['game_vm'].stage.current_block.right();
						}
						break;
					case 37: // left
						dd("left");
						if(root_vm['game_vm'].scene() == PLAYING){
							root_vm['game_vm'].stage.current_block.left();
						}
						break;
					case 38: // up
						dd("up");
						break;
					case 40: // down
						if(root_vm['game_vm'].scene() == PLAYING){
							if(root_vm['game_vm'].stage.current_block.down() == false){
								root_vm['game_vm'].stage.nextBlock();
							}
						}
						break;
					}
				}
			});
		}
		// シーンをスタートに切り替えてテトリスのゲームを開始する
		start(){
			// knockoutのビューから呼ばれた時、thisがroot_vmになってしまうため
			// this.method()ではなくroot_vm['game_vm'].method()としている
			root_vm['game_vm'].scene(PLAYING);
			root_vm['game_vm'].stage.start();
		}
		gameOver(){
			root_vm['game_vm'].scene(GAMEOVER);
			root_vm['game_vm'].stage.pause();
			console.log("gameover");
		}
		// スタートに戻る
		reset(){
			root_vm['game_vm'].scene(START);
			root_vm['game_vm'].stage.pause();
		}
		// ゲームを一旦停止する
		pause(){
			root_vm['game_vm'].scene(PAUSE);
			root_vm['game_vm'].stage.pause();
		}
	}
	// テトリスのゲームを管理する
	class Stage{
		constructor(){
			this.intervalId = 0;
			this.current_block = null;
			this.addBlock();
			this.current_block.draw();
		}
		// ゲームを開始する
		// 2秒ごとにframeメソッドを呼び出す
		start(){
			this.intervalId = setInterval(()=>{this.frame();}, 2000);
		}
		// ゲームを一旦停止
		pause(){
			clearInterval(this.intervalId);
		}
		// ステージに新しいブロックを追加
		addBlock(){
			// とりあえず、IBlockだけ追加する
			// ランダムに追加されるようにする
			this.current_block = new IBlock((COL_NUM - 2) / 2, 0);
		}
		// 現在のブロックを固定して、新しいブロックをステージに追加
		nextBlock(){
			this.current_block.freeze();
			root_vm['board_vm'].checkLine();
			this.addBlock();
		}
		// 2秒ごとにブロックを下に落とそうとする。
		frame(){
			console.log("frame");
			if(this.current_block.down() == false){
				this.nextBlock();
			}else{
				dd("down");
			}
		}
	}
	// ブロックを構成するタイル
	// 絶対座標を持つ
	class Tile{
		constructor(x,y){
			this.posX = x;
			this.posY = y;
		}
	}
	// ブロック
	class Block{
		constructor(x,y){
			this.posX = x;
			this.posY = y;
			this.tiles = [];
		}
		// ブロックを構成するタイルを追加
		// dxおよびdyは相対的な座標
		addTile(dx,dy){
			this.tiles.push(new Tile(this.posX + dx, this.posY + dy));
		}
		// ブロックを下に移動させる
		// 失敗した時falseを返す
		down(){
			if(this.canMove(0,1)){
				this.erase();
				this.move(0,1);
				this.draw();
				return true;
			}else{
				return false
			}
		}
		// ブロックを右に移動させる
		// 失敗した時falseを返す
		right(){
			if(this.canMove(1,0)){
				this.erase();
				this.move(1,0);
				this.draw();
				return true;
			}else{
				return false;
			}
		}
		// ブロックを左に移動させる
		// 失敗した時falseを返す
		left(){
			if(this.canMove(-1,0)){
				this.erase();
				this.move(-1,0);
				this.draw();
				return true;
			}else{
				return false;
			}
		}
		// ブロックを右に90度回転させる
		// 失敗した時falseを返す
		rotate(){
			
		}
		// 移動することができるかを真偽値で返す
		// dxはどれだけ右に動かすか
		// dyはどれだけ下に動かすか
		canMove(dx, dy){
			for(let tile of this.tiles){
				if((tile.posX + dx) < COL_NUM &&
				   (tile.posX + dx) >= 0 &&
				   (tile.posY + dy) < ROW_NUM){
					let value = root_vm["board_vm"].getSquareValue(tile.posX + dx,tile.posY + dy);
					if(value == FREEZED){
						return false;
					}
				}else{
					return false;
				}
			}
			return true;
		}
		// ブロックを動かす
		// dxはどれだけ右に動かすか
		// dyはどれだけ下に動かすか
		move(dx,dy){
			for(let tile of this.tiles){
				tile.posX += dx;
				tile.posY += dy;
			}
		}
		// ブロックを固定化する
		// 実際にはブロックのタイルをボードに書き込む
		freeze(){
			for(let t of this.tiles){
				root_vm["board_vm"].squares[t.posY][t.posX].value(FREEZED);
			}
		}
		// ブロックを消す
		erase(){
			for(let t of this.tiles){
				root_vm["board_vm"].squares[t.posY][t.posX].value(EMPTY);
			}
		}
		// ブロックをボードに描画する
		draw(){
			for(let t of this.tiles){
				root_vm["board_vm"].squares[t.posY][t.posX].value(ACTIVED);
			}
		}
		checkGameOver(){
			for(let t of this.tiles){
				if(root_vm["board_vm"].squares[t.posY][t.posX].value() == FREEZED){
					root_vm["game_vm"].gameOver();
					break;
				}
			}
		}
	}
	// *
	// *
	// *
	// *
	class IBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(1,0);
			this.addTile(1,1);
			this.addTile(1,2);
			this.addTile(1,3);
			this.checkGameOver();
			this.draw();
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
	class BoardViewModel{
		constructor(){
			var x;
			var y;
			this.squares = [];
			for(y = 0; y < ROW_NUM; y++){
				this.squares[y] = [];
				for(x = 0; x < COL_NUM; x++){
					this.squares[y][x] = new Square(0);
				}
			}
		}
		getSquareValue(x,y){
			return this.squares[y][x].value();
		}
		checkLine(){
			let y = ROW_NUM - 1;
			let x = 0;
			while(y >= 0){
				let flag = true;
				for(x=0; x < COL_NUM; x++){
					if(this.squares[y][x].value() != FREEZED){
						flag = false;
						break;
					}
				}
				if(flag == true){
					dd("clear");
					this.clearLine(y);
				}else{
					y--;
				}
			}
		}
		clearLine(y){
			// 段をずらして行く
			for(let i = y; i > 0; i--){
				this.squares[i] = this.squares[i-1];
			}
			// ROW_NUM段目に空のsquareを追加する。
			for(let x = 0; x < COL_NUM; x++){
				this.squares[0][x] = new Square(0);
			}
		}
	}
	root_vm["board_vm"] = new BoardViewModel();
	root_vm['game_vm'] = new GameViewModel();
	ko.applyBindings(root_vm);
});
