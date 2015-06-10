"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	// すべてのビューモデルを格納するビューモデル
	var root_vm = {};
	// テトリスの盤面のマスの数
	var ROW_NUM = 20;
	var COL_NUM = 10;
	// ゲームの状態を示す定数
	var START = 1;
	var PLAYING = 2;
	var PAUSE = 3;

	function dd(message) {
		console.log(message);
	}

	var GameViewModel = (function () {
		function GameViewModel() {
			_classCallCheck(this, GameViewModel);

			this.mode = ko.observable(START);
			this.attach_events();
			this.stage = new Stage();
		}

		_createClass(GameViewModel, [{
			key: "attach_events",
			value: function attach_events() {
				$("html").keydown(function (e) {
					if (root_vm["game_vm"].mode() == PLAYING) {
						switch (e.which) {
							case 39:
								// right
								dd("right");
								break;
							case 37:
								// left
								dd("left");
								break;
							case 38:
								// up
								dd("up");
								break;
							case 40:
								// down
								dd("down");
								break;
						}
					}
				});
			}
		}, {
			key: "start",
			value: function start() {
				// thisがroot_vmになってしまうため
				// this.method()ではなくroot_vm['game_vm'].method()としている
				root_vm["game_vm"].mode(PLAYING);
				root_vm["game_vm"].stage.start();
			}
		}, {
			key: "reset",
			value: function reset() {
				root_vm["game_vm"].mode(START);
				root_vm["game_vm"].stage.pause();
			}
		}, {
			key: "pause",
			value: function pause() {
				root_vm["game_vm"].mode(PAUSE);
				root_vm["game_vm"].stage.pause();
			}
		}]);

		return GameViewModel;
	})();

	var Stage = (function () {
		function Stage() {
			_classCallCheck(this, Stage);

			this.intervalId = 0;
		}

		_createClass(Stage, [{
			key: "start",
			value: function start() {
				this.intervalId = setInterval(this.frame, 2000);
			}
		}, {
			key: "pause",
			value: function pause() {
				clearInterval(this.intervalId);
			}
		}, {
			key: "frame",
			value: function frame() {
				console.log("frame");
			}
		}]);

		return Stage;
	})();

	var Square = function Square(value) {
		var _this = this;

		_classCallCheck(this, Square);

		this.value = ko.observable(value);
		this.text = ko.computed(function () {
			switch (_this.value()) {
				case 0:
					return "";
				case 1:
					return "actived";
				case 2:
					return "freezed";
			}
		});
	};

	var TileViewModel = function TileViewModel() {
		_classCallCheck(this, TileViewModel);

		var i;
		var j;
		this.square = [];
		for (i = 0; i < ROW_NUM; i++) {
			this.square[i] = [];
			for (j = 0; j < COL_NUM; j++) {
				this.square[i][j] = new Square(0);
			}
		}
	};

	root_vm["game_vm"] = new GameViewModel();
	root_vm["tile_vm"] = new TileViewModel();
	ko.applyBindings(root_vm);
});