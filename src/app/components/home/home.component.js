"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { AboutComponent } from '.app/components/about/about.component';
var $ = require("jquery");
var HomeComponent = (function () {
    function HomeComponent() {
        this.facts = [
            { text: '52% of respondents rate “being close to family or friends” as somewhat or very important in choosing their current home locations.' },
            { text: '18% of employed respondents telecommute at least one day per week.' },
            { text: 'The top three previous home states among respondents moved to Washington in the past five years are California, Michigan, and Massachusetts.' },
            { text: '24% of respondents have lived in their current homes for 10+ years.' },
        ];
        this.slides = [
            { path: './assets/slides/slide1.jpg', text: 'Slide 1' },
            { path: './assets/slides/slide2.jpg', text: 'Slide 2' },
            { path: './assets/slides/slide3.jpg', text: 'Slide 3' },
            { path: './assets/slides/slide4.jpg', text: 'Slide 4' },
            { path: './assets/slides/slide5.jpg', text: 'Slide 5' },
            { path: './assets/slides/slide6.jpg', text: 'Slide 6' },
            { path: './assets/slides/slide7.jpg', text: 'Slide 7' },
            { path: './assets/slides/slide8.jpg', text: 'Slide 8' },
            { path: './assets/slides/slide9.jpg', text: 'Slide 9' },
        ];
        this.quotes = [
            {
                text: "\u201CTo ensure a high quality of life for the region\u2019s residents now and into the future, we need good travel data to support decision making on vital transportation\n      investments. This survey is important work and I enthusiastically support this effort.\u201D",
                author: 'Fred Butler, Mayor, City of Issaquah'
            },
            {
                text: '"This survey provides the best data about people’s behaviors and preferences for policy makers to create long-range land-use and transportation decisions. This will lead us to creating higher quality communities in the Puget Sound area.  I strongly encourage everyone who is invited to participate."',
                author: 'John Marchione, Mayor, City of Redmond'
            },
            {
                text: '"The region has seen tremendous population and job growth in recent years, along with completion of new transportation infrastructure. This survey will provide an up-to-date view of how residents get around and help decision makers continue to plan improvements in the transportation system."',
                author: 'Josh Brown, Executive Director, PSRC'
            },
            {
                text: '“Understanding the travel needs of residents is crucial to developing the region’s long-term transportation plan. We need people to participate in this survey to help understand what improvements need to be made, addressing current congestion and future transportation choices.”',
                author: 'Becky Erickson, Mayor, City of Poulsbo'
            },
            {
                text: '“The Puget Sound Regional Travel Study is useful because it provides real data about how real people travel every day for work, school, and errands. Please participate in the survey to help us make good decisions about transportation and land use.”',
                author: 'Mike Todd, Councilmember (Position 6), City of Mill Creek'
            },
            {
                text: '"Data from the Puget Sound Regional Travel Study supports vital decisions on how we make land use and transportation investment decisions. Your participation in the survey can help our region better manage our future growth."',
                author: 'Rob Johnson, Councilmember (District 4), City of Seattle'
            },
            {
                text: '“We need up-to-date information on people’s travel needs to guide decision making and transportation investments. The Puget Sound Regional Travel study helps provide that data and I urge our residents who have been contacted to participate.”',
                author: 'Douglas Richardson, Councilmember (District No. 6) & Chair, Pierce County'
            },
            {
                text: '“Data from the Puget Sound Regional Travel Study supports vital decisions on how we make land use and transportation investment decisions. Your participation in the survey can help our region better manage our future growth.”',
                author: 'Rob Johnson, Councilmember (District 4), City of Seattle'
            },
        ];
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        var jq = $;
        jq('.carousel').carousel();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html'
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map