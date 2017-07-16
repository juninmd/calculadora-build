webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_porcentagem_porcentagem_component__ = __webpack_require__("../../../../../src/app/pages/porcentagem/porcentagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_relatorio_relatorio_component__ = __webpack_require__("../../../../../src/app/pages/relatorio/relatorio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_suporte_suporte_component__ = __webpack_require__("../../../../../src/app/pages/suporte/suporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mensal_mensal_component__ = __webpack_require__("../../../../../src/app/pages/mensal/mensal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'porcentagem', component: __WEBPACK_IMPORTED_MODULE_2__pages_porcentagem_porcentagem_component__["a" /* PorcentagemComponent */] },
                    { path: 'relatorio', component: __WEBPACK_IMPORTED_MODULE_3__pages_relatorio_relatorio_component__["a" /* RelatorioComponent */] },
                    { path: 'suporte', component: __WEBPACK_IMPORTED_MODULE_4__pages_suporte_suporte_component__["a" /* SuporteComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__["a" /* HomeComponent */] },
                    { path: 'mensal', component: __WEBPACK_IMPORTED_MODULE_6__pages_mensal_mensal_component__["a" /* MensalComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__["a" /* HomeComponent */] },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <a routerLink=\"/\">\r\n    <h4 class=\"header title\">\r\n      Calculadora\r\n    </h4>\r\n  </a>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_porcentagem_porcentagem_component__ = __webpack_require__("../../../../../src/app/pages/porcentagem/porcentagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_relatorio_relatorio_component__ = __webpack_require__("../../../../../src/app/pages/relatorio/relatorio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_suporte_suporte_component__ = __webpack_require__("../../../../../src/app/pages/suporte/suporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mensal_mensal_component__ = __webpack_require__("../../../../../src/app/pages/mensal/mensal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_porcentagem_porcentagem_component__["a" /* PorcentagemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_relatorio_relatorio_component__["a" /* RelatorioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_suporte_suporte_component__["a" /* SuporteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mensal_mensal_component__["a" /* MensalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["MaterializeModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <a routerLink=\"/relatorio\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card blue-grey darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Relatório</span>\r\n          <p>Inicie a parametrização com todas as informações.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a routerLink=\"/porcentagem\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card red darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Porcentagem</span>\r\n          <p>Inicie a parametrização com todas as porcentagens prontas.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a routerLink=\"/mensal\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card blue darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Mensal</span>\r\n          <p>Verifique as despesas salvas por mês.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a (click)=\"limpar()\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card orange darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Limpar formulários</span>\r\n          <p>Limpe todos os campos memorizados da memória.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a href=\"mailto:jr_acn@yahoo.com.br\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card green darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Suporte</span>\r\n          <p>Reporte bugs ou sugestões de como melhorar a calculadora.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.limpar = function () {
        localStorage.removeItem('porcentagem');
        localStorage.removeItem('relatorio');
        sessionStorage.removeItem('tempRelatorio');
        Materialize.toast('Os campos armazenados foram limpos!', 4000);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/mensal/mensal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n        background: rebeccapurple;\r\n}\r\n    .card-content{\r\n            text-align: center;\r\n                color: white;\r\n}\r\n    .card-content span.big{\r\n            font-size: 25px;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mensal/mensal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card white darken-1\">\n    <div class=\"card-content black-text\">\n        <div class=\"row\">\n            <h5 class=\"header\">\n                Despesas por meses\n            </h5>\n        </div>\n        <div class=\"row\">\n            <div class=\"card col s12 m3 l3\" (click)=\"openModal(item)\" *ngFor=\"let item of meses\">\n                <div class=\"card-content\">\n                    <span class=\"big\">{{item.mes}}</span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n    <div class=\"modal-content\">\n        <h4 class=\"header\">Despesas - {{mes.mes}}</h4>\n\n        <div class=\"row\">\n\n            <div class=\"card col s3 m3 l3 white-text\" *ngFor=\"let x of mes.despesas\">\n                <div class=\"card-content\">\n                    <span>{{x.descricao}}<br>{{x.valor}}</span>\n                </div>\n            </div>\n\n            <div class=\"card col s3 m3 l3 white-text\" *ngFor=\"let x of mes.outrasDespesas\">\n                <div class=\"card-content\">\n                    <span>{{x.descricao}}<br>{{x.valor}}</span>\n                </div>\n            </div>\n        </div>\n\n        <h4 class=\"header\">Porcentagens</h4>\n        <div class=\"row\">\n            <div class=\"card col s3 m3 l3 white-text\" *ngFor=\"let x of mes.porcentagens\">\n                <div class=\"card-content\">\n                    <span>{{x.descricao}}<br>{{x.valor}}</span>\n                </div>\n            </div>\n        </div>\n\n        <h4 class=\"header\">Outros Itens</h4>\n\n        <div class=\"row\">\n            <div class=\"card col s3 m3 l3 white-text\">\n                <div class=\"card-content\">\n                    <span>Preço Mercadoria<br>{{mes.precoMercadoria}}</span>\n                </div>\n            </div>\n\n            <div class=\"card col s3 m3 l3 white-text\">\n                <div class=\"card-content\">\n                    <span>Faturamento<br>{{mes.faturamento}}</span>\n                </div>\n            </div>\n\n            <div class=\"card col s3 m3 l3 white-text\">\n                <div class=\"card-content\">\n                    <span>PV<br>{{mes.pv}}</span>\n                </div>\n            </div>\n\n            <div class=\"card col s3 m3 l3 white-text\">\n                <div class=\"card-content\">\n                    <span>Markup<br>{{mes.markup}}</span>\n                </div>\n            </div>\n\n            <div class=\"card col s3 m3 l3 white-text\">\n                <div class=\"card-content\">\n                    <span>Ponto Equilibrio<br>{{mes.pontoEquilibrio}}</span>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <a (click)=\"closeModal()\" class=\"btn btn-tiny waves-effect waves-light red left\"> Voltar</a>\n        <a class=\"modal-action modal-close waves-effect waves-green btn-flat\">Sair</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/mensal/mensal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensalComponent = (function () {
    function MensalComponent(router) {
        this.router = router;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.meses = [];
        this.mes = {};
    }
    MensalComponent.prototype.ngOnInit = function () {
        var storageMeses = localStorage.getItem("meses");
        if (storageMeses != null) {
            this.meses = JSON.parse(storageMeses);
        }
    };
    MensalComponent.prototype.openModal = function (mes) {
        this.mes = mes;
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    MensalComponent.prototype.closeModal = function () {
        this.router.navigate(['/']);
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    MensalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mensal',
            template: __webpack_require__("../../../../../src/app/pages/mensal/mensal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/mensal/mensal.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], MensalComponent);
    return MensalComponent;
    var _a;
}());
//# sourceMappingURL=mensal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/porcentagem/porcentagem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"text\"]:disabled {\r\n   color:white !important;\r\n}\r\n.whitesmoke{\r\n    color:whitesmoke !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/porcentagem/porcentagem.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"col s12\" #porcentagemForm=\"ngForm\" (ngSubmit)=\"calcularMarkup()\">\r\n    <div class=\"card white darken-1\">\r\n        <div class=\"card-content black-text\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                    <h5 class=\"header\">\r\n                        Porcentagem\r\n                    </h5>\r\n                    <span class=\"new badge red\" data-badge-caption=\"%\">Exemplo de porcentagem: 0,2</span>\r\n                </div>\r\n                <div class=\"collection col s12 m12 l3 destaque\">\r\n                    <div class=\"input-field col s12 m12\">\r\n                        <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"precoMercadoria\" name=\"precoMercadoria\" id=\"precoMercadoria\"\r\n                            class=\"validate\">\r\n                        <label class=\"active\">Preço Mercadoria R$</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"collection col s12 m12 l3 destaque\">\r\n                    <div class=\"input-field col s12 m12\">\r\n                        <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"somaDespesas\" name=\"somaDespesas\" id=\"somaDespesas\"\r\n                            class=\"validate\">\r\n                        <label class=\"active\">Soma Despesas R$</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"input-field col s12 m6 l6\" *ngFor=\"let item of principal\">\r\n                    <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\r\n                        required=\"required\" class=\"validate\">\r\n                    <label class=\"active\">{{item.descricao}}</label>\r\n                </div>\r\n\r\n            </div>\r\n            <footer class=\"page-footer\">\r\n                <div class=\"semicontainer black-text\">\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12 m4 l4\">\r\n                            <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"markup\" id=\"markup\" name=\"markup\">\r\n                            <label class=\"whitesmoke active\">Mark-UP:</label>\r\n                        </div>\r\n                        <div class=\"input-field col s12 m4 l4\">\r\n                            <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"pv\" id=\"pv\" name=\"pv\">\r\n                            <label class=\"whitesmoke active\">PV:</label>\r\n                        </div>\r\n                        <div class=\"input-field col s12 m4 l4\">\r\n                            <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"pontoEquilibrio\" id=\"pontoEquilibrio\" name=\"pontoEquilibrio\">\r\n                            <label class=\"whitesmoke active\">Ponto de Equilibrio:</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </footer>\r\n            <div class=\"row no-space\" *ngIf=\"exibeMensagemCarregado\">\r\n                <div class=\"input-field col s12 m6 l6 right\">\r\n                    <span class=\"new badge red\" data-badge-caption=\"\">As informações foram carregadas por você já ter salvo o formulário.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col inline right\">\r\n                    <button type=\"button\" (click)=\"salvar()\" [disabled]=\"!porcentagemForm.form.valid\" title=\"Salvar formulário\" class=\"btn-floating btn-tiny waves-effect waves-light blue\"><i class=\"material-icons\">cloud</i></button>\r\n                    <button type=\"submit\" [disabled]=\"!porcentagemForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light blue\"><i class=\"material-icons\">done</i></button>\r\n                </div>\r\n                <div class=\"input-field col s6 inline left\">\r\n                    <a routerLink=\"/\" class=\"btn btn-tiny waves-effect waves-light red\"> Voltar</a>\r\n                    <button type=\"button\" (click)=\"salvarMesAtual()\" [disabled]=\"!porcentagemForm.form.valid\" class=\"btn btn-tiny waves-effect waves-light blue\">Salvar mês {{mesAtual}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/porcentagem/porcentagem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorcentagemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PorcentagemComponent = (function () {
    function PorcentagemComponent(route) {
        this.route = route;
        this.despesas = null;
        this.somaDespesas = null;
        this.precoMercadoria = '';
        this.pv = '';
        this.pontoEquilibrio = '';
        this.markup = '';
        this.mesAtual = null;
        this.principal = [];
        this.exibeMensagemCarregado = false;
    }
    PorcentagemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exibeMensagemCarregado = localStorage.getItem("porcentagem") != null;
        var date = new Date();
        this.mesAtual = date.getFullYear() + "/" + (date.getMonth() + 1);
        this.route.params.subscribe(function (params) {
            if (params['despesas'] != null)
                _this.despesas = +params["despesas"];
            if (params['somaDespesas'] != null)
                _this.somaDespesas = +params["somaDespesas"];
            _this.principal = [
                {
                    valor: null,
                    descricao: '% Simples'
                },
                {
                    valor: null,
                    descricao: '% Lucro',
                    lucro: true
                },
                {
                    valor: _this.despesas,
                    descricao: '% Despesas',
                    activate: true
                },
                {
                    valor: null,
                    descricao: '% Comissão'
                },
                {
                    valor: null,
                    descricao: '% Frete'
                },
            ];
            _this.loadingSave();
        });
    };
    PorcentagemComponent.prototype.calcularMarkup = function () {
        var principal = this.principal.map(function (q) { return q.valor; }).reduce(function (sum, current) { return sum + current; });
        this.markup = (100 - principal) / 100;
        this.pv = (this.precoMercadoria / this.markup);
        this.calcularPontoEquilibrio();
        return false;
    };
    PorcentagemComponent.prototype.calcularPontoEquilibrio = function () {
        var lucro = this.principal.filter(function (q) { return q.lucro; })[0].valor;
        this.pontoEquilibrio = (this.somaDespesas / (lucro * 100)) * 100;
        return false;
    };
    PorcentagemComponent.prototype.salvar = function () {
        var objetoSalvar = {
            despesas: this.despesas,
            precoMercadoria: this.precoMercadoria,
            principal: this.principal,
            somaDespesas: this.somaDespesas
        };
        localStorage.setItem("porcentagem", JSON.stringify(objetoSalvar));
        Materialize.toast('Os campos foram salvos, na próxima vez que abrir a página eles vão estar carregados!', 4000);
    };
    PorcentagemComponent.prototype.loadingSave = function () {
        var _this = this;
        if (localStorage.getItem("porcentagem") == null)
            return;
        var objetoSalvar = JSON.parse(localStorage.getItem("porcentagem"));
        this.principal = this.principal.map(function (q) {
            if (_this.despesas != null && q.activate) {
                Materialize.toast('A porcentagem de despesa foi sobrescrita pelo cálculo atual!', 4000);
                return q;
            }
            var index = objetoSalvar.principal.map(function (q) { return q.descricao; }).indexOf(q.descricao);
            q = objetoSalvar.principal[index];
            return q;
        });
        if (this.despesas == null)
            this.despesas = objetoSalvar.despesas;
        if (this.somaDespesas == null)
            this.somaDespesas = objetoSalvar.somaDespesas;
        this.precoMercadoria = objetoSalvar.precoMercadoria;
    };
    PorcentagemComponent.prototype.salvarMesAtual = function () {
        var tempRelatorio = sessionStorage.getItem("tempRelatorio");
        if (tempRelatorio == null) {
            Materialize.toast('Para registrar esse mês, você deve primeiro calcular os itens pela tela de relatório!', 5000);
            return;
        }
        if (this.pv == '') {
            Materialize.toast('Por favor, calcule o formulário', 5000);
            return;
        }
        var serializado = JSON.parse(sessionStorage.getItem("tempRelatorio"));
        var data = new Date();
        var objetoSalvar = {
            mes: data.getFullYear() + "/" + (data.getMonth() + 1),
            porcDespesas: this.despesas,
            precoMercadoria: this.precoMercadoria,
            porcentagens: this.principal,
            somaDespesas: this.somaDespesas,
            date: data,
            despesas: serializado.despesas,
            outrasDespesas: serializado.outrasDespesas,
            faturamento: serializado.faturamento,
            markup: this.markup,
            pv: this.pv,
            pontoEquilibrio: this.pontoEquilibrio
        };
        this.logicaMeses(objetoSalvar);
    };
    PorcentagemComponent.prototype.logicaMeses = function (mes) {
        var storageMeses = localStorage.getItem("meses");
        var meses = [];
        if (storageMeses != null) {
            meses = JSON.parse(storageMeses);
        }
        if (meses.filter(function (q) { return q.mes == mes.mes; }).length > 0) {
            Materialize.toast('Esse mês já foi registrado!', 5000);
            return;
        }
        meses.push(mes);
        localStorage.setItem('meses', JSON.stringify(meses));
        Materialize.toast('Esse mês foi registrado com sucesso!', 5000);
    };
    PorcentagemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-porcentagem',
            template: __webpack_require__("../../../../../src/app/pages/porcentagem/porcentagem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/porcentagem/porcentagem.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], PorcentagemComponent);
    return PorcentagemComponent;
    var _a;
}());
//# sourceMappingURL=porcentagem.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/relatorio/relatorio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/relatorio/relatorio.component.html":
/***/ (function(module, exports) {

module.exports = "<form #calculadoraForm=\"ngForm\" (ngSubmit)=\"calcularDespesas()\">\r\n  <div class=\"card white darken-1\">\r\n    <div class=\"card-content black-text\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m6 l6\">\r\n          <h5 class=\"header\">\r\n            Relatório dos custos mensais\r\n            <a (click)=\"adicionar()\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\r\n\r\n          </h5>\r\n        </div>\r\n\r\n        <div class=\"collection col s12 m6 l6 destaque right\">\r\n          <div class=\"input-field inline col s12\">\r\n            <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"faturamento\" name=\"faturamento\" id=\"faturamento\"\r\n              class=\"validate\">\r\n            <label class=\"active\">Faturamento Mensal</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field inline col s12 m6 l6\" *ngFor=\"let item of principal\">\r\n          <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\r\n            required=\"required\" class=\"validate\">\r\n          <label class=\"active\">{{item.descricao}}</label>\r\n        </div>\r\n\r\n        <div *ngFor=\"let item of outros\">\r\n          <div>\r\n            <div class=\"input-field inline col s12 m3 l3\">\r\n              <label class=\"active\">Descrição:</label>\r\n              <input type=\"text\" required=\"required\" class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s9 m2 l2\">\r\n              <label class=\"active\">Valor:</label>\r\n              <input type=\"number\" step=\"any\" required=\"required\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.date\"\r\n                class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s3 m1 l1\">\r\n              <a (click)=\"remover(item)\" class=\"btn-floating btn-tiny waves-effect waves-light red\">\r\n                <i class=\"material-icons\">remove</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row no-space\" *ngIf=\"exibeMensagemCarregado\">\r\n        <div class=\"input-field col s12 m6 l6 right\">\r\n          <span class=\"new badge red\" data-badge-caption=\"\">As informações foram carregadas por você já ter salvo o formulário.</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"card-action\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col inline right\">\r\n          <button type=\"button\" (click)=\"salvar()\" [disabled]=\"!calculadoraForm.form.valid\" title=\"Salvar formulário\" class=\"btn-floating btn-tiny waves-effect waves-light blue\"><i class=\"material-icons\">cloud</i></button>\r\n          <button type=\"submit\" [disabled]=\"!calculadoraForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light blue\"><i class=\"material-icons\">done</i></button>\r\n        </div>\r\n        <div class=\"input-field col s3 inline left\">\r\n          <a routerLink=\"/\" class=\"btn btn-tiny waves-effect waves-light red\"> Voltar</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/relatorio/relatorio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelatorioComponent = (function () {
    function RelatorioComponent(router) {
        this.router = router;
        this.outros = [];
        this.principal = [
            {
                valor: null,
                descricao: 'Água'
            },
            {
                valor: null,
                descricao: 'Luz'
            },
            {
                valor: null,
                descricao: 'Telefone'
            },
            {
                valor: null,
                descricao: 'Salário + Encargos'
            },
            {
                valor: null,
                descricao: 'Aluguel'
            },
            {
                valor: null,
                descricao: 'Descartáveis'
            },
        ];
        this.exibeMensagemCarregado = false;
        this.faturamento = null;
        sessionStorage.clear();
        this.loadingSave();
        this.exibeMensagemCarregado = localStorage.getItem("relatorio") != null;
    }
    RelatorioComponent.prototype.adicionar = function () {
        this.outros.push({
            valor: '',
            descricao: '',
            date: new Date()
        });
    };
    RelatorioComponent.prototype.remover = function (item) {
        this.outros.splice(this.outros.indexOf(item), 1);
    };
    RelatorioComponent.prototype.salvar = function () {
        var objetoSalvar = {
            faturamento: this.faturamento,
            principal: this.principal,
            outros: this.outros
        };
        localStorage.setItem("relatorio", JSON.stringify(objetoSalvar));
        Materialize.toast('Os campos foram salvos, na próxima vez que abrir a página eles vão estar carregados!', 4000);
    };
    RelatorioComponent.prototype.loadingSave = function () {
        if (localStorage.getItem("relatorio") == null)
            return;
        var objetoSalvar = JSON.parse(localStorage.getItem("relatorio"));
        this.faturamento = objetoSalvar.faturamento;
        this.principal = objetoSalvar.principal;
        this.outros = objetoSalvar.outros;
    };
    /**
     * Primeira fórmula
     * Soma de todos os itens / Faturamento Mensal
     */
    RelatorioComponent.prototype.calcularDespesas = function () {
        var principal = this.principal.map(function (q) { return q.valor; }).reduce(function (sum, current) { return sum + current; });
        var outros = 0;
        if (this.outros.length > 0)
            outros = this.outros.map(function (q) { return q.valor; }).reduce(function (sum, current) { return sum + current; });
        var despesas = ((principal + outros) / this.faturamento);
        this.armazenarSession();
        this.router.navigate(['/porcentagem', { despesas: despesas, somaDespesas: principal + outros }]);
        return false;
    };
    /**
     * Armazenamos os itens em session para lermos na próxima tela
     */
    RelatorioComponent.prototype.armazenarSession = function () {
        var objetoSalvar = {
            despesas: this.principal,
            outrasDespesas: this.outros,
            faturamento: this.faturamento
        };
        sessionStorage.setItem('tempRelatorio', JSON.stringify(objetoSalvar));
    };
    RelatorioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-relatorio',
            template: __webpack_require__("../../../../../src/app/pages/relatorio/relatorio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/relatorio/relatorio.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], RelatorioComponent);
    return RelatorioComponent;
    var _a;
}());
//# sourceMappingURL=relatorio.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/suporte/suporte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/suporte/suporte.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  suporte works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/suporte/suporte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuporteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuporteComponent = (function () {
    function SuporteComponent() {
    }
    SuporteComponent.prototype.ngOnInit = function () {
    };
    SuporteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-suporte',
            template: __webpack_require__("../../../../../src/app/pages/suporte/suporte.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/suporte/suporte.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], SuporteComponent);
    return SuporteComponent;
}());
//# sourceMappingURL=suporte.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map