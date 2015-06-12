"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	// すべてのビューモデルを格納するビューモデル
	var root_vm = {};
	// テトリスの盤面のマスの数
	var ROW_NUM = 20;
	var COL_NUM = 10;
	// ゲームの場面(状態)を示す定数
	var START = 1;
	var PLAYING = 2;
	var PAUSE = 3;
	var GAMEOVER = 4;
	// マスの状態を示す定数
	var EMPTY = 0;
	var ACTIVED = 1;
	var FREEZED = 2;
	// 落下速度(ms)
	var SPEED_LIST = [1000, 500, 400, 300, 200, 100];
	// デバッグ用
	function dd(message) {
		console.log(message);
	}
	// ゲーム全体を管理する

	var GameViewModel = (function () {
		function GameViewModel() {
			_classCallCheck(this, GameViewModel);

			this.scene = ko.observable(START);
			this.attach_events();
			this.stage = new Stage();
		}

		_createClass(GameViewModel, [{
			key: "attach_events",

			// キー入力を受け付けるようにする
			value: function attach_events() {
				$("html").keydown(function (e) {
					if (root_vm.game_vm.scene() == PLAYING) {
						switch (e.which) {
							case 39:
								// right
								dd("right");
								if (root_vm.game_vm.scene() == PLAYING) {
									root_vm.game_vm.stage.current_block.right();
								}
								break;
							case 37:
								// left
								dd("left");
								if (root_vm.game_vm.scene() == PLAYING) {
									root_vm.game_vm.stage.current_block.left();
								}
								break;
							case 38:
								// up
								dd("up");
								if (root_vm.game_vm.scene() == PLAYING) {
									root_vm.game_vm.stage.current_block.rotate();
								}
								break;
							case 40:
								// down
								if (root_vm.game_vm.scene() == PLAYING) {
									if (root_vm.game_vm.stage.current_block.down() == false) {
										root_vm.game_vm.stage.nextBlock();
									}
								}
								break;
						}
					}
				});
			}
		}, {
			key: "start",

			// シーンをスタートに切り替えてテトリスのゲームを開始する
			value: function start() {
				// knockoutのビューから呼ばれた時、thisがroot_vmになってしまうため
				// this.method()ではなくroot_vm.game_vm.method()としている
				root_vm.game_vm.scene(PLAYING);
				root_vm.game_vm.stage.start();
				root_vm.score_vm.reset();
			}
		}, {
			key: "gameOver",

			// ゲームオーバーにする
			value: function gameOver() {
				root_vm.game_vm.scene(GAMEOVER);
				root_vm.game_vm.stage.pause();
				console.log("gameover");
			}
		}, {
			key: "reset",

			// スタートに戻る
			value: function reset() {
				root_vm.game_vm.scene(START);
				root_vm.board_vm.reset();
				root_vm.game_vm.stage.reset();
			}
		}, {
			key: "shop",

			// ショップに入る
			value: function shop() {}
		}, {
			key: "pause",

			// ゲームを一旦停止する
			value: function pause() {
				root_vm.game_vm.scene(PAUSE);
				root_vm.game_vm.stage.pause();
			}
		}]);

		return GameViewModel;
	})();

	// テトリスのゲームを管理する

	var Stage = (function () {
		function Stage() {
			_classCallCheck(this, Stage);

			this.intervalId = 0;
			this.current_block = null;
			this.blocks = [IBlock, LBlock, JBlock, TBlock, OBlock, ZBlock, SBlock];
			this.addBlock();
			this.current_block.draw();
		}

		_createClass(Stage, [{
			key: "start",

			// ゲームを開始する
			value: function start() {
				var _this = this;

				this.intervalId = setInterval(function () {
					_this.frame();
				}, SPEED_LIST[0]);
			}
		}, {
			key: "changeSpeed",
			value: function changeSpeed(speed) {
				var _this2 = this;

				clearInterval(this.intervalId);
				this.intervalId = setInterval(function () {
					_this2.frame();
				}, speed);
			}
		}, {
			key: "pause",

			// ゲームを一旦停止
			value: function pause() {
				clearInterval(this.intervalId);
			}
		}, {
			key: "reset",
			value: function reset() {
				clearInterval(this.intervalId);
				this.addBlock();
				this.current_block.draw();
			}
		}, {
			key: "addBlock",

			// ステージに新しいブロックを追加
			value: function addBlock() {
				// とりあえず、IBlockだけ追加する
				// ランダムに追加されるようにする
				var block = this.blocks[Math.floor(Math.random() * this.blocks.length)];
				this.current_block = new block((COL_NUM - 2) / 2, 0);
			}
		}, {
			key: "nextBlock",

			// 現在のブロックを固定して、新しいブロックをステージに追加
			value: function nextBlock() {
				this.current_block.freeze();
				root_vm.board_vm.checkLine();
				this.addBlock();
			}
		}, {
			key: "frame",

			// 一定間隔ごとにブロックを下に落とそうとする。
			value: function frame() {
				console.log("frame");
				if (this.current_block.down() == false) {
					this.nextBlock();
				} else {}
			}
		}]);

		return Stage;
	})();

	// ブロックを構成するタイル
	// 絶対座標を持つ

	var Tile = (function () {
		function Tile(x, y, block) {
			_classCallCheck(this, Tile);

			this.posX = x;
			this.posY = y;
			this.block = block;
		}

		_createClass(Tile, [{
			key: "posXYRelativeToBlock",
			value: function posXYRelativeToBlock() {
				return {
					x: this.posX - this.block.posX,
					y: this.posY - this.block.posY
				};
			}
		}]);

		return Tile;
	})();

	// ブロック

	var Block = (function () {
		function Block(x, y) {
			_classCallCheck(this, Block);

			this.posX = x;
			this.posY = y;
			this.tiles = [];
		}

		_createClass(Block, [{
			key: "addTile",

			// ブロックを構成するタイルを追加
			// dxおよびdyは相対的な座標
			value: function addTile(dx, dy) {
				this.tiles.push(new Tile(this.posX + dx, this.posY + dy, this));
			}
		}, {
			key: "down",

			// ブロックを下に移動させる
			// 失敗した時falseを返す
			value: function down() {
				if (this.canMove(0, 1)) {
					this.erase();
					this.move(0, 1);
					this.draw();
					return true;
				} else {
					return false;
				}
			}
		}, {
			key: "right",

			// ブロックを右に移動させる
			// 失敗した時falseを返す
			value: function right() {
				if (this.canMove(1, 0)) {
					this.erase();
					this.move(1, 0);
					this.draw();
					return true;
				} else {
					return false;
				}
			}
		}, {
			key: "left",

			// ブロックを左に移動させる
			// 失敗した時falseを返す
			value: function left() {
				if (this.canMove(-1, 0)) {
					this.erase();
					this.move(-1, 0);
					this.draw();
					return true;
				} else {
					return false;
				}
			}
		}, {
			key: "getXYByRotatino",
			value: function getXYByRotatino(tile) {
				return {
					x: -tile.posXYRelativeToBlock().y + 2 + this.posX,
					y: tile.posXYRelativeToBlock().x + this.posY
				};
			}
		}, {
			key: "canRotate",
			value: function canRotate() {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.tiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var tile = _step.value;

						var pos = this.getXYByRotatino(tile);
						if (pos.x < COL_NUM && pos.x >= 0 && pos.y >= 0 && pos.y < ROW_NUM) {
							var value = root_vm.board_vm.getSquareValue(pos.x, pos.y);
							if (value == FREEZED) {
								return false;
							}
						} else {
							return false;
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return true;
			}
		}, {
			key: "rotate",

			// ブロックを右に90度回転させる
			value: function rotate() {
				if (this.canRotate()) {
					this.erase();
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = this.tiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var tile = _step2.value;

							var pos = this.getXYByRotatino(tile);
							tile.posX = pos.x;
							tile.posY = pos.y;
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
								_iterator2["return"]();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					this.draw();
					return true;
				} else {
					return false;
				}
			}
		}, {
			key: "canMove",

			// 移動することができるかを真偽値で返す
			// dxはどれだけ右に動かすか
			// dyはどれだけ下に動かすか
			value: function canMove(dx, dy) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.tiles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var tile = _step3.value;

						var x = tile.posX + dx;
						var y = tile.posY + dy;
						if (x < COL_NUM && x >= 0 && y < ROW_NUM) {
							var value = root_vm.board_vm.getSquareValue(x, y);
							if (value == FREEZED) {
								return false;
							}
						} else {
							return false;
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return true;
			}
		}, {
			key: "move",

			// ブロックを動かす
			// dxはどれだけ右に動かすか
			// dyはどれだけ下に動かすか
			value: function move(dx, dy) {
				this.posX += dx;
				this.posY += dy;
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.tiles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var tile = _step4.value;

						tile.posX += dx;
						tile.posY += dy;
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}
		}, {
			key: "freeze",

			// ブロックを固定化する
			// 実際にはブロックのタイルをボードに書き込む
			value: function freeze() {
				this.drawBoard(FREEZED);
			}
		}, {
			key: "erase",

			// ブロックを消す
			value: function erase() {
				this.drawBoard(EMPTY);
			}
		}, {
			key: "draw",

			// ブロックをボードに描画する
			value: function draw() {
				this.drawBoard(ACTIVED);
			}
		}, {
			key: "drawBoard",
			value: function drawBoard(square_status) {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = this.tiles[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var t = _step5.value;

						root_vm.board_vm.squares[t.posY][t.posX].value(square_status);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			}
		}, {
			key: "checkGameOver",
			value: function checkGameOver() {
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = this.tiles[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var t = _step6.value;

						if (root_vm.board_vm.squares[t.posY][t.posX].value() == FREEZED) {
							root_vm.game_vm.gameOver();
							break;
						}
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}
			}
		}]);

		return Block;
	})();

	// *
	// *
	// *
	// *

	var IBlock = (function (_Block) {
		function IBlock(x, y) {
			_classCallCheck(this, IBlock);

			_get(Object.getPrototypeOf(IBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(1, 0);
			this.addTile(1, 1);
			this.addTile(1, 2);
			this.addTile(1, 3);
			this.checkGameOver();
			this.draw();
		}

		_inherits(IBlock, _Block);

		return IBlock;
	})(Block);

	// *
	// *
	// * *

	var LBlock = (function (_Block2) {
		function LBlock(x, y) {
			_classCallCheck(this, LBlock);

			_get(Object.getPrototypeOf(LBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(1, 0);
			this.addTile(1, 1);
			this.addTile(1, 2);
			this.addTile(2, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(LBlock, _Block2);

		return LBlock;
	})(Block);

	//   *
	//   *
	// * *

	var JBlock = (function (_Block3) {
		function JBlock(x, y) {
			_classCallCheck(this, JBlock);

			_get(Object.getPrototypeOf(JBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(2, 0);
			this.addTile(2, 1);
			this.addTile(2, 2);
			this.addTile(1, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(JBlock, _Block3);

		return JBlock;
	})(Block);

	// *
	// * *
	// *

	var TBlock = (function (_Block4) {
		function TBlock(x, y) {
			_classCallCheck(this, TBlock);

			_get(Object.getPrototypeOf(TBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(2, 0);
			this.addTile(2, 1);
			this.addTile(2, 2);
			this.addTile(1, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(TBlock, _Block4);

		return TBlock;
	})(Block);

	// * *
	// * *

	var OBlock = (function (_Block5) {
		function OBlock(x, y) {
			_classCallCheck(this, OBlock);

			_get(Object.getPrototypeOf(OBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(1, 1);
			this.addTile(1, 2);
			this.addTile(2, 1);
			this.addTile(2, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(OBlock, _Block5);

		return OBlock;
	})(Block);

	// * *
	//   * *

	var ZBlock = (function (_Block6) {
		function ZBlock(x, y) {
			_classCallCheck(this, ZBlock);

			_get(Object.getPrototypeOf(ZBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(2, 0);
			this.addTile(2, 1);
			this.addTile(1, 1);
			this.addTile(1, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(ZBlock, _Block6);

		return ZBlock;
	})(Block);

	//   * *
	// * *

	var SBlock = (function (_Block7) {
		function SBlock(x, y) {
			_classCallCheck(this, SBlock);

			_get(Object.getPrototypeOf(SBlock.prototype), "constructor", this).call(this, x, y);
			this.addTile(1, 0);
			this.addTile(1, 1);
			this.addTile(2, 1);
			this.addTile(2, 2);
			this.checkGameOver();
			this.draw();
		}

		_inherits(SBlock, _Block7);

		return SBlock;
	})(Block);

	// 盤面の一つ一つのマス

	var Square = function Square(value) {
		var _this3 = this;

		_classCallCheck(this, Square);

		this.value = ko.observable(value);
		this.text = ko.computed(function () {
			switch (_this3.value()) {
				case EMPTY:
					return "";
				case ACTIVED:
					return "actived";
				case FREEZED:
					return "freezed";
			}
		});
	};

	// 盤面

	var BoardViewModel = (function () {
		function BoardViewModel() {
			_classCallCheck(this, BoardViewModel);

			var x;
			var y;
			this.squares = [];
			for (y = 0; y < ROW_NUM; y++) {
				this.squares[y] = [];
				for (x = 0; x < COL_NUM; x++) {
					this.squares[y][x] = new Square(0);
				}
			}
		}

		_createClass(BoardViewModel, [{
			key: "reset",
			value: function reset() {
				var x;
				var y;
				for (y = 0; y < ROW_NUM; y++) {
					for (x = 0; x < COL_NUM; x++) {
						this.squares[y][x].value(EMPTY);
					}
				}
			}
		}, {
			key: "getSquareValue",
			value: function getSquareValue(x, y) {
				return this.squares[y][x].value();
			}
		}, {
			key: "checkLine",
			value: function checkLine() {
				var y = ROW_NUM - 1;
				var x = 0;
				var cleared_line_num = 0;
				while (y >= 0) {
					var flag = true;
					for (x = 0; x < COL_NUM; x++) {
						if (this.squares[y][x].value() != FREEZED) {
							flag = false;
							break;
						}
					}
					if (flag == true) {
						this.clearLine(y);
						cleared_line_num++;
					} else {
						y--;
					}
				}
				root_vm.score_vm.addCleardline(cleared_line_num);
			}
		}, {
			key: "clearLine",
			value: function clearLine(y) {
				// 段をずらして行く
				for (var cy = y; cy > 0; cy--) {
					for (var cx = 0; cx < COL_NUM; cx++) {
						this.squares[cy][cx].value(this.squares[cy - 1][cx].value());
					}
				}
				// ROW_NUM段目に空のsquareを追加する。
				for (var x = 0; x < COL_NUM; x++) {
					this.squares[0][x].value(EMPTY);
				}
			}
		}]);

		return BoardViewModel;
	})();

	var ScoreViewModel = (function () {
		function ScoreViewModel() {
			_classCallCheck(this, ScoreViewModel);

			this.line = ko.observable();
			this.score = ko.observable();
			this.speed = ko.observable();
			this.level = ko.observable();
			this.tweet = function () {
				var message = "ラインを" + this.line() + "本消して、スコアを" + this.score() + "点獲得したよ" + " / " + document.title + " - " + location.href;
				var f = "http://twitter.com/?status=" + encodeURIComponent(message);
				if (!window.open(f, "surfing")) {
					location.href = f;void 0;
				}
			};
			this.reset();
		}

		_createClass(ScoreViewModel, [{
			key: "reset",
			value: function reset() {
				this.line(0);
				this.score(0);
				this.speed(SPEED_LIST[0]);
				this.level(1);
			}
		}, {
			key: "addCleardline",
			value: function addCleardline(num) {
				this.line(this.line() + num);
				var bonus = 0;
				switch (num) {
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
				if (this.line() > this.level() * 10) {
					this.level(this.level() + 1);
					this.speed(SPEED_LIST[this.level()]);
					root_vm.game_vm.stage.changeSpeed(this.speed());
				}
			}
		}]);

		return ScoreViewModel;
	})();

	root_vm.score_vm = new ScoreViewModel();
	root_vm.board_vm = new BoardViewModel();
	root_vm.game_vm = new GameViewModel();
	ko.applyBindings(root_vm);
});