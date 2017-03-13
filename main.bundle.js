webpackJsonp([2,5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(534),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
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
        this.precoMercadoria = '';
        this.pv = '';
        this.markup = '';
        this.principal = [];
    }
    PorcentagemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['despesas'] != null)
                _this.despesas = +params["despesas"];
        });
        this.principal = [
            {
                valor: null,
                descricao: '% Simples'
            },
            {
                valor: null,
                descricao: '% Lucro'
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
    };
    PorcentagemComponent.prototype.calcularMarkup = function () {
        var principal = this.principal.map(function (q) { return q.valor; }).reduce(function (sum, current) { return sum + current; });
        this.markup = (100 - principal) / 100;
        console.log("Markup", this.markup);
        this.pv = (this.precoMercadoria / this.markup);
        console.log("PV", this.pv);
        return false;
    };
    PorcentagemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-porcentagem',
            template: __webpack_require__(535),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], PorcentagemComponent);
    return PorcentagemComponent;
    var _a;
}());
//# sourceMappingURL=porcentagem.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
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
        console.log("Primeira fórmula:", despesas);
        this.router.navigate(['/porcentagem', { despesas: despesas }]);
        return false;
    };
    RelatorioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-relatorio',
            template: __webpack_require__(536),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], RelatorioComponent);
    return RelatorioComponent;
    var _a;
}());
//# sourceMappingURL=relatorio.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(537),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], SuporteComponent);
    return SuporteComponent;
}());
//# sourceMappingURL=suporte.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 341;


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_porcentagem_porcentagem_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_relatorio_relatorio_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_suporte_suporte_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__ = __webpack_require__(303);
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(533),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_porcentagem_porcentagem_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_relatorio_relatorio_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_suporte_suporte_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__(303);
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

/***/ 466:
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

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "input[type=\"text\"]:disabled {\r\n   color:white !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/\">\n    <h4 class=\"header\">\n      Calculadora\n    </h4>\n  </a>\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <a routerLink=\"/relatorio\">\n      <div class=\"col s6 m6\">\n        <div class=\"card blue-grey darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">Relatório</span>\n            <p>Inicie a parametrização com todas as informações.</p>\n          </div>\n        </div>\n      </div>\n    </a>\n\n    <a routerLink=\"/porcentagem\">\n      <div class=\"col s6 m6\">\n        <div class=\"card red darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">Porcentagem</span>\n            <p>Inicie a parametrização com todas as porcentagens prontas.</p>\n          </div>\n        </div>\n      </div>\n    </a>\n\n    <a href=\"mailto:jr_acn@yahoo.com.br\">\n      <div class=\"col s6 m6\">\n        <div class=\"card green darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">Suporte</span>\n            <p>Reporte bugs ou sugestões de como melhorar a calculadora.</p>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div class=\"card white darken-1\">\r\n    <div class=\"card-content black-text\">\r\n        <form class=\"col s12\" #porcentagemForm=\"ngForm\" (ngSubmit)=\"calcularMarkup()\">\r\n            <div class=\"row\">\r\n                <div class=\"col s4 m4\">\r\n                    <h5 class=\"header\">\r\n                        Porcentagem\r\n                    </h5>\r\n                    <small>ex: 0,2</small>\r\n                </div>\r\n                <div class=\"input-field col s2 m2\">\r\n                    <button type=\"submit\" [disabled]=\"!porcentagemForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light green\"><i class=\"material-icons\">done</i></button>\r\n                </div>\r\n                <div class=\"collection col s6 destaque\">\r\n                    <div class=\"input-field col s12 m12\">\r\n                        <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"precoMercadoria\" name=\"precoMercadoria\" id=\"precoMercadoria\"\r\n                            class=\"validate\">\r\n                        <label>Preco Mercadoria</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"input-field col s6\" *ngFor=\"let item of principal\">\r\n                    <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\r\n                        required=\"required\" class=\"validate\">\r\n                    <label class=\"active\">{{item.descricao}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <footer class=\"page-footer\">\r\n            <div class=\"semicontainer black-text\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s6\">\r\n                        <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"markup\" id=\"markup\" name=\"markup\">\r\n                        <label class=\"active\">Mark-UP:</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input type=\"text\" placeholder=\"Valor a ser calculado\" disabled [(ngModel)]=\"pv\" id=\"pv\" name=\"pv\">\r\n                        <label class=\"active\">PV:</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"card white darken-1\">\n  <div class=\"card-content black-text\">\n    <form class=\"col s12\" #calculadoraForm=\"ngForm\" (ngSubmit)=\"calcularDespesas()\">\n      <div class=\"row\">\n        <div class=\"col s6 m4\">\n          <h5 class=\"header\">\n            Relatório dos custos mensais\n          </h5>\n        </div>\n        <div class=\"input-field inline col s6 m2\">\n          <a (click)=\"adicionar()\" class=\"btn-floating btn-tiny waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n          <button type=\"submit\" [disabled]=\"!calculadoraForm.form.valid\" class=\"btn-floating btn-tiny waves-effect waves-light green\"><i class=\"material-icons\">done</i></button>\n        </div>\n        <div class=\"collection col s6 destaque\">\n          <div class=\"input-field inline col s12\">\n            <input type=\"number\" step=\"any\" required=\"required\" min=\"0\" [(ngModel)]=\"faturamento\" name=\"faturamento\" id=\"faturamento\"\n              class=\"validate\">\n            <label>Faturamento Mensal</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field inline col s6\" *ngFor=\"let item of principal\">\n          <input type=\"number\" step=\"any\" [value]=\"item.valor\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.descricao\"\n            required=\"required\" class=\"validate\">\n          <label>{{item.descricao}}</label>\n        </div>\n\n        <div *ngFor=\"let item of outros\">\n          <div>\n            <div class=\"input-field inline col s3\">\n              <label>Descrição:</label>\n              <input type=\"text\" required=\"required\" class=\"validate\">\n            </div>\n            <div class=\"input-field col s2\">\n              <label>Valor:</label>\n              <input type=\"number\" step=\"any\" required=\"required\" [(ngModel)]=\"item.valor\" min=\"0\" [id]=\"item.descricao\" [name]=\"item.date\"\n                class=\"validate\">\n            </div>\n            <div class=\"input-field col s1\">\n              <a (click)=\"remover(item)\" class=\"btn-floating btn-tiny waves-effect waves-light red\">\n                <i class=\"material-icons\">remove</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<p>\n  suporte works!\n</p>\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);


/***/ })

},[570]);
//# sourceMappingURL=main.bundle.js.map