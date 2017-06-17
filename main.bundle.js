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

module.exports = "<div class=\"container\">\r\n  <a routerLink=\"/\">\r\n    <h4 class=\"header\">\r\n      Calculadora\r\n    </h4>\r\n  </a>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>"

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
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */]
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

module.exports = "<div class=\"row\">\r\n  <a routerLink=\"/relatorio\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card blue-grey darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Relatório</span>\r\n          <p>Inicie a parametrização com todas as informações.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a routerLink=\"/porcentagem\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card red darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Porcentagem</span>\r\n          <p>Inicie a parametrização com todas as porcentagens prontas.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a (click)=\"limpar()\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card orange darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Configurações</span>\r\n          <p>Limpe todos os campos memorizados da memória.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a href=\"mailto:jr_acn@yahoo.com.br\">\r\n    <div class=\"col s6 m6\">\r\n      <div class=\"card green darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <span class=\"card-title\">Suporte</span>\r\n          <p>Reporte bugs ou sugestões de como melhorar a calculadora.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>"

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
        localStorage.clear();
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

module.exports = "<div class=\"card white darken-1\">\r\n    <div class=\"card-content black-text\">\r\n        <form class=\"col s12\" #porcentagemForm=\"ngForm\" (ngSubmit)=\"calcularMarkup()\">\r\n            <div class=\"row\">\r\n                <div class=\"col s4 m4\">\r\n                    <h5 class=\"header\">\r\n                        <a routerLink=\"/\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">replay</i></a>                        Porcentagem\r\n                    </h5>\r\n                    <span class=\"new badge red\" data-badge-caption=\"%\">Exemplo de porcentagem: 0,2</span>\r\n                </div>\r\n                <div class=\"input-field col s2 m2\">\r\n                    <button type=\"submit\" [disabled]=\"!porcentagemForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light green\"><i class=\"material-icons\">done</i></button>\r\n                    <a (click)=\"salvar()\" title=\"Salvar\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">cloud</i></a>\r\n                </div>\r\n                <div class=\"collection col s3 destaque\">\r\n                    <div class=\"input-field col s12 m12\">\r\n                        <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"precoMercadoria\" name=\"precoMercadoria\" id=\"precoMercadoria\"\r\n                            class=\"validate\">\r\n                        <label class=\"active\">Preço Mercadoria R$</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"collection col s3 destaque\">\r\n                    <div class=\"input-field col s12 m12\">\r\n                        <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"somaDespesas\" name=\"somaDespesas\" id=\"somaDespesas\"\r\n                            class=\"validate\">\r\n                        <label class=\"active\">Soma Despesas R$</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"input-field col s6\" *ngFor=\"let item of principal\">\r\n                    <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\r\n                        required=\"required\" class=\"validate\">\r\n                    <label class=\"active\">{{item.descricao}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <footer class=\"page-footer\">\r\n            <div class=\"semicontainer black-text\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s4\">\r\n                        <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"markup\" id=\"markup\" name=\"markup\">\r\n                        <label class=\"whitesmoke active\">Mark-UP:</label>\r\n                    </div>\r\n                    <div class=\"input-field col s4\">\r\n                        <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"pv\" id=\"pv\" name=\"pv\">\r\n                        <label class=\"whitesmoke active\">PV:</label>\r\n                    </div>\r\n                    <div class=\"input-field col s4\">\r\n                        <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"pontoEquilibrio\" id=\"pontoEquilibrio\" name=\"pontoEquilibrio\">\r\n                        <label class=\"whitesmoke active\">Ponto de Equilibrio:</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

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
        this.despesas = '';
        this.somaDespesas = '';
        this.precoMercadoria = '';
        this.pv = '';
        this.pontoEquilibrio = '';
        this.markup = '';
        this.principal = [];
    }
    PorcentagemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal = [
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
                valor: this.despesas,
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
        this.loadingSave();
        this.route.params.subscribe(function (params) {
            if (params['despesas'] != null)
                _this.despesas = +params["despesas"];
            if (params['somaDespesas'] != null)
                _this.somaDespesas = +params["somaDespesas"];
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
        if (localStorage.getItem("porcentagem") == null)
            return;
        var objetoSalvar = JSON.parse(localStorage.getItem("porcentagem"));
        this.despesas = objetoSalvar.despesas;
        this.precoMercadoria = objetoSalvar.precoMercadoria;
        this.principal = objetoSalvar.principal;
        this.somaDespesas = objetoSalvar.somaDespesas;
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

module.exports = "<div class=\"card white darken-1\">\r\n  <div class=\"card-content black-text\">\r\n    <form class=\"col s12\" #calculadoraForm=\"ngForm\" (ngSubmit)=\"calcularDespesas()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s6 m4\">\r\n          <h5 class=\"header\">\r\n          <a routerLink=\"/\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">replay</i></a>\r\n            Relatório dos custos mensais\r\n          </h5>\r\n        </div>\r\n        <div class=\"input-field inline col s6 m2\">\r\n          <a (click)=\"adicionar()\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\r\n          <button type=\"submit\" [disabled]=\"!calculadoraForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light green\"><i class=\"material-icons\">done</i></button>\r\n          <a (click)=\"salvar()\" title=\"Salvar\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">cloud</i></a>\r\n        </div>\r\n        <div class=\"collection col s6 destaque\">\r\n          <div class=\"input-field inline col s12\">\r\n            <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"faturamento\" name=\"faturamento\" id=\"faturamento\"\r\n              class=\"validate\">\r\n            <label class=\"active\">Faturamento Mensal</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field inline col s6\" *ngFor=\"let item of principal\">\r\n          <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\r\n            required=\"required\" class=\"validate\">\r\n          <label class=\"active\">{{item.descricao}}</label>\r\n        </div>\r\n\r\n        <div *ngFor=\"let item of outros\">\r\n          <div>\r\n            <div class=\"input-field inline col s3\">\r\n              <label class=\"active\">Descrição:</label>\r\n              <input type=\"text\" required=\"required\" class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s2\">\r\n              <label class=\"active\">Valor:</label>\r\n              <input type=\"number\" step=\"any\" required=\"required\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.date\"\r\n                class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s1\">\r\n              <a (click)=\"remover(item)\" class=\"btn-floating btn-tiny waves-effect waves-light red\">\r\n                <i class=\"material-icons\">remove</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

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
        this.faturamento = null;
        this.loadingSave();
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
        this.router.navigate(['/porcentagem', { despesas: despesas, somaDespesas: principal + outros }]);
        return false;
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