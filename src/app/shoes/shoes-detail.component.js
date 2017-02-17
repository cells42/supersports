"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var demo_data_service_1 = require('../shared/demo-data.service');
var ShoeDetailComponent = (function () {
    function ShoeDetailComponent(_route, _router, _demoDataService) {
        this._route = _route;
        this._router = _router;
        this._demoDataService = _demoDataService;
    }
    ShoeDetailComponent.prototype.ngOnInit = function () {
        this.shoeid = this._route.snapshot.params['id'];
        this.shoes = this._demoDataService.getDemoDataByID(this.shoeid);
    };
    ShoeDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/shoes/shoes-detail.component.html',
            styleUrls: ['shoes-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, demo_data_service_1.DemoDataService])
    ], ShoeDetailComponent);
    return ShoeDetailComponent;
}());
exports.ShoeDetailComponent = ShoeDetailComponent;
//# sourceMappingURL=shoes-detail.component.js.map