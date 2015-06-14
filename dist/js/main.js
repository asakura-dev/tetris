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
				root_vm.score_vm.reset();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXRlci1oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiL1VzZXJzL2FzYWt1cmEvUHJvZ3JhbS9XZWIvdGV0cmlzL25vZGVfdGVtcGxhdGUvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBLENBQUMsQ0FBQyxZQUFV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QUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3RDLEdBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDMUIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLml0ZXItaGVscGVycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQnKS5jb3JlLmdldEl0ZXJhdG9yOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZzEsIG1zZzIpe1xuICBpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyID8gbXNnMSArIG1zZzIgOiBtc2cxKTtcbn1cbmFzc2VydC5kZWYgPSAkLmFzc2VydERlZmluZWQ7XG5hc3NlcnQuZm4gPSBmdW5jdGlvbihpdCl7XG4gIGlmKCEkLmlzRnVuY3Rpb24oaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5hc3NlcnQub2JqID0gZnVuY3Rpb24oaXQpe1xuICBpZighJC5pc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuYXNzZXJ0Lmluc3QgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBhc3NlcnQ7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBUQUcgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5mdW5jdGlvbiBjb2YoaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufVxuY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBUO1xuICByZXR1cm4gaXQgPT0gdW5kZWZpbmVkID8gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogJ051bGwnXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVCA6IGNvZihPKTtcbn07XG5jb2Yuc2V0ID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICEkLmhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkkLmhpZGUoaXQsIFRBRywgdGFnKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGNvZjsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xuICAsIGNvcmUgICAgICAgPSAkLmNvcmVcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbmZ1bmN0aW9uICRkZWYodHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSkucHJvdG90eXBlXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cC5wcm90b3R5cGUgPSBDLnByb3RvdHlwZTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzLnByb3RvdHlwZSB8fCAoZXhwb3J0cy5wcm90b3R5cGUgPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gJGRlZjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xuICAkLkZXICAgPSBmYWxzZTtcbiAgJC5wYXRoID0gJC5jb3JlO1xuICByZXR1cm4gJDtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xyXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nXHJcbiAgLCBnZXROYW1lcyA9ICQuZ2V0TmFtZXM7XHJcblxyXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXHJcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dOYW1lcyhpdCl7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XHJcbiAgfSBjYXRjaChlKXtcclxuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XHJcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcclxuICByZXR1cm4gZ2V0TmFtZXMoJC50b09iamVjdChpdCkpO1xyXG59OyIsInZhciAkZGVmICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCAkcmVkZWYgICAgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWYnKVxuICAsICQgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY29mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgJGl0ZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxuICAsIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEZGX0lURVJBVE9SICAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgICA9ICd2YWx1ZXMnXG4gICwgSXRlcmF0b3JzICAgICAgID0gJGl0ZXIuSXRlcmF0b3JzO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRSl7XG4gICRpdGVyLmNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZChraW5kKXtcbiAgICBmdW5jdGlvbiAkJCh0aGF0KXtcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhhdCwga2luZCk7XG4gICAgfVxuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICB9XG4gIHZhciBUQUcgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgcHJvdG8gICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgX25hdGl2ZSAgPSBwcm90b1tTWU1CT0xfSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCBfZGVmYXVsdCA9IF9uYXRpdmUgfHwgY3JlYXRlTWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoX25hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gJC5nZXRQcm90byhfZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIGNvZi5zZXQoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoJC5GVyAmJiAkLmhhcyhwcm90bywgRkZfSVRFUkFUT1IpKSRpdGVyLnNldChJdGVyYXRvclByb3RvdHlwZSwgJC50aGF0KTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoJC5GVyB8fCBGT1JDRSkkaXRlci5zZXQocHJvdG8sIF9kZWZhdWx0KTtcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gJC50aGF0O1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAga2V5czogICAgSVNfU0VUICAgICAgICAgICAgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZChLRVlTKSxcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoVkFMVUVTKSxcbiAgICAgIGVudHJpZXM6IERFRkFVTFQgIT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0UpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkcmVkZWYocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGRlZigkZGVmLlAgKyAkZGVmLkYgKiAkaXRlci5CVUdHWSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIGNsYXNzb2YgICAgICAgICAgID0gY29mLmNsYXNzb2ZcbiAgLCBhc3NlcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKVxuICAsIGFzc2VydE9iamVjdCAgICAgID0gYXNzZXJ0Lm9ialxuICAsIFNZTUJPTF9JVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgRkZfSVRFUkFUT1IgICAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBJdGVyYXRvcnMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnaXRlcmF0b3JzJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnNldEl0ZXJhdG9yKEl0ZXJhdG9yUHJvdG90eXBlLCAkLnRoYXQpO1xuZnVuY3Rpb24gc2V0SXRlcmF0b3IoTywgdmFsdWUpe1xuICAkLmhpZGUoTywgU1lNQk9MX0lURVJBVE9SLCB2YWx1ZSk7XG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcbiAgaWYoRkZfSVRFUkFUT1IgaW4gW10pJC5oaWRlKE8sIEZGX0lURVJBVE9SLCB2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIEJVR0dZOiAna2V5cycgaW4gW10gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKSxcbiAgSXRlcmF0b3JzOiBJdGVyYXRvcnMsXG4gIHN0ZXA6IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbiAgfSxcbiAgaXM6IGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KGl0KVxuICAgICAgLCBTeW1ib2wgPSAkLmcuU3ltYm9sO1xuICAgIHJldHVybiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUikgaW4gT1xuICAgICAgfHwgU1lNQk9MX0lURVJBVE9SIGluIE9cbiAgICAgIHx8ICQuaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oaXQpe1xuICAgIHZhciBTeW1ib2wgPSAkLmcuU3ltYm9sXG4gICAgICAsIGdldEl0ZXI7XG4gICAgaWYoaXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgIGdldEl0ZXIgPSBpdFtTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SXVxuICAgICAgICB8fCBpdFtTWU1CT0xfSVRFUkFUT1JdXG4gICAgICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG4gICAgfVxuICAgIGFzc2VydCgkLmlzRnVuY3Rpb24oZ2V0SXRlciksIGl0LCAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xuICB9LFxuICBzZXQ6IHNldEl0ZXJhdG9yLFxuICBjcmVhdGU6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUocHJvdG8gfHwgSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiAkLmRlc2MoMSwgbmV4dCl9KTtcbiAgICBjb2Yuc2V0KENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG4gICwgY29yZSAgID0ge31cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHlcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vclxuICAsIG1heCAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICA9IE1hdGgubWluO1xuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXG52YXIgREVTQyA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDI7IH19KS5hID09IDI7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcbnZhciBoaWRlID0gY3JlYXRlRGVmaW5lcigxKTtcbi8vIDcuMS40IFRvSW50ZWdlclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59XG5mdW5jdGlvbiBkZXNjKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn1cbmZ1bmN0aW9uIHNpbXBsZVNldChvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufVxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgZGVzYyhiaXRtYXAsIHZhbHVlKSk7XG4gIH0gOiBzaW1wbGVTZXQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0KXtcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59XG5cbnZhciAkID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZncnKSh7XG4gIGc6IGdsb2JhbCxcbiAgY29yZTogY29yZSxcbiAgaHRtbDogZ2xvYmFsLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxuICBpc09iamVjdDogICBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgdGhhdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHRvSW50ZWdlcjogdG9JbnRlZ2VyLFxuICAvLyA3LjEuMTUgVG9MZW5ndGhcbiAgdG9MZW5ndGg6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9LFxuICB0b0luZGV4OiBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oaXQsIGtleSl7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH0sXG4gIGNyZWF0ZTogICAgIE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgREVTQzogICAgICAgREVTQyxcbiAgZGVzYzogICAgICAgZGVzYyxcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxuICBFUzVPYmplY3Q6IE9iamVjdCxcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gJC5FUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xuICB9LFxuICBoaWRlOiBoaWRlLFxuICBkZWY6IGNyZWF0ZURlZmluZXIoMCksXG4gIHNldDogZ2xvYmFsLlN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGUsXG4gIGVhY2g6IFtdLmZvckVhY2hcbn0pO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmlmKHR5cGVvZiBfX2UgIT0gJ3VuZGVmaW5lZCcpX19lID0gY29yZTtcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kJykuaGlkZTsiLCJ2YXIgJCAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXHJcbiAgLCBzdG9yZSAgPSAkLmdbU0hBUkVEXSB8fCAkLmhpZGUoJC5nLCBTSEFSRUQsIHt9KVtTSEFSRURdO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XHJcbn07IiwiLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9ICQudG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGxcbiAgICAgIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHNpZCA9IDA7XG5mdW5jdGlvbiB1aWQoa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsrc2lkICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpKTtcbn1cbnVpZC5zYWZlID0gcmVxdWlyZSgnLi8kJykuZy5TeW1ib2wgfHwgdWlkO1xubW9kdWxlLmV4cG9ydHMgPSB1aWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQnKS5nXG4gICwgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIGdsb2JhbC5TeW1ib2wgJiYgZ2xvYmFsLlN5bWJvbFtuYW1lXSB8fCByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnU3ltYm9sLicgKyBuYW1lKSk7XG59OyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4vJCcpLmNvcmVcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJyk7XG5jb3JlLmlzSXRlcmFibGUgID0gJGl0ZXIuaXM7XG5jb3JlLmdldEl0ZXJhdG9yID0gJGl0ZXIuZ2V0OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBzZXRVbnNjb3BlID0gcmVxdWlyZSgnLi8kLnVuc2NvcGUnKVxuICAsIElURVIgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXG4gICwgJGl0ZXIgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcbiAgLCBzdGVwICAgICAgID0gJGl0ZXIuc3RlcFxuICAsIEl0ZXJhdG9ycyAgPSAkaXRlci5JdGVyYXRvcnM7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICQuc2V0KHRoaXMsIElURVIsIHtvOiAkLnRvT2JqZWN0KGl0ZXJhdGVkKSwgaTogMCwgazoga2luZH0pO1xuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXG4gICAgLCBPICAgICA9IGl0ZXIub1xuICAgICwga2luZCAgPSBpdGVyLmtcbiAgICAsIGluZGV4ID0gaXRlci5pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnNldFVuc2NvcGUoJ2tleXMnKTtcbnNldFVuc2NvcGUoJ3ZhbHVlcycpO1xuc2V0VW5zY29wZSgnZW50cmllcycpOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcbiAgLCB0b09iamVjdCA9ICQudG9PYmplY3Q7XG4kLmVhY2guY2FsbCgoJ2ZyZWV6ZSxzZWFsLHByZXZlbnRFeHRlbnNpb25zLGlzRnJvemVuLGlzU2VhbGVkLGlzRXh0ZW5zaWJsZSwnICtcbiAgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcixnZXRQcm90b3R5cGVPZixrZXlzLGdldE93blByb3BlcnR5TmFtZXMnKS5zcGxpdCgnLCcpXG4sIGZ1bmN0aW9uKEtFWSwgSUQpe1xuICB2YXIgZm4gICAgID0gKCQuY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGZvcmNlZCA9IDBcbiAgICAsIG1ldGhvZCA9IHt9O1xuICBtZXRob2RbS0VZXSA9IElEID09IDAgPyBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDEgPyBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAyID8gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDMgPyBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA0ID8gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xuICB9IDogSUQgPT0gNiA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xuICB9IDogSUQgPT0gNyA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gZm4oT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZChpdCkpKTtcbiAgfSA6IElEID09IDggPyBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfSA6IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG4gIHRyeSB7XG4gICAgZm4oJ3onKTtcbiAgfSBjYXRjaChlKXtcbiAgICBmb3JjZWQgPSAxO1xuICB9XG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogZm9yY2VkLCAnT2JqZWN0JywgbWV0aG9kKTtcbn0pOyIsInZhciBzZXQgICA9IHJlcXVpcmUoJy4vJCcpLnNldFxuICAsICRhdCAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpXG4gICwgSVRFUiAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXG4gICwgc3RlcCAgPSAkaXRlci5zdGVwO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxuICAgICwgTyAgICAgPSBpdGVyLm9cbiAgICAsIGluZGV4ID0gaXRlci5pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHN0ZXAoMSk7XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHN0ZXAoMCwgcG9pbnQpO1xufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLkl0ZXJhdG9yc1xuICAsIElURVJBVE9SICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXlcbiAgLCBOTCAgICAgICAgICA9ICQuZy5Ob2RlTGlzdFxuICAsIEhUQyAgICAgICAgID0gJC5nLkhUTUxDb2xsZWN0aW9uXG4gICwgTkxQcm90byAgICAgPSBOTCAmJiBOTC5wcm90b3R5cGVcbiAgLCBIVENQcm90byAgICA9IEhUQyAmJiBIVEMucHJvdG90eXBlO1xuaWYoJC5GVyl7XG4gIGlmKE5MICYmICEoSVRFUkFUT1IgaW4gTkxQcm90bykpJC5oaWRlKE5MUHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gIGlmKEhUQyAmJiAhKElURVJBVE9SIGluIEhUQ1Byb3RvKSkkLmhpZGUoSFRDUHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG59XG5JdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnMuSFRNTENvbGxlY3Rpb24gPSBBcnJheVZhbHVlczsiLCIkKGZ1bmN0aW9uKCl7XG5cdC8vIOOBmeOBueOBpuOBruODk+ODpeODvOODouODh+ODq+OCkuagvOe0jeOBmeOCi+ODk+ODpeODvOODouODh+ODq1xuXHR2YXIgcm9vdF92bSA9IHt9O1xuXHQvLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLjga7jg57jgrnjga7mlbBcblx0Y29uc3QgUk9XX05VTSA9IDIwO1xuXHRjb25zdCBDT0xfTlVNID0gMTA7XG5cdC8vIOOCsuODvOODoOOBruWgtOmdoijnirbmhYsp44KS56S644GZ5a6a5pWwXG5cdGNvbnN0IFNUQVJUID0gMTtcblx0Y29uc3QgUExBWUlORyA9IDI7XG5cdGNvbnN0IFBBVVNFID0gMztcblx0Y29uc3QgR0FNRU9WRVIgPSA0O1xuXHQvLyDjg57jgrnjga7nirbmhYvjgpLnpLrjgZnlrprmlbBcblx0Y29uc3QgRU1QVFkgPSAwO1xuXHRjb25zdCBBQ1RJVkVEID0gMTtcblx0Y29uc3QgRlJFRVpFRCA9IDI7XG5cdC8vIOiQveS4i+mAn+W6pihtcylcblx0Y29uc3QgU1BFRURfTElTVCA9IFsxMDAwLDUwMCw0MDAsMzAwLDIwMCwxMDBdO1xuXHQvLyDjg4fjg5Djg4PjgrDnlKhcblx0ZnVuY3Rpb24gZGQobWVzc2FnZSl7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cblx0Ly8g44Ky44O844Og5YWo5L2T44KS566h55CG44GZ44KLXG5cdGNsYXNzIEdhbWVWaWV3TW9kZWx7XG5cdFx0Y29uc3RydWN0b3IoKXtcblx0XHRcdHRoaXMuc2NlbmUgPSBrby5vYnNlcnZhYmxlKFNUQVJUKTtcblx0XHRcdHRoaXMuYXR0YWNoX2V2ZW50cygpO1xuXHRcdFx0dGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuXHRcdH1cblx0XHQvLyDjgq3jg7zlhaXlipvjgpLlj5fjgZHku5jjgZHjgovjgojjgYbjgavjgZnjgotcblx0XHRhdHRhY2hfZXZlbnRzKCl7XG5cdFx0XHQkKCdodG1sJykua2V5ZG93bihmdW5jdGlvbihlKXtcblx0XHRcdFx0aWYocm9vdF92bS5nYW1lX3ZtLnNjZW5lKCkgPT0gUExBWUlORyl7XG5cdFx0XHRcdFx0c3dpdGNoKGUud2hpY2gpe1xuXHRcdFx0XHRcdGNhc2UgMzk6IC8vIHJpZ2h0XG5cdFx0XHRcdFx0XHRkZChcInJpZ2h0XCIpO1xuXHRcdFx0XHRcdFx0aWYocm9vdF92bS5nYW1lX3ZtLnNjZW5lKCkgPT0gUExBWUlORyl7XG5cdFx0XHRcdFx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5jdXJyZW50X2Jsb2NrLnJpZ2h0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM3OiAvLyBsZWZ0XG5cdFx0XHRcdFx0XHRkZChcImxlZnRcIik7XG5cdFx0XHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc2NlbmUoKSA9PSBQTEFZSU5HKXtcblx0XHRcdFx0XHRcdFx0cm9vdF92bS5nYW1lX3ZtLnN0YWdlLmN1cnJlbnRfYmxvY2subGVmdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAzODogLy8gdXBcblx0XHRcdFx0XHRcdGRkKFwidXBcIik7XG5cdFx0XHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc2NlbmUoKSA9PSBQTEFZSU5HKXtcblx0XHRcdFx0XHRcdFx0cm9vdF92bS5nYW1lX3ZtLnN0YWdlLmN1cnJlbnRfYmxvY2sucm90YXRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdFx0XHRpZihyb290X3ZtLmdhbWVfdm0uc2NlbmUoKSA9PSBQTEFZSU5HKXtcblx0XHRcdFx0XHRcdFx0aWYocm9vdF92bS5nYW1lX3ZtLnN0YWdlLmN1cnJlbnRfYmxvY2suZG93bigpID09IGZhbHNlKXtcblx0XHRcdFx0XHRcdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UubmV4dEJsb2NrKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIOOCt+ODvOODs+OCkuOCueOCv+ODvOODiOOBq+WIh+OCiuabv+OBiOOBpuODhuODiOODquOCueOBruOCsuODvOODoOOCkumWi+Wni+OBmeOCi1xuXHRcdHN0YXJ0KCl7XG5cdFx0XHQvLyBrbm9ja291dOOBruODk+ODpeODvOOBi+OCieWRvOOBsOOCjOOBn+aZguOAgXRoaXPjgYxyb290X3Zt44Gr44Gq44Gj44Gm44GX44G+44GG44Gf44KBXG5cdFx0XHQvLyB0aGlzLm1ldGhvZCgp44Gn44Gv44Gq44GPcm9vdF92bS5nYW1lX3ZtLm1ldGhvZCgp44Go44GX44Gm44GE44KLXG5cdFx0XHRyb290X3ZtLmdhbWVfdm0uc2NlbmUoUExBWUlORyk7XG5cdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2Uuc3RhcnQoKTtcblx0XHRcdFxuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zjgavjgZnjgotcblx0XHRnYW1lT3Zlcigpe1xuXHRcdFx0cm9vdF92bS5nYW1lX3ZtLnNjZW5lKEdBTUVPVkVSKTtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5wYXVzZSgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcblx0XHR9XG5cdFx0Ly8g44K544K/44O844OI44Gr5oi744KLXG5cdFx0cmVzZXQoKXtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zY2VuZShTVEFSVCk7XG5cdFx0XHRyb290X3ZtLmJvYXJkX3ZtLnJlc2V0KCk7XG5cdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UucmVzZXQoKTtcblx0XHRcdHJvb3Rfdm0uc2NvcmVfdm0ucmVzZXQoKTtcblx0XHR9XG5cdFx0Ly8g44K344On44OD44OX44Gr5YWl44KLXG5cdFx0c2hvcCgpe1xuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6DjgpLkuIDml6blgZzmraLjgZnjgotcblx0XHRwYXVzZSgpe1xuXHRcdFx0cm9vdF92bS5nYW1lX3ZtLnNjZW5lKFBBVVNFKTtcblx0XHRcdHJvb3Rfdm0uZ2FtZV92bS5zdGFnZS5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXHQvLyDjg4bjg4jjg6rjgrnjga7jgrLjg7zjg6DjgpLnrqHnkIbjgZnjgotcblx0Y2xhc3MgU3RhZ2V7XG5cdFx0Y29uc3RydWN0b3IoKXtcblx0XHRcdHRoaXMuaW50ZXJ2YWxJZCA9IDA7XG5cdFx0XHR0aGlzLmN1cnJlbnRfYmxvY2sgPSBudWxsO1xuXHRcdFx0dGhpcy5ibG9ja3MgPSBbSUJsb2NrLExCbG9jayxKQmxvY2ssVEJsb2NrLE9CbG9jayxaQmxvY2ssU0Jsb2NrXTtcblx0XHRcdHRoaXMuYWRkQmxvY2soKTtcblx0XHRcdHRoaXMuY3VycmVudF9ibG9jay5kcmF3KCk7XG5cdFx0fVxuXHRcdC8vIOOCsuODvOODoOOCkumWi+Wni+OBmeOCi1xuXHRcdHN0YXJ0KCl7XG5cdFx0XHR0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKT0+e3RoaXMuZnJhbWUoKTt9LCBTUEVFRF9MSVNUWzBdKTtcblx0XHR9XG5cdFx0Y2hhbmdlU3BlZWQoc3BlZWQpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdFx0dGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLmZyYW1lKCk7fSwgc3BlZWQpO1xuXHRcdH1cblx0XHQvLyDjgrLjg7zjg6DjgpLkuIDml6blgZzmraJcblx0XHRwYXVzZSgpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdH1cblx0XHRyZXNldCgpe1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXHRcdFx0dGhpcy5hZGRCbG9jaygpO1xuXHRcdFx0dGhpcy5jdXJyZW50X2Jsb2NrLmRyYXcoKTtcblx0XHR9XG5cdFx0Ly8g44K544OG44O844K444Gr5paw44GX44GE44OW44Ot44OD44Kv44KS6L+95YqgXG5cdFx0YWRkQmxvY2soKXtcblx0XHRcdC8vIOOBqOOCiuOBguOBiOOBmuOAgUlCbG9ja+OBoOOBkei/veWKoOOBmeOCi1xuXHRcdFx0Ly8g44Op44Oz44OA44Og44Gr6L+95Yqg44GV44KM44KL44KI44GG44Gr44GZ44KLXG5cdFx0XHRsZXQgYmxvY2sgPSB0aGlzLmJsb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJsb2Nrcy5sZW5ndGgpXTtcblx0XHRcdHRoaXMuY3VycmVudF9ibG9jayA9IG5ldyBibG9jaygoQ09MX05VTSAtIDIpIC8gMiwgMCk7XG5cdFx0fVxuXHRcdC8vIOePvuWcqOOBruODluODreODg+OCr+OCkuWbuuWumuOBl+OBpuOAgeaWsOOBl+OBhOODluODreODg+OCr+OCkuOCueODhuODvOOCuOOBq+i/veWKoFxuXHRcdG5leHRCbG9jaygpe1xuXHRcdFx0dGhpcy5jdXJyZW50X2Jsb2NrLmZyZWV6ZSgpO1xuXHRcdFx0cm9vdF92bS5ib2FyZF92bS5jaGVja0xpbmUoKTtcblx0XHRcdHRoaXMuYWRkQmxvY2soKTtcblx0XHR9XG5cdFx0Ly8g5LiA5a6a6ZaT6ZqU44GU44Go44Gr44OW44Ot44OD44Kv44KS5LiL44Gr6JC944Go44Gd44GG44Go44GZ44KL44CCXG5cdFx0ZnJhbWUoKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiZnJhbWVcIik7XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRfYmxvY2suZG93bigpID09IGZhbHNlKXtcblx0XHRcdFx0dGhpcy5uZXh0QmxvY2soKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8g44OW44Ot44OD44Kv44KS5qeL5oiQ44GZ44KL44K/44Kk44OrXG5cdC8vIOe1tuWvvuW6p+aomeOCkuaMgeOBpFxuXHRjbGFzcyBUaWxle1xuXHRcdGNvbnN0cnVjdG9yKHgseSxibG9jayl7XG5cdFx0XHR0aGlzLnBvc1ggPSB4O1xuXHRcdFx0dGhpcy5wb3NZID0geTtcblx0XHRcdHRoaXMuYmxvY2sgPSBibG9jaztcblx0XHR9XG5cdFx0cG9zWFlSZWxhdGl2ZVRvQmxvY2soKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHRoaXMucG9zWCAtIHRoaXMuYmxvY2sucG9zWCxcblx0XHRcdFx0eTogdGhpcy5wb3NZIC0gdGhpcy5ibG9jay5wb3NZXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvLyDjg5bjg63jg4Pjgq9cblx0Y2xhc3MgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHRoaXMucG9zWCA9IHg7XG5cdFx0XHR0aGlzLnBvc1kgPSB5O1xuXHRcdFx0dGhpcy50aWxlcyA9IFtdO1xuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLmp4vmiJDjgZnjgovjgr/jgqTjg6vjgpLov73liqBcblx0XHQvLyBkeOOBiuOCiOOBs2R544Gv55u45a++55qE44Gq5bqn5qiZXG5cdFx0YWRkVGlsZShkeCxkeSl7XG5cdFx0XHR0aGlzLnRpbGVzLnB1c2gobmV3IFRpbGUodGhpcy5wb3NYICsgZHgsIHRoaXMucG9zWSArIGR5LHRoaXMpKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5LiL44Gr56e75YuV44GV44Gb44KLXG5cdFx0Ly8g5aSx5pWX44GX44Gf5pmCZmFsc2XjgpLov5TjgZlcblx0XHRkb3duKCl7XG5cdFx0XHRpZih0aGlzLmNhbk1vdmUoMCwxKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0dGhpcy5tb3ZlKDAsMSk7XG5cdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5Y+z44Gr56e75YuV44GV44Gb44KLXG5cdFx0Ly8g5aSx5pWX44GX44Gf5pmCZmFsc2XjgpLov5TjgZlcblx0XHRyaWdodCgpe1xuXHRcdFx0aWYodGhpcy5jYW5Nb3ZlKDEsMCkpe1xuXHRcdFx0XHR0aGlzLmVyYXNlKCk7XG5cdFx0XHRcdHRoaXMubW92ZSgxLDApO1xuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLlt6bjgavnp7vli5XjgZXjgZvjgotcblx0XHQvLyDlpLHmlZfjgZfjgZ/mmYJmYWxzZeOCkui/lOOBmVxuXHRcdGxlZnQoKXtcblx0XHRcdGlmKHRoaXMuY2FuTW92ZSgtMSwwKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0dGhpcy5tb3ZlKC0xLDApO1xuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRYWUJ5Um90YXRpbm8odGlsZSl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiAtKHRpbGUucG9zWFlSZWxhdGl2ZVRvQmxvY2soKS55KSArIDIgKyB0aGlzLnBvc1gsXG5cdFx0XHRcdHk6IHRpbGUucG9zWFlSZWxhdGl2ZVRvQmxvY2soKS54ICsgdGhpcy5wb3NZXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjYW5Sb3RhdGUoKXtcblx0XHRcdGZvcihsZXQgdGlsZSBvZiB0aGlzLnRpbGVzKXtcblx0XHRcdFx0bGV0IHBvcyA9IHRoaXMuZ2V0WFlCeVJvdGF0aW5vKHRpbGUpO1xuXHRcdFx0XHRpZihwb3MueCA8IENPTF9OVU0gJiZcblx0XHRcdFx0ICAgcG9zLnggPj0gMCAmJlxuXHRcdFx0XHQgICBwb3MueSA+PSAwICYmXG5cdFx0XHRcdCAgIHBvcy55IDwgUk9XX05VTSl7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gcm9vdF92bS5ib2FyZF92bS5nZXRTcXVhcmVWYWx1ZShwb3MueCxwb3MueSk7XG5cdFx0XHRcdFx0aWYodmFsdWUgPT0gRlJFRVpFRCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyDjg5bjg63jg4Pjgq/jgpLlj7Pjgas5MOW6puWbnui7ouOBleOBm+OCi1xuXHRcdHJvdGF0ZSgpe1xuXHRcdFx0aWYodGhpcy5jYW5Sb3RhdGUoKSl7XG5cdFx0XHRcdHRoaXMuZXJhc2UoKTtcblx0XHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRcdGxldCBwb3MgPSB0aGlzLmdldFhZQnlSb3RhdGlubyh0aWxlKTtcblx0XHRcdFx0XHR0aWxlLnBvc1ggPSBwb3MueDtcblx0XHRcdFx0XHR0aWxlLnBvc1kgPSBwb3MueTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyDnp7vli5XjgZnjgovjgZPjgajjgYzjgafjgY3jgovjgYvjgpLnnJ/lgb3lgKTjgafov5TjgZlcblx0XHQvLyBkeOOBr+OBqeOCjOOBoOOBkeWPs+OBq+WLleOBi+OBmeOBi1xuXHRcdC8vIGR544Gv44Gp44KM44Gg44GR5LiL44Gr5YuV44GL44GZ44GLXG5cdFx0Y2FuTW92ZShkeCwgZHkpe1xuXHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRsZXQgeCA9IHRpbGUucG9zWCArIGR4O1xuXHRcdFx0XHRsZXQgeSA9IHRpbGUucG9zWSArIGR5XG5cdFx0XHRcdGlmKHggPCBDT0xfTlVNICYmXG5cdFx0XHRcdCAgIHggPj0gMCAmJlxuXHRcdFx0XHQgICB5IDwgUk9XX05VTSl7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gcm9vdF92bS5ib2FyZF92bS5nZXRTcXVhcmVWYWx1ZSh4LHkpO1xuXHRcdFx0XHRcdGlmKHZhbHVlID09IEZSRUVaRUQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5YuV44GL44GZXG5cdFx0Ly8gZHjjga/jganjgozjgaDjgZHlj7Pjgavli5XjgYvjgZnjgYtcblx0XHQvLyBkeeOBr+OBqeOCjOOBoOOBkeS4i+OBq+WLleOBi+OBmeOBi1xuXHRcdG1vdmUoZHgsZHkpe1xuXHRcdFx0dGhpcy5wb3NYICs9IGR4O1xuXHRcdFx0dGhpcy5wb3NZICs9IGR5O1xuXHRcdFx0Zm9yKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHR0aWxlLnBvc1ggKz0gZHg7XG5cdFx0XHRcdHRpbGUucG9zWSArPSBkeTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5Zu65a6a5YyW44GZ44KLXG5cdFx0Ly8g5a6f6Zqb44Gr44Gv44OW44Ot44OD44Kv44Gu44K/44Kk44Or44KS44Oc44O844OJ44Gr5pu444GN6L6844KAXG5cdFx0ZnJlZXplKCl7XG5cdFx0XHR0aGlzLmRyYXdCb2FyZChGUkVFWkVEKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS5raI44GZXG5cdFx0ZXJhc2UoKXtcblx0XHRcdHRoaXMuZHJhd0JvYXJkKEVNUFRZKTtcblx0XHR9XG5cdFx0Ly8g44OW44Ot44OD44Kv44KS44Oc44O844OJ44Gr5o+P55S744GZ44KLXG5cdFx0ZHJhdygpe1xuXHRcdFx0dGhpcy5kcmF3Qm9hcmQoQUNUSVZFRCk7XG5cdFx0fVxuXHRcdGRyYXdCb2FyZChzcXVhcmVfc3RhdHVzKXtcblx0XHRcdGZvcihsZXQgdCBvZiB0aGlzLnRpbGVzKXtcblx0XHRcdFx0cm9vdF92bS5ib2FyZF92bS5zcXVhcmVzW3QucG9zWV1bdC5wb3NYXS52YWx1ZShzcXVhcmVfc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hlY2tHYW1lT3Zlcigpe1xuXHRcdFx0Zm9yKGxldCB0IG9mIHRoaXMudGlsZXMpe1xuXHRcdFx0XHRpZihyb290X3ZtLmJvYXJkX3ZtLnNxdWFyZXNbdC5wb3NZXVt0LnBvc1hdLnZhbHVlKCkgPT0gRlJFRVpFRCl7XG5cdFx0XHRcdFx0cm9vdF92bS5nYW1lX3ZtLmdhbWVPdmVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gKlxuXHQvLyAqXG5cdC8vICpcblx0Ly8gKlxuXHRjbGFzcyBJQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDMpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gKlxuXHQvLyAqXG5cdC8vICogKlxuXHRjbGFzcyBMQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDIpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gICAqXG5cdC8vICAgKlxuXHQvLyAqICpcblx0Y2xhc3MgSkJsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwwKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMik7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwyKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fVxuXHR9XG5cdC8vICpcblx0Ly8gKiAqXG5cdC8vICpcblx0Y2xhc3MgVEJsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwwKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgwLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwxKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fVxuXHR9XG5cdC8vICogKlxuXHQvLyAqICpcblx0Y2xhc3MgT0Jsb2NrIGV4dGVuZHMgQmxvY2t7XG5cdFx0Y29uc3RydWN0b3IoeCx5KXtcblx0XHRcdHN1cGVyKHgseSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDIpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMiwyKTtcblx0XHRcdHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XHRcdFx0XG5cdFx0fVxuXHR9XG5cdC8vICogKlxuXHQvLyAgICogKlxuXHRjbGFzcyBaQmxvY2sgZXh0ZW5kcyBCbG9ja3tcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xuXHRcdFx0c3VwZXIoeCx5KTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDApO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMSk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgxLDIpO1xuXHRcdFx0dGhpcy5jaGVja0dhbWVPdmVyKCk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdH1cblx0Ly8gICAqICpcblx0Ly8gKiAqXG5cdGNsYXNzIFNCbG9jayBleHRlbmRzIEJsb2Nre1xuXHRcdGNvbnN0cnVjdG9yKHgseSl7XG5cdFx0XHRzdXBlcih4LHkpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDEsMCk7XG5cdFx0XHR0aGlzLmFkZFRpbGUoMSwxKTtcblx0XHRcdHRoaXMuYWRkVGlsZSgyLDEpO1xuXHRcdFx0dGhpcy5hZGRUaWxlKDIsMik7XG5cdFx0XHR0aGlzLmNoZWNrR2FtZU92ZXIoKTtcblx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOebpOmdouOBruS4gOOBpOS4gOOBpOOBruODnuOCuVxuXHRjbGFzcyBTcXVhcmV7XG5cdFx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdFx0dGhpcy52YWx1ZSA9IGtvLm9ic2VydmFibGUodmFsdWUpO1xuXHRcdFx0dGhpcy50ZXh0ID0ga28uY29tcHV0ZWQoKCk9Pntcblx0XHRcdFx0c3dpdGNoKHRoaXMudmFsdWUoKSl7XG5cdFx0XHRcdGNhc2UgRU1QVFk6XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHRjYXNlIEFDVElWRUQ6XG5cdFx0XHRcdFx0cmV0dXJuICdhY3RpdmVkJztcblx0XHRcdFx0Y2FzZSBGUkVFWkVEOlxuXHRcdFx0XHRcdHJldHVybiAnZnJlZXplZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvLyDnm6TpnaJcblx0Y2xhc3MgQm9hcmRWaWV3TW9kZWx7XG5cdFx0Y29uc3RydWN0b3IoKXtcblx0XHRcdHZhciB4O1xuXHRcdFx0dmFyIHk7XG5cdFx0XHR0aGlzLnNxdWFyZXMgPSBbXTtcblx0XHRcdGZvcih5ID0gMDsgeSA8IFJPV19OVU07IHkrKyl7XG5cdFx0XHRcdHRoaXMuc3F1YXJlc1t5XSA9IFtdO1xuXHRcdFx0XHRmb3IoeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1t5XVt4XSA9IG5ldyBTcXVhcmUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzZXQoKXtcblx0XHRcdHZhciB4O1xuXHRcdFx0dmFyIHk7XG5cdFx0XHRmb3IoeSA9IDA7IHkgPCBST1dfTlVNOyB5Kyspe1xuXHRcdFx0XHRmb3IoeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1t5XVt4XS52YWx1ZShFTVBUWSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U3F1YXJlVmFsdWUoeCx5KXtcblx0XHRcdHJldHVybiB0aGlzLnNxdWFyZXNbeV1beF0udmFsdWUoKTtcblx0XHR9XG5cdFx0Y2hlY2tMaW5lKCl7XG5cdFx0XHRsZXQgeSA9IFJPV19OVU0gLSAxO1xuXHRcdFx0bGV0IHggPSAwO1xuXHRcdFx0bGV0IGNsZWFyZWRfbGluZV9udW0gPSAwO1xuXHRcdFx0d2hpbGUoeSA+PSAwKXtcblx0XHRcdFx0bGV0IGZsYWcgPSB0cnVlO1xuXHRcdFx0XHRmb3IoeD0wOyB4IDwgQ09MX05VTTsgeCsrKXtcblx0XHRcdFx0XHRpZih0aGlzLnNxdWFyZXNbeV1beF0udmFsdWUoKSAhPSBGUkVFWkVEKXtcblx0XHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihmbGFnID09IHRydWUpe1xuXHRcdFx0XHRcdHRoaXMuY2xlYXJMaW5lKHkpO1xuXHRcdFx0XHRcdGNsZWFyZWRfbGluZV9udW0rKztcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0eS0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyb290X3ZtLnNjb3JlX3ZtLmFkZENsZWFyZGxpbmUoY2xlYXJlZF9saW5lX251bSk7XG5cdFx0fVxuXHRcdGNsZWFyTGluZSh5KXtcblx0XHRcdC8vIOauteOCkuOBmuOCieOBl+OBpuihjOOBj1xuXHRcdFx0Zm9yKGxldCBjeSA9IHk7IGN5ID4gMDsgY3ktLSl7XG5cdFx0XHRcdGZvcihsZXQgY3ggPSAwOyBjeCA8IENPTF9OVU07IGN4Kyspe1xuXHRcdFx0XHRcdHRoaXMuc3F1YXJlc1tjeV1bY3hdLnZhbHVlKHRoaXMuc3F1YXJlc1tjeS0xXVtjeF0udmFsdWUoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJPV19OVU3mrrXnm67jgavnqbrjga5zcXVhcmXjgpLov73liqDjgZnjgovjgIJcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBDT0xfTlVNOyB4Kyspe1xuXHRcdFx0XHR0aGlzLnNxdWFyZXNbMF1beF0udmFsdWUoRU1QVFkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjbGFzcyBTY29yZVZpZXdNb2RlbHtcblx0XHRjb25zdHJ1Y3Rvcigpe1xuXHRcdFx0dGhpcy5saW5lID0ga28ub2JzZXJ2YWJsZSgpO1xuXHRcdFx0dGhpcy5zY29yZSA9IGtvLm9ic2VydmFibGUoKTtcblx0XHRcdHRoaXMuc3BlZWQgPSBrby5vYnNlcnZhYmxlKCk7XG5cdFx0XHR0aGlzLmxldmVsID0ga28ub2JzZXJ2YWJsZSgpO1xuXHRcdFx0dGhpcy50d2VldCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBtZXNzYWdlID0gJ+ODqeOCpOODs+OCkidcblx0XHRcdFx0XHQrdGhpcy5saW5lKCkrJ+acrOa2iOOBl+OBpuOAgeOCueOCs+OCouOCkidcblx0XHRcdFx0XHQrdGhpcy5zY29yZSgpKyfngrnnjbLlvpfjgZfjgZ/jgognXG5cdFx0XHRcdFx0KycgLyAnXG5cdFx0XHRcdFx0K2RvY3VtZW50LnRpdGxlXG5cdFx0XHRcdFx0KycgLSAnXG5cdFx0XHRcdFx0K2xvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdHZhciBmPSdodHRwOi8vdHdpdHRlci5jb20vP3N0YXR1cz0nXG5cdFx0XHRcdFx0K2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcblx0XHRcdFx0aWYoIXdpbmRvdy5vcGVuKGYsJ3N1cmZpbmcnKSl7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZj1mOyB2b2lkKDApO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fVxuXHRcdHJlc2V0KCl7XG5cdFx0XHR0aGlzLmxpbmUoMCk7XG5cdFx0XHR0aGlzLnNjb3JlKDApO1xuXHRcdFx0dGhpcy5zcGVlZChTUEVFRF9MSVNUWzBdKTtcblx0XHRcdHRoaXMubGV2ZWwoMSk7XG5cdFx0fVxuXHRcdGFkZENsZWFyZGxpbmUobnVtKXtcblx0XHRcdHRoaXMubGluZSh0aGlzLmxpbmUoKSArIG51bSk7XG5cdFx0XHRsZXQgYm9udXMgPSAwO1xuXHRcdFx0c3dpdGNoKG51bSl7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGJvbnVzID0gMTAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Ym9udXMgPSAzMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRib251cyA9IDEwMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRib251cyA9IDUwMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zY29yZSh0aGlzLnNjb3JlKCkgKyBib251cyk7XG5cdFx0XHQvLyDjg6njgqTjg7PjgpIxMOacrOa2iOOBmeW6puOBq+ODrOODmeODq+OCkuS4iuOBkuOCi1xuXHRcdFx0aWYodGhpcy5saW5lKCkgPiB0aGlzLmxldmVsKCkgKiAxMCl7XG5cdFx0XHRcdHRoaXMubGV2ZWwodGhpcy5sZXZlbCgpICsxKTtcblx0XHRcdFx0dGhpcy5zcGVlZChTUEVFRF9MSVNUW3RoaXMubGV2ZWwoKV0pO1xuXHRcdFx0XHRyb290X3ZtLmdhbWVfdm0uc3RhZ2UuY2hhbmdlU3BlZWQodGhpcy5zcGVlZCgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cm9vdF92bS5zY29yZV92bSA9IG5ldyBTY29yZVZpZXdNb2RlbCgpO1xuXHRyb290X3ZtLmJvYXJkX3ZtID0gbmV3IEJvYXJkVmlld01vZGVsKCk7XG5cdHJvb3Rfdm0uZ2FtZV92bSA9IG5ldyBHYW1lVmlld01vZGVsKCk7XG5cdGtvLmFwcGx5QmluZGluZ3Mocm9vdF92bSk7XG59KTtcbiJdfQ==
