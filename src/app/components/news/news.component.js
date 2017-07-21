"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewsComponent = (function () {
    function NewsComponent() {
        this.newsObjs = [
            {
                heading: "City of Redmond participating in PSRC regional travel study",
                text: "\"The region has seen tremendous population and job growth in recent years, along with completion of new transportation infrastructure,\" said Josh Brown, PSRC's Executive Director. \"This survey will provide an up-to-date view of how residents get around and help decision makers continue to plan improvements in the transportation system.\"",
                link: "http://www.redmond-reporter.com/news/city-of-redmond-participating-in-psrc-regional-travel-study/",
                logo: "redmondreporter.png",
            },
            {
                heading: "Puget Sound Regional Council conducting regional travel study",
                text: "The Puget Sound Regional Council (PSRC) is conducting a regional travel study to better understand the transportation needs and preferences of the region's residents. Between March 2017 and June 2017, Redmond residents will receive invitations to participate in this important transportation study led by PSRC.",
                link: "http://myedmondsnews.com/2017/03/puget-sound-regional-council-to-conduct-regional-travel-study/",
                logo: "My-Edmonds-News-Logo.jpg",
            },
            {
                heading: "PSRC conducting household travel survey",
                text: "PSRC is conducting a regional travel study to better understand the transportation needs and preferences of the region's residents. Thousands of residents in the area will receive invitations to participate in this important transportation study sometime between March and June 2017.",
                link: "http://www.redmond-reporter.com/news/city-of-redmond-participating-in-psrc-regional-travel-study/",
                logo: "psrcblog.jpg",
            },
            {
                heading: "Puget Sound Regional Council to conduct regional travel study",
                text: "Demand for travel in the Puget Sound region is expected to increase by 25% between now and the year 2040. Participation in the study can help answer questions about how the region can maintain and improve mobility, accessibility, and connectivity for residents as population grows and travel patterns evolve. The information collected will be vital for planning and prioritizing improvements for the Puget Sound region's transportation system.",
                link: "http://www.rentonreporter.com/news/puget-sound-regional-council-to-conduct-regional-travel-study/",
                logo: "kent.png",
            },
            {
                heading: "PSRC Regional Travel Study underway",
                text: "The Puget Sound Regional Council is kicking off a new regional travel survey this spring. The information collected will be vital for planning and prioritizing transportation improvements.",
                link: "http://www.shorelineareanews.com/2017/03/psrc-regional-travel-study-underway.html",
                logo: "shorelinenews.png",
            },
            {
                heading: "Redmond Participating in Puget Sound Regional Council Travel Study",
                text: "Between March 2017 and June 2017, Redmond residents will receive invitations to participate in this important transportation study led by PSRC.",
                link: "https://redmondcity.blogspot.com/2017/03/redmond-participating-in-puget-sound.html#more",
                logo: "neighborhoodblog.png",
            },
            {
                heading: "PSRC News Releases",
                text: "Puget Sound Regional Council's New Releases website.",
                link: "http://www.psrc.org/news",
                logo: "psrcblog.jpg",
            },
        ];
    }
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'news',
            templateUrl: './news.component.html',
        })
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map