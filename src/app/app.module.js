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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var shoes_list_component_1 = require('./shoes/shoes-list.component');
var star_rating_component_1 = require('./shared/star-rating.component');
var header_component_1 = require('./shared/header.component');
var contact_component_1 = require('./shared/contact.component');
var router_1 = require("@angular/router");
var shoes_detail_component_1 = require('./shoes/shoes-detail.component');
var demo_data_service_1 = require('./shared/demo-data.service');
var footer_component_1 = require("./shared/footer.component");
var slider_component_1 = require("./shared/slider.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: shoes_list_component_1.ShoesListComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'shoes/:id', component: shoes_detail_component_1.ShoeDetailComponent },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ])],
            declarations: [app_component_1.AppComponent, shoes_list_component_1.ShoesListComponent, star_rating_component_1.StarRatingComponent, header_component_1.HeaderComponent, slider_component_1.SliderComponent, contact_component_1.ContactComponent, shoes_detail_component_1.ShoeDetailComponent, footer_component_1.FooterComponent],
            providers: [demo_data_service_1.DemoDataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map