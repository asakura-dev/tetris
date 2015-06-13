(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":9}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":10}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":11}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":12}],5:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],6:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],7:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":4}],8:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":2}],9:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
require('../modules/core.iter-helpers');
module.exports = require('../modules/$').core.getIterator;
},{"../modules/$":20,"../modules/core.iter-helpers":27,"../modules/es6.string.iterator":30,"../modules/web.dom.iterable":31}],10:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":20}],11:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":20}],12:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":20,"../../modules/es6.object.statics-accept-primitives":29}],13:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":20}],14:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":20,"./$.wks":26}],15:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$":20}],16:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],17:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var $ = require('./$')
  , toString = {}.toString
  , getNames = $.getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

function getWindowNames(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
}

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames($.toObject(it));
};
},{"./$":20}],18:[function(require,module,exports){
var $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , $               = require('./$')
  , cof             = require('./$.cof')
  , $iter           = require('./$.iter')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values'
  , Iterators       = $iter.Iterators;
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  $iter.create(Constructor, NAME, next);
  function createMethod(kind){
    function $$(that){
      return new Constructor(that, kind);
    }
    switch(kind){
      case KEYS: return function keys(){ return $$(this); };
      case VALUES: return function values(){ return $$(this); };
    } return function entries(){ return $$(this); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = $.getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    cof.set(IteratorPrototype, TAG, true);
    // FF fix
    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
  }
  // Define iterator
  if($.FW || FORCE)$iter.set(proto, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = $.that;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
  }
};
},{"./$":20,"./$.cof":14,"./$.def":15,"./$.iter":19,"./$.redef":21,"./$.wks":26}],19:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , cof               = require('./$.cof')
  , classof           = cof.classof
  , assert            = require('./$.assert')
  , assertObject      = assert.obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = require('./$.shared')('iterators')
  , IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}

module.exports = {
  // Safari has buggy iterators w/o `next`
  BUGGY: 'keys' in [] && !('next' in [].keys()),
  Iterators: Iterators,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol;
    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
      || SYMBOL_ITERATOR in O
      || $.has(Iterators, classof(O));
  },
  get: function(it){
    var Symbol = $.g.Symbol
      , getIter;
    if(it != undefined){
      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
        || it[SYMBOL_ITERATOR]
        || Iterators[classof(it)];
    }
    assert($.isFunction(getIter), it, ' is not iterable!');
    return assertObject(getIter.call(it));
  },
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  }
};
},{"./$":20,"./$.assert":13,"./$.cof":14,"./$.shared":22,"./$.wks":26}],20:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":16}],21:[function(require,module,exports){
module.exports = require('./$').hide;
},{"./$":20}],22:[function(require,module,exports){
var $      = require('./$')
  , SHARED = '__core-js_shared__'
  , store  = $.g[SHARED] || $.hide($.g, SHARED, {})[SHARED];
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$":20}],23:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String($.assertDefined(that))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":20}],24:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":20}],25:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],26:[function(require,module,exports){
var global = require('./$').g
  , store  = require('./$.shared')('wks');
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":20,"./$.shared":22,"./$.uid":24}],27:[function(require,module,exports){
var core  = require('./$').core
  , $iter = require('./$.iter');
core.isIterable  = $iter.is;
core.getIterator = $iter.get;
},{"./$":20,"./$.iter":19}],28:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":20,"./$.iter":19,"./$.iter-define":18,"./$.uid":24,"./$.unscope":25}],29:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : require('./$.get-names').get;
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":20,"./$.def":15,"./$.get-names":17}],30:[function(require,module,exports){
var set   = require('./$').set
  , $at   = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = $at(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":20,"./$.iter":19,"./$.iter-define":18,"./$.string-at":23,"./$.uid":24}],31:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NL          = $.g.NodeList
  , HTC         = $.g.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype;
if($.FW){
  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
}
Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;
},{"./$":20,"./$.iter":19,"./$.wks":26,"./es6.array.iterator":28}],32:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

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
					for (var _iterator = _getIterator(this.tiles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
						for (var _iterator2 = _getIterator(this.tiles), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
					for (var _iterator3 = _getIterator(this.tiles), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
					for (var _iterator4 = _getIterator(this.tiles), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
					for (var _iterator5 = _getIterator(this.tiles), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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
					for (var _iterator6 = _getIterator(this.tiles), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
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
			this.addTile(1, 0);
			this.addTile(0, 1);
			this.addTile(1, 1);
			this.addTile(2, 1);
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

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":7,"babel-runtime/helpers/inherits":8}]},{},[32])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXRlci1oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiL1VzZXJzL2FzYWt1cmEvUHJvZ3JhbS9XZWIvdGV0cmlzL25vZGVfdGVtcGxhdGUvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBLENBQUMsQ0FBQyxZQUFV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QyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixPQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDWjs7WUFUSSxNQUFNOztTQUFOLE1BQU07SUFBUyxLQUFLOzs7OztLQWFwQixNQUFNO0FBQ0EsV0FETixNQUFNLENBQ0MsQ0FBQyxFQUFDLENBQUMsRUFBQzt5QkFEWCxNQUFNOztBQUVWLDhCQUZJLE1BQU0sNkNBRUosQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUNYLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixPQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDWjs7WUFUSSxNQUFNOztTQUFOLE1BQU07SUFBUyxLQUFLOzs7OztLQWFwQixNQUFNO0FBQ0EsV0FETixNQUFNLENBQ0MsQ0FBQyxFQUFDLENBQUMsRUFBQzt5QkFEWCxNQUFNOztBQUVWLDhCQUZJLE1BQU0sNkNBRUosQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUNYLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xC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Q0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUN0QyxHQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzFCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBvYmplY3QgPSBfeCxcbiAgICAgICAgcHJvcGVydHkgPSBfeDIsXG4gICAgICAgIHJlY2VpdmVyID0gX3gzO1xuICAgIGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG5cbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfeCA9IHBhcmVudDtcbiAgICAgICAgX3gyID0gcHJvcGVydHk7XG4gICAgICAgIF94MyA9IHJlY2VpdmVyO1xuICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pdGVyLWhlbHBlcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kJykuY29yZS5nZXRJdGVyYXRvcjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cxLCBtc2cyKXtcbiAgaWYoIWNvbmRpdGlvbil0aHJvdyBUeXBlRXJyb3IobXNnMiA/IG1zZzEgKyBtc2cyIDogbXNnMSk7XG59XG5hc3NlcnQuZGVmID0gJC5hc3NlcnREZWZpbmVkO1xuYXNzZXJ0LmZuID0gZnVuY3Rpb24oaXQpe1xuICBpZighJC5pc0Z1bmN0aW9uKGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuYXNzZXJ0Lm9iaiA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoISQuaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbmFzc2VydC5pbnN0ID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcbiAgcmV0dXJuIGl0O1xufTtcbm1vZHVsZS5leHBvcnRzID0gYXNzZXJ0OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgVEFHICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuZnVuY3Rpb24gY29mKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn1cbmNvZi5jbGFzc29mID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVDtcbiAgcmV0dXJuIGl0ID09IHVuZGVmaW5lZCA/IGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6ICdOdWxsJ1xuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFQgOiBjb2YoTyk7XG59O1xuY29mLnNldCA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhJC5oYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpJC5oaWRlKGl0LCBUQUcsIHRhZyk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBjb2Y7IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgPSAkLmdcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pLnByb3RvdHlwZVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHAucHJvdG90eXBlID0gQy5wcm90b3R5cGU7XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0cy5wcm90b3R5cGUgfHwgKGV4cG9ydHMucHJvdG90eXBlID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkKXtcbiAgJC5GVyAgID0gZmFsc2U7XG4gICQucGF0aCA9ICQuY29yZTtcbiAgcmV0dXJuICQ7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZ1xyXG4gICwgZ2V0TmFtZXMgPSAkLmdldE5hbWVzO1xyXG5cclxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93TmFtZXMoaXQpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XHJcbiAgcmV0dXJuIGdldE5hbWVzKCQudG9PYmplY3QoaXQpKTtcclxufTsiLCJ2YXIgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlZGVmICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmJylcbiAgLCAkICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNvZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsICRpdGVyICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcbiAgLCBTWU1CT0xfSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICAgPSAndmFsdWVzJ1xuICAsIEl0ZXJhdG9ycyAgICAgICA9ICRpdGVyLkl0ZXJhdG9ycztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0Upe1xuICAkaXRlci5jcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICBmdW5jdGlvbiBjcmVhdGVNZXRob2Qoa2luZCl7XG4gICAgZnVuY3Rpb24gJCQodGhhdCl7XG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoYXQsIGtpbmQpO1xuICAgIH1cbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgfVxuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIHByb3RvICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGNyZWF0ZU1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKF9uYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9ICQuZ2V0UHJvdG8oX2RlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBjb2Yuc2V0KEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCQuRlcgJiYgJC5oYXMocHJvdG8sIEZGX0lURVJBVE9SKSkkaXRlci5zZXQoSXRlcmF0b3JQcm90b3R5cGUsICQudGhhdCk7XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCQuRlcgfHwgRk9SQ0UpJGl0ZXIuc2V0KHByb3RvLCBfZGVmYXVsdCk7XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gX2RlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9ICQudGhhdDtcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoS0VZUyksXG4gICAgICB2YWx1ZXM6ICBERUZBVUxUID09IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKFZBTFVFUyksXG4gICAgICBlbnRyaWVzOiBERUZBVUxUICE9IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpJHJlZGVmKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogJGl0ZXIuQlVHR1ksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY29mICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBjbGFzc29mICAgICAgICAgICA9IGNvZi5jbGFzc29mXG4gICwgYXNzZXJ0ICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcbiAgLCBhc3NlcnRPYmplY3QgICAgICA9IGFzc2VydC5vYmpcbiAgLCBTWU1CT0xfSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEZGX0lURVJBVE9SICAgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgSXRlcmF0b3JzICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ2l0ZXJhdG9ycycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5zZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSwgJC50aGF0KTtcbmZ1bmN0aW9uIHNldEl0ZXJhdG9yKE8sIHZhbHVlKXtcbiAgJC5oaWRlKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xuICAvLyBBZGQgaXRlcmF0b3IgZm9yIEZGIGl0ZXJhdG9yIHByb3RvY29sXG4gIGlmKEZGX0lURVJBVE9SIGluIFtdKSQuaGlkZShPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBCVUdHWTogJ2tleXMnIGluIFtdICYmICEoJ25leHQnIGluIFtdLmtleXMoKSksXG4gIEl0ZXJhdG9yczogSXRlcmF0b3JzLFxuICBzdGVwOiBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG4gIH0sXG4gIGlzOiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IE9iamVjdChpdClcbiAgICAgICwgU3ltYm9sID0gJC5nLlN5bWJvbDtcbiAgICByZXR1cm4gKFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgRkZfSVRFUkFUT1IpIGluIE9cbiAgICAgIHx8IFNZTUJPTF9JVEVSQVRPUiBpbiBPXG4gICAgICB8fCAkLmhhcyhJdGVyYXRvcnMsIGNsYXNzb2YoTykpO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgU3ltYm9sID0gJC5nLlN5bWJvbFxuICAgICAgLCBnZXRJdGVyO1xuICAgIGlmKGl0ICE9IHVuZGVmaW5lZCl7XG4gICAgICBnZXRJdGVyID0gaXRbU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUl1cbiAgICAgICAgfHwgaXRbU1lNQk9MX0lURVJBVE9SXVxuICAgICAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xuICAgIH1cbiAgICBhc3NlcnQoJC5pc0Z1bmN0aW9uKGdldEl0ZXIpLCBpdCwgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gICAgcmV0dXJuIGFzc2VydE9iamVjdChnZXRJdGVyLmNhbGwoaXQpKTtcbiAgfSxcbiAgc2V0OiBzZXRJdGVyYXRvcixcbiAgY3JlYXRlOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgcHJvdG8pe1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKHByb3RvIHx8IEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogJC5kZXNjKDEsIG5leHQpfSk7XG4gICAgY29mLnNldChDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAsIGNvcmUgICA9IHt9XG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcbiAgLCBtYXggICA9IE1hdGgubWF4XG4gICwgbWluICAgPSBNYXRoLm1pbjtcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG52YXIgaGlkZSA9IGNyZWF0ZURlZmluZXIoMSk7XG4vLyA3LjEuNCBUb0ludGVnZXJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufVxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59XG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICAgIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGRlc2MoYml0bWFwLCB2YWx1ZSkpO1xuICB9IDogc2ltcGxlU2V0O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufVxuXG52YXIgJCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZ3Jykoe1xuICBnOiBnbG9iYWwsXG4gIGNvcmU6IGNvcmUsXG4gIGh0bWw6IGdsb2JhbC5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcbiAgaXNPYmplY3Q6ICAgaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIHRoYXQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIDcuMS40IFRvSW50ZWdlclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcbiAgLy8gNy4xLjE1IFRvTGVuZ3RoXG4gIHRvTGVuZ3RoOiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfSxcbiAgdG9JbmRleDogZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICB9LFxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIERFU0M6ICAgICAgIERFU0MsXG4gIGRlc2M6ICAgICAgIGRlc2MsXG4gIGdldERlc2M6ICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgIGRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBhc3NlcnREZWZpbmVkOiBhc3NlcnREZWZpbmVkLFxuICAvLyBEdW1teSwgZml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nIGluIGVzNSBtb2R1bGVcbiAgRVM1T2JqZWN0OiBPYmplY3QsXG4gIHRvT2JqZWN0OiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuICQuRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKTtcbiAgfSxcbiAgaGlkZTogaGlkZSxcbiAgZGVmOiBjcmVhdGVEZWZpbmVyKDApLFxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxuICBlYWNoOiBbXS5mb3JFYWNoXG59KTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XG5pZih0eXBlb2YgX19nICE9ICd1bmRlZmluZWQnKV9fZyA9IGdsb2JhbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJCcpLmhpZGU7IiwidmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xyXG4gICwgc3RvcmUgID0gJC5nW1NIQVJFRF0gfHwgJC5oaWRlKCQuZywgU0hBUkVELCB7fSlbU0hBUkVEXTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xyXG59OyIsIi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSAkLnRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsXG4gICAgICB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBzaWQgPSAwO1xuZnVuY3Rpb24gdWlkKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK3NpZCArIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KSk7XG59XG51aWQuc2FmZSA9IHJlcXVpcmUoJy4vJCcpLmcuU3ltYm9sIHx8IHVpZDtcbm1vZHVsZS5leHBvcnRzID0gdWlkOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kJykuZ1xuICAsIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBnbG9iYWwuU3ltYm9sICYmIGdsb2JhbC5TeW1ib2xbbmFtZV0gfHwgcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTsiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLyQnKS5jb3JlXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpO1xuY29yZS5pc0l0ZXJhYmxlICA9ICRpdGVyLmlzO1xuY29yZS5nZXRJdGVyYXRvciA9ICRpdGVyLmdldDsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgc2V0VW5zY29wZSA9IHJlcXVpcmUoJy4vJC51bnNjb3BlJylcbiAgLCBJVEVSICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxuICAsICRpdGVyICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpXG4gICwgc3RlcCAgICAgICA9ICRpdGVyLnN0ZXBcbiAgLCBJdGVyYXRvcnMgID0gJGl0ZXIuSXRlcmF0b3JzO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAkLnNldCh0aGlzLCBJVEVSLCB7bzogJC50b09iamVjdChpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxuICAgICwgTyAgICAgPSBpdGVyLm9cbiAgICAsIGtpbmQgID0gaXRlci5rXG4gICAgLCBpbmRleCA9IGl0ZXIuaSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgaXRlci5vID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5zZXRVbnNjb3BlKCdrZXlzJyk7XG5zZXRVbnNjb3BlKCd2YWx1ZXMnKTtcbnNldFVuc2NvcGUoJ2VudHJpZXMnKTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0O1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9ICgkLmNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBmb3JjZWQgPSAwXG4gICAgLCBtZXRob2QgPSB7fTtcbiAgbWV0aG9kW0tFWV0gPSBJRCA9PSAwID8gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAxID8gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMiA/IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAzID8gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNCA/IGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDUgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcbiAgfSA6IElEID09IDYgPyBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcbiAgfSA6IElEID09IDcgPyBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XG4gIH0gOiBJRCA9PSA4ID8gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XG4gIH0gOiByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJykuZ2V0O1xuICB0cnkge1xuICAgIGZuKCd6Jyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgZm9yY2VkID0gMTtcbiAgfVxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGZvcmNlZCwgJ09iamVjdCcsIG1ldGhvZCk7XG59KTsiLCJ2YXIgc2V0ICAgPSByZXF1aXJlKCcuLyQnKS5zZXRcbiAgLCAkYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKVxuICAsIElURVIgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxuICAsICRpdGVyID0gcmVxdWlyZSgnLi8kLml0ZXInKVxuICAsIHN0ZXAgID0gJGl0ZXIuc3RlcDtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICBzZXQodGhpcywgSVRFUiwge286IFN0cmluZyhpdGVyYXRlZCksIGk6IDB9KTtcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cbiAgICAsIE8gICAgID0gaXRlci5vXG4gICAgLCBpbmRleCA9IGl0ZXIuaVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiBzdGVwKDEpO1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIGl0ZXIuaSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiBzdGVwKDAsIHBvaW50KTtcbn0pOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIEl0ZXJhdG9ycyAgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5JdGVyYXRvcnNcbiAgLCBJVEVSQVRPUiAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5XG4gICwgTkwgICAgICAgICAgPSAkLmcuTm9kZUxpc3RcbiAgLCBIVEMgICAgICAgICA9ICQuZy5IVE1MQ29sbGVjdGlvblxuICAsIE5MUHJvdG8gICAgID0gTkwgJiYgTkwucHJvdG90eXBlXG4gICwgSFRDUHJvdG8gICAgPSBIVEMgJiYgSFRDLnByb3RvdHlwZTtcbmlmKCQuRlcpe1xuICBpZihOTCAmJiAhKElURVJBVE9SIGluIE5MUHJvdG8pKSQuaGlkZShOTFByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICBpZihIVEMgJiYgIShJVEVSQVRPUiBpbiBIVENQcm90bykpJC5oaWRlKEhUQ1Byb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xufVxuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gQXJyYXlWYWx1ZXM7IiwiJChmdW5jdGlvbigpe1xuXHRcblx0Ly8g44GZ44G544Gm44Gu44OT44Ol44O844Oi44OH44Or44KS5qC857SN44GZ44KL44OT44Ol44O844Oi44OH44OrXG5cdHZhciByb290X3ZtID0ge307XG5cdC8vIOODhuODiOODquOCueOBruebpOmdouOBruODnuOCueOBruaVsFxuXHRjb25zdCBST1dfTlVNID0gMjA7XG5cdGNvbnN0IENPTF9OVU0gPSAxMDtcblx0Ly8g44Ky44O844Og44Gu5aC06Z2iKOeKtuaFiynjgpLnpLrjgZnlrprmlbBcblx0Y29uc3QgU1RBUlQgPSAxO1xuXHRjb25zdCBQTEFZSU5HID0gMjtcblx0Y29uc3QgUEFVU0UgPSAzO1xuXHRjb25zdCBHQU1FT1ZFUiA9IDQ7XG5cdC8vIOODnuOCueOBrueKtuaFi+OCkuekuuOBmeWumuaVsFxuXHRjb25zdCBFTVBUWSA9IDA7XG5cdGNvbnN0IEFDVElWRUQgPSAxO1xuXHRjb25zdCBGUkVFWkVEID0gMjtcblx0Ly8g6JC95LiL6YCf5bqmKG1zKVxuXHRjb25zdCBTUEVFRF9MSVNUID0gWzEwMDAsNTAwLDQwMCwzMDAsMjAwLDEwMF07XG5cdC8vIOODh+ODkOODg+OCsOeUqFxuXHRmdW5jdGlvbiBkZChtZXNzYWdlKXtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXHQvLyDjgrLjg7zjg6DlhajkvZPjgpLnrqHnkIbjgZnjgotcblx0Y2xhc3MgR2FtZVZpZXdNb2RlbHtcblx0XHRjb25zdHJ1Y3Rvcigpe1xuXHRcdFx0dGhpcy5zY2VuZSA9IGtvLm9ic2VydmFibGUoU1RBUlQpO1xuXHRcdFx0dGhpcy5hdHRhY2hfZXZlbnRzKCk7XG5cdFx0XHR0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XG5cdFx0fVxuXHRcdC8vIOOCreODvOWFpeWKm+OCkuWPl+OBkeS7mOOBkeOCi+OCiOOBhuOBq+OBmeOCi1xuXHRcdGF0dGFjaF9ldmVudHMoKXtcblx0XHRcdCQoJ2h0bWwnKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc2NlbmUoKSA9PSBQTEFZSU5HKXtcblx0XHRcdFx0XHRzd2l0Y2goZS53aGljaCl7XG5cdFx0XHRcdFx0Y2FzZSAzOTogLy8gcmlnaHRcblx0XHRcdFx0XHRcdGRkKFwicmlnaHRcIik7XG5cdFx0XHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc2NlbmUoKSA9PSBQTEFZSU5HKXtcblx0XHRcdFx0XHRcdFx0cm9vdF92bS5nYW1lX3ZtLnN0YWdlLmN1cnJlbnRfYmxvY2sucmlnaHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcblx0XHRcdFx0XHRcdGRkKFwibGVmdFwiKTtcblx0XHRcdFx0XHRcdGlmKHJvb3Rfdm0uZ2FtZV92bS5zY2VuZSgpID09IFBMQVlJTkcpe1xuXHRcdFx0XHRcdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UuY3VycmVudF9ibG9jay5sZWZ0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM4OiAvLyB1cFxuXHRcdFx0XHRcdFx0ZGQoXCJ1cFwiKTtcblx0XHRcdFx0XHRcdGlmKHJvb3Rfdm0uZ2FtZV92bS5zY2VuZSgpID09IFBMQVlJTkcpe1xuXHRcdFx0XHRcdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UuY3VycmVudF9ibG9jay5yb3RhdGUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgNDA6IC8vIGRvd25cblx0XHRcdFx0XHRcdGlmKHJvb3Rfdm0uZ2FtZV92bS5zY2VuZSgpID09IFBMQVlJTkcpe1xuXHRcdFx0XHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc3RhZ2UuY3VycmVudF9ibG9jay5kb3duKCkgPT0gZmFsc2Upe1xuXHRcdFx0XHRcdFx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5uZXh0QmxvY2soKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8g44K344O844Oz44KS44K544K/44O844OI44Gr5YiH44KK5pu/44GI44Gm44OG44OI44Oq44K544Gu44Ky44O844Og44KS6ZaL5aeL44GZ44KLXG5cdFx0c3RhcnQoKXtcblx0XHRcdC8vIGtub2Nrb3V044Gu44OT44Ol44O844GL44KJ5ZG844Gw44KM44Gf5pmC44CBdGhpc+OBjHJvb3Rfdm3jgavjgarjgaPjgabjgZfjgb7jgYbjgZ/jgoFcblx0XHRcdC8vIHRoaXMubWV0aG9kKCnjgafjga/jgarjgY9yb290X3ZtLmdhbWVfdm0ubWV0aG9kKCnjgajjgZfjgabjgYTjgotcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zY2VuZShQTEFZSU5HKTtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5zdGFydCgpO1xuXHRcdFx0cm9vdF92bS5zY29yZV92bS5yZXNldCgpO1xuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zjgavjgZnjgotcblx0XHRnYW1lT3Zlcigpe1xuXHRcdFx0cm9vdF92bS5nYW1lX3ZtLnNjZW5lKEdBTUVPVkVSKTtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5wYXVzZSgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcblx0XHR9XG5cdFx0Ly8g44K544K/44O844OI44Gr5oi744KLXG5cdFx0cmVzZXQoKXtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zY2VuZShTVEFSVCk7XG5cdFx0XHRyb290X3ZtLmJvYXJkX3ZtLnJlc2V0KCk7XG5cdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UucmVzZXQoKTtcblx0XHR9XG5cdFx0Ly8g44K344On44OD44OX44Gr5YWl44KLXG5cdFx0c2hvcCgpe1xuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6DjgpLkuIDml6blgZzmraLjgZnjgotcblx0XHRwYXVzZSgpe1xuXHRcdFx0cm9vdF92bS5nYW1lX3ZtLnNjZW5lKFBBVVNFKTtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXHQvLyDjg4bjg4jjg6rjgrnjga7jgrLjg7zjg6DjgpLnrqHnkIbjgZnjgotcblx0Y2xhc3MgU3RhZ2V7XG5cdFx0Y29uc3RydWN0b3IoKXtcblx0XHRcdHRoaXMuaW50ZXJ2YWxJZCA9IDA7XG5cdFx0XHR0aGlzLmN1cnJlbnRfYmxvY2sgPSBudWxsO1xuXHRcdFx0dGhpcy5ibG9ja3MgPSBbSUJsb2NrLExCbG9jayxKQmxvY2ssVEJsb2NrLE9CbG9jayxaQmxvY2ssU0Jsb2NrXTtcblx0XHRcdHRoaXMuYWRkQmxvY2soKTtcblx0XHRcdHRoaXMuY3VycmVudF9ibG9jay5kcmF3KCk7XG5cdFx0fVxuXHRcdC8vIOOCsuODvOODoOOCkumWi+Wni+OBmeOCi1xuXHRcdHN0YXJ0KCl7XG5cdFx0XHR0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKT0+e3RoaXMuZnJhbWUoKTt9LCBTUEVFRF9MSVNUWzBdKTtcblx0XHR9XG5cdFx0Y2hhbmdlU3BlZWQoc3BlZWQpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdFx0dGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLmZyYW1lKCk7fSwgc3BlZWQpO1xuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6DjgpLkuIDml6blgZzmraJcblx0XHRwYXVzZSgpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdH1cblx0XHRyZXNldCgpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdFx0dGhpcy5hZGRCbG9jaygpO1xuXHRcdFx0dGhpcy5jdXJyZW50X2Jsb2NrLmRyYXcoKTtcblx0XHR9XG5cdFx0Ly8g44K544OG44O844K444Gr5paw44GX44GE44OW44Ot44OD44Kv44KS6L+95YqgXG5cdFx0YWRkQmxvY2soKXtcblx0XHRcdC8vIOOBqOOCiuOBguOBiOOBmuOAgUlCbG9ja+OBoOOBkei/veWKoOOBmeOCi1xuXHRcdFx0Ly8g44Op44Oz44OA44Og44Gr6L+95Yqg44GV44KM44KL44KI44GG44Gr44GZ44KLXG5cdFx0XHRsZXQgYmxvY2sgPSB0aGlzLmJsb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJsb2Nrcy5sZW5ndGgpXTtcblx0XHRcdHRoaXMuY3VycmVudF9ibG9jayA9IG5ldyBibG9jaygoQ09MX05VTSAtIDIpIC8gMiwgMCk7XG5cdFx0fVxuXHRcdC8vIOePvuWcqOOBruODluODreODg+OCr+OCkuWbuuWumuOBl+OBpuOAgeaWsOOBl+OBhOODluODreODg+OCr+OCkuOCueODhuODvOOCuOOBq+i/veWKoFxuXHRcdG5leHRCbG9jaygpe1xuXHRcdFx0dGhpcy5jdXJyZW50X2Jsb2NrLmZyZWV6ZSgpO1xuXHRcdFx0cm9vdF92bS5ib2FyZF92bS5jaGVja0xpbmUoKTtcblx0XHRcdHRoaXMuYWRkQmxvY2soKTtcblx0XHR9XG5cdFx0Ly8g5LiA5a6a6ZaT6ZqU44GU44Go44Gr44OW44Ot44OD44Kv44KS5LiL44Gr6JC944Go44Gd44GG44Go44GZ44KL44CCXG5cdFx0ZnJhbWUoKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiZnJhbWVcIik7XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRfYmxvY2suZG93bigpID09IGZhbHNlKXtcblx0XHRcdFx0dGhpcy5uZXh0QmxvY2soKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8g44OW44Ot44OD44Kv44KS5qeL5oiQ44GZ44KL44K/44Kk44OrXG5cdC8vIOe1tuWvvuW6p+aomeOCkuaMgeOBpFxuXHRjbGFzcyBUaWxle1xuXHRcdGNvbnN0cnVjdG9yKHgseSxibG9jayl7XG5cdFx0XHR0aGlzLnBvc1ggPSB4O1xuXHRcdFx0dGhpcy5wb3NZID0geTtcblx0XHRcdHRoaXMuYmxvY2sgPSBibG9jaztcblx0XHR9XG5cdFx0cG9zWFlSZWxhdGl2ZVRvQmxvY2soKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHRoaXMucG9zWCAtIHRoaXMuYmxvY2sucG9zWCxcblx0XHRcdFx0eTogdGhpcy5wb3NZIC0gdGhpcy5ibG9jay5wb3NZXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvLyDjg5bjg63jg4Pjgq9cblx0Y2xhc3MgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHRoaXMucG9zWCA9IHg7XG5cdFx0XHR0aGlzLnBvc1kgPSB5O1xuXHRcdFx0dGhpcy50aWxlcyA9IFtdO1xuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLmp4vmiJDjgZnjgovjgr/jgqTjg6vjgpLov73liqBcblx0XHQvLyBkeOOBiuOCiOOBs2R544Gv55u45a++55qE44Gq5bqn5qiZXG5cdFx0YWRkVGlsZShkeCxkeSl7XG5cdFx0XHR0aGlzLnRpbGVzLnB1c2gobmV3IFRpbGUodGhpcy5wb3NYICsgZHgsIHRoaXMucG9zWSArIGR5LHRoaXMpKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5LiL44Gr56e75YuV44GV44Gb44KLXG5cdFx0Ly8g5aSx5pWX44GX44Gf5pmCZmFsc2XjgpLov5TjgZlcblx0XHRkb3duKCl7XG5cdFx0XHRpZih0aGlzLmNhbk1vdmUoMCwxKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0dGhpcy5tb3ZlKDAsMSk7XG5cdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5Y+z44Gr56e75YuV44GV44Gb44KLXG5cdFx0Ly8g5aSx5pWX44GX44Gf5pmCZmFsc2XjgpLov5TjgZlcblx0XHRyaWdodCgpe1xuXHRcdFx0aWYodGhpcy5jYW5Nb3ZlKDEsMCkpe1xuXHRcdFx0XHR0aGlzLmVyYXNlKCk7XG5cdFx0XHRcdHRoaXMubW92ZSgxLDApO1xuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLlt6bjgavnp7vli5XjgZXjgZvjgotcblx0XHQvLyDlpLHmlZfjgZfjgZ/mmYJmYWxzZeOCkui/lOOBmVxuXHRcdGxlZnQoKXtcblx0XHRcdGlmKHRoaXMuY2FuTW92ZSgtMSwwKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0dGhpcy5tb3ZlKC0xLDApO1xuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRYWUJ5Um90YXRpbm8odGlsZSl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiAtKHRpbGUucG9zWFlSZWxhdGl2ZVRvQmxvY2soKS55KSArIDIgKyB0aGlzLnBvc1gsXG5cdFx0XHRcdHk6IHRpbGUucG9zWFlSZWxhdGl2ZVRvQmxvY2soKS54ICsgdGhpcy5wb3NZXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYW5Sb3RhdGUoKXtcblx0XHRcdGZvcihsZXQgdGlsZSBvZiB0aGlzLnRpbGVzKXtcblx0XHRcdFx0bGV0IHBvcyA9IHRoaXMuZ2V0WFlCeVJvdGF0aW5vKHRpbGUpO1xuXHRcdFx0XHRpZihwb3MueCA8IENPTF9OVU0gJiZcblx0XHRcdFx0ICAgcG9zLnggPj0gMCAmJlxuXHRcdFx0XHQgICBwb3MueSA+PSAwICYmXG5cdFx0XHRcdCAgIHBvcy55IDwgUk9XX05VTSl7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gcm9vdF92bS5ib2FyZF92bS5nZXRTcXVhcmVWYWx1ZShwb3MueCxwb3MueSk7XG5cdFx0XHRcdFx0aWYodmFsdWUgPT0gRlJFRVpFRCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLlj7Pjgas5MOW6puWbnui7ouOBleOBm+OCi1xuXHRcdHJvdGF0ZSgpe1xuXHRcdFx0aWYodGhpcy5jYW5Sb3RhdGUoKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRcdGxldCBwb3MgPSB0aGlzLmdldFhZQnlSb3RhdGlubyh0aWxlKTtcblx0XHRcdFx0XHR0aWxlLnBvc1ggPSBwb3MueDtcblx0XHRcdFx0XHR0aWxlLnBvc1kgPSBwb3MueTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyDnp7vli5XjgZnjgovjgZPjgajjgYzjgafjgY3jgovjgYvjgpLnnJ/lgb3lgKTjgafov5TjgZlcblx0XHQvLyBkeOOBr+OBqeOCjOOBoOOBkeWPs+OBq+WLleOBi+OBmeOBi1xuXHRcdC8vIGR544Gv44Gp44KM44Gg44GR5LiL44Gr5YuV44GL44GZ44GLXG5cdFx0Y2FuTW92ZShkeCwgZHkpe1xuXHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRsZXQgeCA9IHRpbGUucG9zWCArIGR4O1xuXHRcdFx0XHRsZXQgeSA9IHRpbGUucG9zWSArIGR5XG5cdFx0XHRcdGlmKHggPCBDT0xfTlVNICYmXG5cdFx0XHRcdCAgIHggPj0gMCAmJlxuXHRcdFx0XHQgICB5IDwgUk9XX05VTSl7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gcm9vdF92bS5ib2FyZF92bS5nZXRTcXVhcmVWYWx1ZSh4LHkpO1xuXHRcdFx0XHRcdGlmKHZhbHVlID09IEZSRUVaRUQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5YuV44GL44GZXG5cdFx0Ly8gZHjjga/jganjgozjgaDjgZHlj7Pjgavli5XjgYvjgZnjgYtcblx0XHQvLyBkeeOBr+OBqeOCjOOBoOOBkeS4i+OBq+WLleOBi+OBmeOBi1xuXHRcdG1vdmUoZHgsZHkpe1xuXHRcdFx0dGhpcy5wb3NYICs9IGR4O1xuXHRcdFx0dGhpcy5wb3NZICs9IGR5O1xuXHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHR0aWxlLnBvc1ggKz0gZHg7XG5cdFx0XHRcdHRpbGUucG9zWSArPSBkeTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5Zu65a6a5YyW44GZ44KLXG5cdFx0Ly8g5a6f6Zqb44Gr44Gv44OW44Ot44OD44Kv44Gu44K/44Kk44Or44KS44Oc44O844OJ44Gr5pu444GN6L6844KAXG5cdFx0ZnJlZXplKCl7XG5cdFx0XHR0aGlzLmRyYXdCb2FyZChGUkVFWkVEKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5raI44GZXG5cdFx0ZXJhc2UoKXtcblx0XHRcdHRoaXMuZHJhd0JvYXJkKEVNUFRZKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS44Oc44O844OJ44Gr5o+P55S744GZ44KLXG5cdFx0ZHJhdygpe1xuXHRcdFx0dGhpcy5kcmF3Qm9hcmQoQUNUSVZFRCk7XG5cdFx0fVxuXHRcdGRyYXdCb2FyZChzcXVhcmVfc3RhdHVzKXtcblx0XHRcdGZvcihsZXQgdCBvZiB0aGlzLnRpbGVzKXtcblx0XHRcdFx0cm9vdF92bS5ib2FyZF92bS5zcXVhcmVzW3QucG9zWV1bdC5wb3NYXS52YWx1ZShzcXVhcmVfc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hlY2tHYW1lT3Zlcigpe1xuXHRcdFx0Zm9yKGxldCB0IG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRpZihyb290X3ZtLmJvYXJkX3ZtLnNxdWFyZXNbdC5wb3NZXVt0LnBvc1hdLnZhbHVlKCkgPT0gRlJFRVpFRCl7XG5cdFx0XHRcdFx0cm9vdF92bS5nYW1lX3ZtLmdhbWVPdmVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gKlxuXHQvLyAqXG5cdC8vICpcblx0Ly8gKlxuXHRjbGFzcyBJQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDMpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gKlxuXHQvLyAqXG5cdC8vICogKlxuXHRjbGFzcyBMQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDIpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gICAqXG5cdC8vICAgKlxuXHQvLyAqICpcblx0Y2xhc3MgSkJsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwwKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMik7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fVxuXHR9XG5cdC8vICpcblx0Ly8gKiAqXG5cdC8vICpcblx0Y2xhc3MgVEJsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwwKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgwLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwxKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fVxuXHR9XG5cdC8vICogKlxuXHQvLyAqICpcblx0Y2xhc3MgT0Jsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDIpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwyKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XHRcdFx0XG5cdFx0fVxuXHR9XG5cdC8vICogKlxuXHQvLyAgICogKlxuXHRjbGFzcyBaQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDIpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gICAqICpcblx0Ly8gKiAqXG5cdGNsYXNzIFNCbG9jayBleHRlbmRzIEJsb2Nre1xuXHRcdGNvbnN0cnVjdG9yKHgseSl7XG5cdFx0XHRzdXBlcih4LHkpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMCk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMik7XG5cdFx0XHR0aGlzLmNoZWNrR2FtZU92ZXIoKTtcblx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOebpOmdouOBruS4gOOBpOS4gOOBpOOBruODnuOCuVxuXHRjbGFzcyBTcXVhcmV7XG5cdFx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdFx0dGhpcy52YWx1ZSA9IGtvLm9ic2VydmFibGUodmFsdWUpO1xuXHRcdFx0dGhpcy50ZXh0ID0ga28uY29tcHV0ZWQoKCk9Pntcblx0XHRcdFx0c3dpdGNoKHRoaXMudmFsdWUoKSl7XG5cdFx0XHRcdGNhc2UgRU1QVFk6XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHRjYXNlIEFDVElWRUQ6XG5cdFx0XHRcdFx0cmV0dXJuICdhY3RpdmVkJztcblx0XHRcdFx0Y2FzZSBGUkVFWkVEOlxuXHRcdFx0XHRcdHJldHVybiAnZnJlZXplZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvLyDnm6TpnaJcblx0Y2xhc3MgQm9hcmRWaWV3TW9kZWx7XG5cdFx0Y29uc3RydWN0b3IoKXtcblx0XHRcdHZhciB4O1xuXHRcdFx0dmFyIHk7XG5cdFx0XHR0aGlzLnNxdWFyZXMgPSBbXTtcblx0XHRcdGZvcih5ID0gMDsgeSA8IFJPV19OVU07IHkrKyl7XG5cdFx0XHRcdHRoaXMuc3F1YXJlc1t5XSA9IFtdO1xuXHRcdFx0XHRmb3IoeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1t5XVt4XSA9IG5ldyBTcXVhcmUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzZXQoKXtcblx0XHRcdHZhciB4O1xuXHRcdFx0dmFyIHk7XG5cdFx0XHRmb3IoeSA9IDA7IHkgPCBST1dfTlVNOyB5Kyspe1xuXHRcdFx0XHRmb3IoeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1t5XVt4XS52YWx1ZShFTVBUWSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U3F1YXJlVmFsdWUoeCx5KXtcblx0XHRcdHJldHVybiB0aGlzLnNxdWFyZXNbeV1beF0udmFsdWUoKTtcblx0XHR9XG5cdFx0Y2hlY2tMaW5lKCl7XG5cdFx0XHRsZXQgeSA9IFJPV19OVU0gLSAxO1xuXHRcdFx0bGV0IHggPSAwO1xuXHRcdFx0bGV0IGNsZWFyZWRfbGluZV9udW0gPSAwO1xuXHRcdFx0d2hpbGUoeSA+PSAwKXtcblx0XHRcdFx0bGV0IGZsYWcgPSB0cnVlO1xuXHRcdFx0XHRmb3IoeD0wOyB4IDwgQ09MX05VTTsgeCsrKXtcblx0XHRcdFx0XHRpZih0aGlzLnNxdWFyZXNbeV1beF0udmFsdWUoKSAhPSBGUkVFWkVEKXtcblx0XHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihmbGFnID09IHRydWUpe1xuXHRcdFx0XHRcdHRoaXMuY2xlYXJMaW5lKHkpO1xuXHRcdFx0XHRcdGNsZWFyZWRfbGluZV9udW0rKztcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0eS0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyb290X3ZtLnNjb3JlX3ZtLmFkZENsZWFyZGxpbmUoY2xlYXJlZF9saW5lX251bSk7XG5cdFx0fVxuXHRcdGNsZWFyTGluZSh5KXtcblx0XHRcdC8vIOauteOCkuOBmuOCieOBl+OBpuihjOOBj1xuXHRcdFx0Zm9yKGxldCBjeSA9IHk7IGN5ID4gMDsgY3ktLSl7XG5cdFx0XHRcdGZvcihsZXQgY3ggPSAwOyBjeCA8IENPTF9OVU07IGN4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1tjeV1bY3hdLnZhbHVlKHRoaXMuc3F1YXJlc1tjeS0xXVtjeF0udmFsdWUoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJPV19OVU3mrrXnm67jgavnqbrjga5zcXVhcmXjgpLov73liqDjgZnjgovjgIJcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHR0aGlzLnNxdWFyZXNbMF1beF0udmFsdWUoRU1QVFkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjbGFzcyBTY29yZVZpZXdNb2RlbHtcblx0XHRjb25zdHJ1Y3Rvcigpe1xuXHRcdFx0dGhpcy5saW5lID0ga28ub2JzZXJ2YWJsZSgpO1xuXHRcdFx0dGhpcy5zY29yZSA9IGtvLm9ic2VydmFibGUoKTtcblx0XHRcdHRoaXMuc3BlZWQgPSBrby5vYnNlcnZhYmxlKCk7XG5cdFx0XHR0aGlzLmxldmVsID0ga28ub2JzZXJ2YWJsZSgpO1xuXHRcdFx0dGhpcy50d2VldCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBtZXNzYWdlID0gJ+ODqeOCpOODs+OCkidcblx0XHRcdFx0XHQrdGhpcy5saW5lKCkrJ+acrOa2iOOBl+OBpuOAgeOCueOCs+OCouOCkidcblx0XHRcdFx0XHQrdGhpcy5zY29yZSgpKyfngrnnjbLlvpfjgZfjgZ/jgognXG5cdFx0XHRcdFx0KycgLyAnXG5cdFx0XHRcdFx0K2RvY3VtZW50LnRpdGxlXG5cdFx0XHRcdFx0KycgLSAnXG5cdFx0XHRcdFx0K2xvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdHZhciBmPSdodHRwOi8vdHdpdHRlci5jb20vP3N0YXR1cz0nXG5cdFx0XHRcdFx0K2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcblx0XHRcdFx0aWYoIXdpbmRvdy5vcGVuKGYsJ3N1cmZpbmcnKSl7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZj1mOyB2b2lkKDApO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fVxuXHRcdHJlc2V0KCl7XG5cdFx0XHR0aGlzLmxpbmUoMCk7XG5cdFx0XHR0aGlzLnNjb3JlKDApO1xuXHRcdFx0dGhpcy5zcGVlZChTUEVFRF9MSVNUWzBdKTtcblx0XHRcdHRoaXMubGV2ZWwoMSk7XG5cdFx0fVxuXHRcdGFkZENsZWFyZGxpbmUobnVtKXtcblx0XHRcdHRoaXMubGluZSh0aGlzLmxpbmUoKSArIG51bSk7XG5cdFx0XHRsZXQgYm9udXMgPSAwO1xuXHRcdFx0c3dpdGNoKG51bSl7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGJvbnVzID0gMTAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Ym9udXMgPSAzMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRib251cyA9IDEwMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRib251cyA9IDUwMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zY29yZSh0aGlzLnNjb3JlKCkgKyBib251cyk7XG5cdFx0XHQvLyDjg6njgqTjg7PjgpIxMOacrOa2iOOBmeW6puOBq+ODrOODmeODq+OCkuS4iuOBkuOCi1xuXHRcdFx0aWYodGhpcy5saW5lKCkgPiB0aGlzLmxldmVsKCkgKiAxMCl7XG5cdFx0XHRcdHRoaXMubGV2ZWwodGhpcy5sZXZlbCgpICsxKTtcblx0XHRcdFx0dGhpcy5zcGVlZChTUEVFRF9MSVNUW3RoaXMubGV2ZWwoKV0pO1xuXHRcdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UuY2hhbmdlU3BlZWQodGhpcy5zcGVlZCgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cm9vdF92bS5zY29yZV92bSA9IG5ldyBTY29yZVZpZXdNb2RlbCgpO1xuXHRyb290X3ZtLmJvYXJkX3ZtID0gbmV3IEJvYXJkVmlld01vZGVsKCk7XG5cdHJvb3Rfdm0uZ2FtZV92bSA9IG5ldyBHYW1lVmlld01vZGVsKCk7XG5cdGtvLmFwcGx5QmluZGluZ3Mocm9vdF92bSk7XG59KTtcbiJdfQ==
