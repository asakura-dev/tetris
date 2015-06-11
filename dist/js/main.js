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
					if (root_vm["game_vm"].scene() == PLAYING) {
						switch (e.which) {
							case 39:
								// right
								dd("right");
								if (root_vm["game_vm"].scene() == PLAYING) {
									root_vm["game_vm"].stage.current_block.right();
								}
								break;
							case 37:
								// left
								dd("left");
								if (root_vm["game_vm"].scene() == PLAYING) {
									root_vm["game_vm"].stage.current_block.left();
								}
								break;
							case 38:
								// up
								dd("up");
								break;
							case 40:
								// down
								if (root_vm["game_vm"].scene() == PLAYING) {
									if (root_vm["game_vm"].stage.current_block.down() == false) {
										root_vm["game_vm"].stage.nextBlock();
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
				// this.method()ではなくroot_vm['game_vm'].method()としている
				root_vm["game_vm"].scene(PLAYING);
				root_vm["game_vm"].stage.start();
			}
		}, {
			key: "gameOver",
			value: function gameOver() {
				root_vm["game_vm"].scene(GAMEOVER);
				root_vm["game_vm"].stage.pause();
				console.log("gameover");
			}
		}, {
			key: "reset",

			// スタートに戻る
			value: function reset() {
				root_vm["game_vm"].scene(START);
				root_vm["game_vm"].stage.pause();
			}
		}, {
			key: "pause",

			// ゲームを一旦停止する
			value: function pause() {
				root_vm["game_vm"].scene(PAUSE);
				root_vm["game_vm"].stage.pause();
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
			this.addBlock();
			this.current_block.draw();
		}

		_createClass(Stage, [{
			key: "start",

			// ゲームを開始する
			// 2秒ごとにframeメソッドを呼び出す
			value: function start() {
				var _this = this;

				this.intervalId = setInterval(function () {
					_this.frame();
				}, 2000);
			}
		}, {
			key: "pause",

			// ゲームを一旦停止
			value: function pause() {
				clearInterval(this.intervalId);
			}
		}, {
			key: "addBlock",

			// ステージに新しいブロックを追加
			value: function addBlock() {
				// とりあえず、IBlockだけ追加する
				// ランダムに追加されるようにする
				this.current_block = new IBlock((COL_NUM - 2) / 2, 0);
			}
		}, {
			key: "nextBlock",

			// 現在のブロックを固定して、新しいブロックをステージに追加
			value: function nextBlock() {
				this.current_block.freeze();
				root_vm["board_vm"].checkLine();
				this.addBlock();
			}
		}, {
			key: "frame",

			// 2秒ごとにブロックを下に落とそうとする。
			value: function frame() {
				console.log("frame");
				if (this.current_block.down() == false) {
					this.nextBlock();
				} else {
					dd("down");
				}
			}
		}]);

		return Stage;
	})();

	// ブロックを構成するタイル
	// 絶対座標を持つ

	var Tile = function Tile(x, y) {
		_classCallCheck(this, Tile);

		this.posX = x;
		this.posY = y;
	};

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
				this.tiles.push(new Tile(this.posX + dx, this.posY + dy));
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
			key: "rotate",

			// ブロックを右に90度回転させる
			// 失敗した時falseを返す
			value: function rotate() {}
		}, {
			key: "canMove",

			// 移動することができるかを真偽値で返す
			// dxはどれだけ右に動かすか
			// dyはどれだけ下に動かすか
			value: function canMove(dx, dy) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.tiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var tile = _step.value;

						if (tile.posX + dx < COL_NUM && tile.posX + dx >= 0 && tile.posY + dy < ROW_NUM) {
							var value = root_vm["board_vm"].getSquareValue(tile.posX + dx, tile.posY + dy);
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
			key: "move",

			// ブロックを動かす
			// dxはどれだけ右に動かすか
			// dyはどれだけ下に動かすか
			value: function move(dx, dy) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.tiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var tile = _step2.value;

						tile.posX += dx;
						tile.posY += dy;
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
			}
		}, {
			key: "freeze",

			// ブロックを固定化する
			// 実際にはブロックのタイルをボードに書き込む
			value: function freeze() {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.tiles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var t = _step3.value;

						root_vm["board_vm"].squares[t.posY][t.posX].value(FREEZED);
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
			}
		}, {
			key: "erase",

			// ブロックを消す
			value: function erase() {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.tiles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var t = _step4.value;

						root_vm["board_vm"].squares[t.posY][t.posX].value(EMPTY);
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
			key: "draw",

			// ブロックをボードに描画する
			value: function draw() {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = this.tiles[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var t = _step5.value;

						root_vm["board_vm"].squares[t.posY][t.posX].value(ACTIVED);
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

						if (root_vm["board_vm"].squares[t.posY][t.posX].value() == FREEZED) {
							root_vm["game_vm"].gameOver();
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
		function LBlock() {
			_classCallCheck(this, LBlock);

			_get(Object.getPrototypeOf(LBlock.prototype), "constructor", this).call(this);
		}

		_inherits(LBlock, _Block2);

		return LBlock;
	})(Block);

	//   *
	//   *
	// * *

	var JBlock = (function (_Block3) {
		function JBlock() {
			_classCallCheck(this, JBlock);

			_get(Object.getPrototypeOf(JBlock.prototype), "constructor", this).call(this);
		}

		_inherits(JBlock, _Block3);

		return JBlock;
	})(Block);

	// *
	// * *
	// *

	var TBlock = (function (_Block4) {
		function TBlock() {
			_classCallCheck(this, TBlock);

			_get(Object.getPrototypeOf(TBlock.prototype), "constructor", this).call(this);
		}

		_inherits(TBlock, _Block4);

		return TBlock;
	})(Block);

	// * *
	// * *

	var OBlock = (function (_Block5) {
		function OBlock() {
			_classCallCheck(this, OBlock);

			_get(Object.getPrototypeOf(OBlock.prototype), "constructor", this).call(this);
		}

		_inherits(OBlock, _Block5);

		return OBlock;
	})(Block);

	// * *
	//   * *

	var ZBlock = (function (_Block6) {
		function ZBlock() {
			_classCallCheck(this, ZBlock);

			_get(Object.getPrototypeOf(ZBlock.prototype), "constructor", this).call(this);
		}

		_inherits(ZBlock, _Block6);

		return ZBlock;
	})(Block);

	//   * *
	// * *

	var SBlock = (function (_Block7) {
		function SBlock() {
			_classCallCheck(this, SBlock);

			_get(Object.getPrototypeOf(SBlock.prototype), "constructor", this).call(this);
		}

		_inherits(SBlock, _Block7);

		return SBlock;
	})(Block);

	var Square = function Square(value) {
		var _this2 = this;

		_classCallCheck(this, Square);

		this.value = ko.observable(value);
		this.text = ko.computed(function () {
			switch (_this2.value()) {
				case EMPTY:
					return "";
				case ACTIVED:
					return "actived";
				case FREEZED:
					return "freezed";
			}
		});
	};

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
			key: "getSquareValue",
			value: function getSquareValue(x, y) {
				return this.squares[y][x].value();
			}
		}, {
			key: "checkLine",
			value: function checkLine() {
				var y = ROW_NUM - 1;
				var x = 0;
				while (y >= 0) {
					var flag = true;
					for (x = 0; x < COL_NUM; x++) {
						if (this.squares[y][x].value() != FREEZED) {
							flag = false;
							break;
						}
					}
					if (flag == true) {
						dd("clear");
						this.clearLine(y);
					} else {
						y--;
					}
				}
			}
		}, {
			key: "clearLine",
			value: function clearLine(y) {
				// 段をずらして行く
				for (var i = y; i > 0; i--) {
					this.squares[i] = this.squares[i - 1];
				}
				// ROW_NUM段目に空のsquareを追加する。
				for (var x = 0; x < COL_NUM; x++) {
					this.squares[0][x] = new Square(0);
				}
			}
		}]);

		return BoardViewModel;
	})();

	root_vm["board_vm"] = new BoardViewModel();
	root_vm["game_vm"] = new GameViewModel();
	ko.applyBindings(root_vm);
});