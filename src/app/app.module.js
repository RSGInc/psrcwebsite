"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/home/home.component");
var region_component_1 = require("./components/region/region.component");
var contact_component_1 = require("./components/contact/contact.component");
var news_component_1 = require("./components/news/news.component");
var sponsors_component_1 = require("./components/sponsors/sponsors.component");
var about_component_1 = require("./components/about/about.component");
var privacy_component_1 = require("./components/privacy/privacy.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, home_component_1.HomeComponent, region_component_1.RegionComponent,
                sponsors_component_1.SponsorsComponent, contact_component_1.ContactComponent, news_component_1.NewsComponent, about_component_1.AboutComponent, privacy_component_1.PrivacyComponent, footer_component_1.FooterComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map