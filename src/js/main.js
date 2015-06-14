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
	// 落下速度(ms)
	const SPEED_LIST = [1000,500,400,300,200,100];
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
				if(root_vm.game_vm.scene() == PLAYING){
					switch(e.which){
					case 39: // right
						dd("right");
						if(root_vm.game_vm.scene() == PLAYING){
							root_vm.game_vm.stage.current_block.right();
						}
						break;
					case 37: // left
						dd("left");
						if(root_vm.game_vm.scene() == PLAYING){
							root_vm.game_vm.stage.current_block.left();
						}
						break;
					case 38: // up
						dd("up");
						if(root_vm.game_vm.scene() == PLAYING){
							root_vm.game_vm.stage.current_block.rotate();
						}
						break;
					case 40: // down
						if(root_vm.game_vm.scene() == PLAYING){
							if(root_vm.game_vm.stage.current_block.down() == false){
								root_vm.game_vm.stage.nextBlock();
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
			// this.method()ではなくroot_vm.game_vm.method()としている
			root_vm.game_vm.scene(PLAYING);
			root_vm.game_vm.stage.start();
			
		}
		// ゲームオーバーにする
		gameOver(){
			root_vm.game_vm.scene(GAMEOVER);
			root_vm.game_vm.stage.pause();
			console.log("gameover");
		}
		// スタートに戻る
		reset(){
			root_vm.game_vm.scene(START);
			root_vm.board_vm.reset();
			root_vm.game_vm.stage.reset();
			root_vm.score_vm.reset();
		}
		// ショップに入る
		shop(){
		}
		// ゲームを一旦停止する
		pause(){
			root_vm.game_vm.scene(PAUSE);
			root_vm.game_vm.stage.pause();
		}
	}
	// テトリスのゲームを管理する
	class Stage{
		constructor(){
			this.intervalId = 0;
			this.current_block = null;
			this.blocks = [IBlock,LBlock,JBlock,TBlock,OBlock,ZBlock,SBlock];
			this.addBlock();
			this.current_block.draw();
		}
		// ゲームを開始する
		start(){
			this.intervalId = setInterval(()=>{this.frame();}, SPEED_LIST[0]);
		}
		changeSpeed(speed){
			clearInterval(this.intervalId);
			this.intervalId = setInterval(()=>{this.frame();}, speed);
		}
		// ゲームを一旦停止
		pause(){
			clearInterval(this.intervalId);
		}
		reset(){
			clearInterval(this.intervalId);
			this.addBlock();
			this.current_block.draw();
		}
		// ステージに新しいブロックを追加
		addBlock(){
			// とりあえず、IBlockだけ追加する
			// ランダムに追加されるようにする
			let block = this.blocks[Math.floor(Math.random() * this.blocks.length)];
			this.current_block = new block((COL_NUM - 2) / 2, 0);
		}
		// 現在のブロックを固定して、新しいブロックをステージに追加
		nextBlock(){
			this.current_block.freeze();
			root_vm.board_vm.checkLine();
			this.addBlock();
		}
		// 一定間隔ごとにブロックを下に落とそうとする。
		frame(){
			console.log("frame");
			if(this.current_block.down() == false){
				this.nextBlock();
			}else{
				
			}
		}
	}
	// ブロックを構成するタイル
	// 絶対座標を持つ
	class Tile{
		constructor(x,y,block){
			this.posX = x;
			this.posY = y;
			this.block = block;
		}
		posXYRelativeToBlock(){
			return {
				x: this.posX - this.block.posX,
				y: this.posY - this.block.posY
			};
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
			this.tiles.push(new Tile(this.posX + dx, this.posY + dy,this));
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
		getXYByRotatino(tile){
			return {
				x: -(tile.posXYRelativeToBlock().y) + 2 + this.posX,
				y: tile.posXYRelativeToBlock().x + this.posY
			};
		}
		canRotate(){
			for(let tile of this.tiles){
				let pos = this.getXYByRotatino(tile);
				if(pos.x < COL_NUM &&
				   pos.x >= 0 &&
				   pos.y >= 0 &&
				   pos.y < ROW_NUM){
					let value = root_vm.board_vm.getSquareValue(pos.x,pos.y);
					if(value == FREEZED){
						return false;
					}
				}else{
					return false;
				}
			}
			return true;
		}
		// ブロックを右に90度回転させる
		rotate(){
			if(this.canRotate()){
				this.erase();
				for(let tile of this.tiles){
					let pos = this.getXYByRotatino(tile);
					tile.posX = pos.x;
					tile.posY = pos.y;
				}
				this.draw();
				return true;
			}else{
				return false;
			}
		}
		// 移動することができるかを真偽値で返す
		// dxはどれだけ右に動かすか
		// dyはどれだけ下に動かすか
		canMove(dx, dy){
			for(let tile of this.tiles){
				let x = tile.posX + dx;
				let y = tile.posY + dy
				if(x < COL_NUM &&
				   x >= 0 &&
				   y < ROW_NUM){
					let value = root_vm.board_vm.getSquareValue(x,y);
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
			this.posX += dx;
			this.posY += dy;
			for(let tile of this.tiles){
				tile.posX += dx;
				tile.posY += dy;
			}
		}
		// ブロックを固定化する
		// 実際にはブロックのタイルをボードに書き込む
		freeze(){
			this.drawBoard(FREEZED);
		}
		// ブロックを消す
		erase(){
			this.drawBoard(EMPTY);
		}
		// ブロックをボードに描画する
		draw(){
			this.drawBoard(ACTIVED);
		}
		drawBoard(square_status){
			for(let t of this.tiles){
				root_vm.board_vm.squares[t.posY][t.posX].value(square_status);
			}
		}
		checkGameOver(){
			for(let t of this.tiles){
				if(root_vm.board_vm.squares[t.posY][t.posX].value() == FREEZED){
					root_vm.game_vm.gameOver();
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
		constructor(x,y){
			super(x,y);
			this.addTile(1,0);
			this.addTile(1,1);
			this.addTile(1,2);
			this.addTile(2,2);
			this.checkGameOver();
			this.draw();
		}
	}
	//   *
	//   *
	// * *
	class JBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(2,0);
			this.addTile(2,1);
			this.addTile(2,2);
			this.addTile(1,2);
			this.checkGameOver();
			this.draw();
		}
	}
	// *
	// * *
	// *
	class TBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(1,0);
			this.addTile(0,1);
			this.addTile(1,1);
			this.addTile(2,1);
			this.checkGameOver();
			this.draw();
		}
	}
	// * *
	// * *
	class OBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(1,1);
			this.addTile(1,2);
			this.addTile(2,1);
			this.addTile(2,2);
			this.checkGameOver();
			this.draw();			
		}
	}
	// * *
	//   * *
	class ZBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(2,0);
			this.addTile(2,1);
			this.addTile(1,1);
			this.addTile(1,2);
			this.checkGameOver();
			this.draw();
		}
	}
	//   * *
	// * *
	class SBlock extends Block{
		constructor(x,y){
			super(x,y);
			this.addTile(1,0);
			this.addTile(1,1);
			this.addTile(2,1);
			this.addTile(2,2);
			this.checkGameOver();
			this.draw();
		}
	}

	// 盤面の一つ一つのマス
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
	// 盤面
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
		reset(){
			var x;
			var y;
			for(y = 0; y < ROW_NUM; y++){
				for(x = 0; x < COL_NUM; x++){
					this.squares[y][x].value(EMPTY);
				}
			}
		}
		getSquareValue(x,y){
			return this.squares[y][x].value();
		}
		checkLine(){
			let y = ROW_NUM - 1;
			let x = 0;
			let cleared_line_num = 0;
			while(y >= 0){
				let flag = true;
				for(x=0; x < COL_NUM; x++){
					if(this.squares[y][x].value() != FREEZED){
						flag = false;
						break;
					}
				}
				if(flag == true){
					this.clearLine(y);
					cleared_line_num++;
				}else{
					y--;
				}
			}
			root_vm.score_vm.addCleardline(cleared_line_num);
		}
		clearLine(y){
			// 段をずらして行く
			for(let cy = y; cy > 0; cy--){
				for(let cx = 0; cx < COL_NUM; cx++){
					this.squares[cy][cx].value(this.squares[cy-1][cx].value());
				}
			}
			// ROW_NUM段目に空のsquareを追加する。
			for(let x = 0; x < COL_NUM; x++){
				this.squares[0][x].value(EMPTY);
			}
		}
	}
	class ScoreViewModel{
		constructor(){
			this.line = ko.observable();
			this.score = ko.observable();
			this.speed = ko.observable();
			this.level = ko.observable();
			this.tweet = function(){
				var message = 'ラインを'
					+this.line()+'本消して、スコアを'
					+this.score()+'点獲得したよ'
					+' / '
					+document.title
					+' - '
					+location.href;
				var f='http://twitter.com/?status='
					+encodeURIComponent(message);
				if(!window.open(f,'surfing')){
					location.href=f; void(0);
					
				}
			}
			this.reset();
		}
		reset(){
			this.line(0);
			this.score(0);
			this.speed(SPEED_LIST[0]);
			this.level(1);
		}
		addCleardline(num){
			this.line(this.line() + num);
			let bonus = 0;
			switch(num){
			case 1:
				bonus = 100;
				break;
			case 2:
				bonus = 300;
				break;
			case 3:
				bonus = 1000;
				break;
			case 4:
				bonus = 5000;
				break;
			}
			this.score(this.score() + bonus);
			// ラインを10本消す度にレベルを上げる
			if(this.line() > this.level() * 10){
				this.level(this.level() +1);
				this.speed(SPEED_LIST[this.level()]);
				root_vm.game_vm.stage.changeSpeed(this.speed());
			}
		}
	}
	root_vm.score_vm = new ScoreViewModel();
	root_vm.board_vm = new BoardViewModel();
	root_vm.game_vm = new GameViewModel();
	ko.applyBindings(root_vm);
});
