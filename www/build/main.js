webpackJsonp([4],{

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		691,
		3
	],
	"../pages/logoff/logoff.module": [
		692,
		2
	],
	"../pages/noticias/noticias.module": [
		693,
		1
	],
	"../pages/perfil/perfil.module": [
		694,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setLocalUser = function (value) {
        localStorage.setItem('user', value);
    };
    StorageService.prototype.getLocalUser = function () {
        return localStorage.getItem('user');
    };
    StorageService.prototype.setNullLocalUser = function () {
        localStorage.setItem('user', null);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticiaService = /** @class */ (function () {
    function NoticiaService(http) {
        this.http = http;
    }
    NoticiaService.prototype.getNoticias = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* APICONFIG */].url + "/noticias");
    };
    NoticiaService.prototype.getNoticia = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* APICONFIG */].url + "/noticias/" + id);
    };
    NoticiaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NoticiaService);
    return NoticiaService;
}());

//# sourceMappingURL=NoticiaService.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_firebase_config__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_storage_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_NoticiaService__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logoff/logoff.module#LogoffPageModule', name: 'LogoffPage', segment: 'logoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__config_firebase_config__["a" /* FirebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_10__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_11__services_NoticiaService__["a" /* NoticiaService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APICONFIG; });
var APICONFIG = {
    url: 'http://www.mocky.io/v2/5c004c933200006300b2876b'
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, firebaseauth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.firebaseauth = firebaseauth;
        this.rootPage = 'HomePage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Perfil', component: 'PerfilPage' },
            { title: 'Notícias', component: 'NoticiasPage' },
            { title: 'Sair', component: 'LogoffPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.firebaseauth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = 'PerfilPage';
            }
            else {
                _this.rootPage = 'HomePage';
            }
        }, function () {
            _this.rootPage = 'HomePage';
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\rede-social\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\rede-social\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
var FirebaseConfig = {
    apiKey: "AIzaSyDq9-aFXgQJjwEcqhTD0eMy9fk8-S6MLiI",
    authDomain: "login-app-senac-2fc24.firebaseapp.com",
    databaseURL: "https://login-app-senac-2fc24.firebaseio.com",
    projectId: "login-app-senac-2fc24",
    storageBucket: "login-app-senac-2fc24.appspot.com",
    messagingSenderId: "558215407749"
};
//# sourceMappingURL=firebase.config.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map