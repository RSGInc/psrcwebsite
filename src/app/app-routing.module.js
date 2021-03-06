"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var region_component_1 = require("./components/region/region.component");
var news_component_1 = require("./components/news/news.component");
var sponsors_component_1 = require("./components/sponsors/sponsors.component");
var about_component_1 = require("./components/about/about.component");
var privacy_component_1 = require("./components/privacy/privacy.component");
var contact_component_1 = require("./components/contact/contact.component");
//import { HeroDetailComponent }  from './about.component';
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'region', component: region_component_1.RegionComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    { path: 'sponsors', component: sponsors_component_1.SponsorsComponent },
    { path: 'privacy', component: privacy_component_1.PrivacyComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map