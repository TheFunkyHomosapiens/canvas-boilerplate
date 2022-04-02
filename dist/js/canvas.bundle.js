/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/idle_left.png":
/*!*******************************!*\
  !*** ./src/img/idle_left.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2fd48b556da9e03036a9247531843759.png");

/***/ }),

/***/ "./src/img/idleright.png":
/*!*******************************!*\
  !*** ./src/img/idleright.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e55380cc6b382d3f8d4c67faee4dbac.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fa0db6a71a3f1b88030cff24fd4e5f39.png");

/***/ }),

/***/ "./src/img/run_left.png":
/*!******************************!*\
  !*** ./src/img/run_left.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aaa5dd51bea3966a92d1ceed1362d6ad.png");

/***/ }),

/***/ "./src/img/run_right.png":
/*!*******************************!*\
  !*** ./src/img/run_right.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "70469077bea87bca7831e2382a09c0e9.png");

/***/ }),

/***/ "./src/img/tło1.png":
/*!**************************!*\
  !*** ./src/img/tło1.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "18153e76633d23dbf0a1286e18efd88e.png");

/***/ }),

/***/ "./src/img/tło2.png":
/*!**************************!*\
  !*** ./src/img/tło2.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ac7a9d5bc549e1f080b6d4122ae78f81.png");

/***/ }),

/***/ "./src/img/tło3.png":
/*!**************************!*\
  !*** ./src/img/tło3.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd42e17b2b0a537b5e5aef8a25dbfac3.png");

/***/ }),

/***/ "./src/img/tło4.png":
/*!**************************!*\
  !*** ./src/img/tło4.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "41b33320dcff9fd9b4d88db815a99b79.png");

/***/ }),

/***/ "./src/img/tło5.png":
/*!**************************!*\
  !*** ./src/img/tło5.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a311cfd4e522a24e0b6561638df9e3b.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_t_o5_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tło5.png */ "./src/img/tło5.png");
/* harmony import */ var _img_t_o4_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/tło4.png */ "./src/img/tło4.png");
/* harmony import */ var _img_t_o3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/tło3.png */ "./src/img/tło3.png");
/* harmony import */ var _img_t_o1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/tło1.png */ "./src/img/tło1.png");
/* harmony import */ var _img_t_o2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/tło2.png */ "./src/img/tło2.png");
/* harmony import */ var _img_idleright_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/idleright.png */ "./src/img/idleright.png");
/* harmony import */ var _img_idle_left_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/idle_left.png */ "./src/img/idle_left.png");
/* harmony import */ var _img_run_right_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/run_right.png */ "./src/img/run_right.png");
/* harmony import */ var _img_run_left_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/run_left.png */ "./src/img/run_left.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










 // Zmienne główne

var canvas = document.querySelector('canvas');
var screen = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.2; // Klasy 

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 300
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 100;
    this.height = 156;
    this.image = createImage(_img_idleright_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_idleright_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 310.3,
        width: 100,
        left: createImage(_img_idle_left_png__WEBPACK_IMPORTED_MODULE_7__["default"])
      },
      run: {
        right: createImage(_img_run_right_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_img_run_left_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        cropWidth: 415,
        width: 130
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 310.3;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 500, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 29) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.width = image.width;
    this.height = 30;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var BackgroundObject = /*#__PURE__*/function () {
  function BackgroundObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, BackgroundObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(BackgroundObject, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return BackgroundObject;
}();

var SkyObject = /*#__PURE__*/function () {
  function SkyObject(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

    _classCallCheck(this, SkyObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(SkyObject, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return SkyObject;
}();

var CloudsObject = /*#__PURE__*/function () {
  function CloudsObject(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image;

    _classCallCheck(this, CloudsObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(CloudsObject, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return CloudsObject;
}();

var FarCloudsObject = /*#__PURE__*/function () {
  function FarCloudsObject(_ref6) {
    var x = _ref6.x,
        y = _ref6.y,
        image = _ref6.image;

    _classCallCheck(this, FarCloudsObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(FarCloudsObject, [{
    key: "draw",
    value: function draw() {
      screen.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return FarCloudsObject;
}(); // Funkcja ładowania obrazów


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} // Zmienne klas


var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: 510,
  image: platformImage
}), new Platform({
  x: 400,
  y: 510,
  image: platformImage
}), new Platform({
  x: 1000,
  y: 310,
  image: platformImage
}), new Platform({
  x: 1700,
  y: 510,
  image: platformImage
}), new Platform({
  x: 2350,
  y: 350,
  image: platformImage
}), new Platform({
  x: 3000,
  y: 200,
  image: platformImage
}), new Platform({
  x: 3700,
  y: 330,
  image: platformImage
}), new Platform({
  x: 4300,
  y: 510,
  image: platformImage
}), new Platform({
  x: 5100,
  y: 510,
  image: platformImage
}), new Platform({
  x: 5800,
  y: 400,
  image: platformImage
}), new Platform({
  x: 6550,
  y: 510,
  image: platformImage
}), new Platform({
  x: 6950,
  y: 510,
  image: platformImage
})];
var farCloudsObject = [new FarCloudsObject({
  x: -2,
  y: -2,
  image: createImage(_img_t_o5_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var cloudsObject = [new CloudsObject({
  x: -2,
  y: -2,
  image: createImage(_img_t_o4_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var skyObject = [new SkyObject({
  x: -2,
  y: -2,
  image: createImage(_img_t_o3_png__WEBPACK_IMPORTED_MODULE_3__["default"])
})];
var backgroundObject = [new BackgroundObject({
  x: -2,
  y: -2,
  image: createImage(_img_t_o2_png__WEBPACK_IMPORTED_MODULE_5__["default"])
})];
var genericObjects = [new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_img_t_o1_png__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};
var scrollOffset = 0;
var framesPerSecond = 55; // Pętla gry

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
    screen.fillStyle = 'white';
    screen.fillRect(0, 0, canvas.width, canvas.height);
    skyObject.forEach(function (skyObject) {
      skyObject.draw();
    });
    farCloudsObject.forEach(function (farCloudsObject) {
      farCloudsObject.draw();
    });
    cloudsObject.forEach(function (cloudsObject) {
      cloudsObject.draw();
    });
    backgroundObject.forEach(function (backgroundObject) {
      backgroundObject.draw();
    });
    genericObjects.forEach(function (genericObjects) {
      genericObjects.draw();
    });
    platforms.forEach(function (platform) {
      platform.draw();
    });
    player.update(); // Efekt poryszającego się gracza, przesuwające się tło
    // oraz efekt parallax dla warstw tła

    if (keys.right.pressed && player.position.x < 450) {
      player.velocity.x = 8;
    } else if (keys.left.pressed && player.position.x > 450) {
      player.velocity.x = -8;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += 8;
        platforms.forEach(function (platform) {
          platform.position.x -= 8;
        });
        genericObjects.forEach(function (genericObjects) {
          genericObjects.position.x -= 4.5;
        });
        backgroundObject.forEach(function (backgroundObject) {
          backgroundObject.position.x -= 3.5;
        });
        skyObject.forEach(function (skyObject) {
          skyObject.position.x -= 1;
        });
        cloudsObject.forEach(function (cloudsObject) {
          cloudsObject.position.x -= 1.5;
        });
        farCloudsObject.forEach(function (farCloudsObject) {
          farCloudsObject.position.x -= 1;
        });
      } else if (keys.left.pressed) {
        scrollOffset -= 8;
        platforms.forEach(function (platform) {
          platform.position.x += 8;
        });
        genericObjects.forEach(function (genericObjects) {
          genericObjects.position.x += 4.5;
        });
        backgroundObject.forEach(function (backgroundObject) {
          backgroundObject.position.x += 3.5;
        });
        skyObject.forEach(function (skyObject) {
          skyObject.position.x += 1;
        });
        cloudsObject.forEach(function (cloudsObject) {
          cloudsObject.position.x += 1.5;
        });
        farCloudsObject.forEach(function (farCloudsObject) {
          farCloudsObject.position.x += 1;
        });
      }
    } // Kolizja z platformą od góry i boków


    platforms.forEach(function (platform) {
      if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0;
      }
    }); // Kolizja z platformą od dołu i boków

    platforms.forEach(function (platform) {
      if (player.position.y >= platform.position.y && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 5;
      }
    });

    if (scrollOffset > 3000) {
      console.log('Wygrałeś !!!');
    } else if (scrollOffset < -100) {
      console.log('Zmień kierunek !!!');
    }
  }, 1000 / framesPerSecond);
}

animate(); // Obsługa klawiszy sterujących

addEventListener('keydown', function (_ref7) {
  var key = _ref7.key;

  switch (key) {
    case "a":
      console.log('left');
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = 415.25;
      player.width = player.sprites.run.width;
      break;

    case "d":
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = 414.75;
      player.width = player.sprites.run.width;
      break;

    case "w":
      console.log('up');
      keys.jump.pressed = true;
      player.velocity.y -= 10;
      break;

    case "s":
      console.log('down');
      break;
  }

  console.log(keys.left.pressed);
});
addEventListener('keyup', function (_ref8) {
  var key = _ref8.key;

  switch (key) {
    case "a":
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = 311.3;
      player.width = player.sprites.stand.width;
      break;

    case "d":
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = 310.2;
      player.width = player.sprites.stand.width;
      break;

    case "w":
      keys.jump.pressed = false;
      player.velocity.y -= 0;
      break;

    case "s":
      break;
  }

  console.log(keys.left.pressed);
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map