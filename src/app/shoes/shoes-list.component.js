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
var data_1 = require('../shared/data');
var demo_data_service_1 = require('../shared/demo-data.service');
var ShoesListComponent = (function () {
    function ShoesListComponent(demoDataService) {
        this.demoDataService = demoDataService;
    }
    ShoesListComponent.prototype.ngOnInit = function () {
        this.shoes = this.demoDataService.getDemoData();
    };
    ShoesListComponent.prototype.onInit = function () {
        this.shoes = data_1.SHOESDATA;
    };
    ShoesListComponent.prototype.onRatingClicked = function (message) {
        this.pagetitle = this.pagetitle + message;
    };
    ShoesListComponent = __decorate([
        core_1.Component({
            selector: 'shoes-list',
            templateUrl: './app/shoes/shoes-list.component.html'
        }), 
        __metadata('design:paramtypes', [demo_data_service_1.DemoDataService])
    ], ShoesListComponent);
    return ShoesListComponent;
}());
exports.ShoesListComponent = ShoesListComponent;
//# sourceMappingURL=shoes-list.component.js.map