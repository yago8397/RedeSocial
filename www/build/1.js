webpackJsonp([1],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageModule", function() { return NoticiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticiasPageModule = /** @class */ (function () {
    function NoticiasPageModule() {
    }
    NoticiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* NoticiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* NoticiasPage */]),
            ],
        })
    ], NoticiasPageModule);
    return NoticiasPageModule;
}());

//# sourceMappingURL=noticias.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_NoticiaService__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, navParams, noticiasService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticiasService = noticiasService;
        this.noticias = [];
        this.noticiasService.getNoticias()
            .subscribe(function (respose) {
            console.log(respose);
            _this.noticias = respose;
        });
    }
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\rede-social\src\pages\noticias\noticias.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Noticias</ion-title>\n    <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    \n      <ion-card *ngFor="let p of noticias">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{p.foto}}">\n          </ion-avatar>\n          <h2>{{p.name}}</h2>\n          <h3>{{p.titulo}}</h3>\n        </ion-item>\n      \n        <img src="{{p.image}}">\n      \n        <ion-card-content>\n          <p>{{p.texto}}</p>\n        </ion-card-content>\n        \n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>Curtir</div>\n            </button>\n          </ion-col>\n          \n          <ion-col text-center>\n              <button ion-button icon-start clear small>\n                <ion-icon name="repeat"></ion-icon>\n                <div>Compartilhar</div>\n              </button>\n            </ion-col>\n        </ion-row>\n        <ion-textarea placeholder="Comentarios"></ion-textarea>\n      \n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\rede-social\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_NoticiaService__["a" /* NoticiaService */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ })

});
//# sourceMappingURL=1.js.map