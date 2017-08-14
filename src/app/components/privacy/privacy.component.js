"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dict = {
    website_privacy_heading_1: "Resource Systems Group, Inc. Privacy Statement",
    website_privacy_heading_1b: "This study is being conducted on behalf of the Puget Sound Regional Council, the City of Redmond, and the City of Seattle by Resource Systems Group, Inc.",
    website_privacy_heading_1c: "© Resource Systems Group, Inc. 2017 is conducting this study for the Puget Sound Regional Council, the City of Redmond, and the City of Seattle.",
    website_privacy_heading_2: "SUMMARY",
    website_privacy_heading_3: "PRIVACY STATEMENT IN DEPTH",
    website_privacy_heading_4: "ABOUT RSG'S MARKET RESEARCH WORK",
    website_privacy_heading_5: "THE INFORMATION WE COLLECT AND WHAT WE DO WITH IT",
    website_privacy_heading_6: "INFORMATION COLLECTED TO MAKE YOUR SURVEY EXPERIENCE MORE PLEASANT",
    website_privacy_heading_7: "CHANGING OR DELETING PERSONAL INFORMATION",
    website_privacy_heading_8: "SECURITY",
    website_privacy_heading_9: "CHANGES IN THIS PRIVACY STATEMENT",
    website_privacy_heading_10: "LEGAL DISCLAIMER",
    website_privacy_heading_11: "CONTACT US",
    website_privacy_content_1: "Resource Systems Group (RSG) will never sell, trade or otherwise share any personal information collected in its surveys with any third party.",
    website_privacy_content_2: "RSG will never spam you, advertise to you or otherwise contact you outside of this survey without your explicit and direct permission.",
    website_privacy_content_3: "Any and all information collected during this survey will only be presented to RSG's clients as part of an aggregate sample.",
    website_privacy_content_4: "During the study, we need your name and contact information in order to reach you, but at the conclusion of the study, this information will be destroyed.",
    website_privacy_content_5: "We are committed to your privacy and we take it very seriously. This statement is intended to provide you with information and understanding about how Resource Systems Group (RSG) collects and safeguards personal information that is used as part of the firm's market research studies. Personal information may include contact information for administering the study; it may also include home and work locations and other demographic information such as gender, age and household income used to analyze the data and understand how the sample represents the larger population.",
    website_privacy_content_6: "RSG conducts market research on behalf of both public and private sector clients using Internet, stand-alone computer, and other data collection means. Ultimately, this research allows our clients to provide you with better products and services that you use on a daily basis. These products and services range from large infrastructure, like rail service and highways, to consumer products, like magazines and cell phones.",
    website_privacy_content_7: "Through independently commissioned surveys, RSG may collect information such as your email address, home or work location, and a variety of demographic information (e.g., gender, age, household income) that will allow us to qualify you for a current survey, tailor survey questions, or ensure we have collected a sample that provides representation across a variety of characteristics. Once you are qualified to participate in a survey, you may be asked to provide additional demographic data, express opinions, and register preferences. The information gathered is aggregated, analyzed, and summarized on behalf of RSG's clients. Participation in these surveys is completely voluntary, and you therefore have a choice whether or not to disclose this information requested. We collect your contact information during the study (e.g. name, email, address and phone number) in order to reach you and help with participation, but this information is stored separately from your survey responses and is destroyed after the study is complete.",
    website_privacy_content_8: "During the course of our surveys, we may passively collect information about your Internet browser and computer settings that makes your survey experience more pleasant. In addition to making your survey experience better, we use this information, which does not identify individual users, to analyze trends, to administer the site, and to track users' movements around the site.",
    website_privacy_content_9: "If your personal information changes, if you no longer desire to participate in this study, or if you have inquiries or complaints, please contact us via email at",
    website_privacy_content_10: "We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
    website_privacy_content_11: "RSG reserves the right to change its privacy policy. These changes will be posted clearly on the firm's websites and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.",
    website_privacy_content_12: "We reserve the right to disclose your personal information as required by law, and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order, or legal process served on our website. Prior to the destruction of participant contact information at the end of the study, we will notify a participant in the event of a public records request or other legal process that obligates us to disclose a participant’s personal information.",
    website_privacy_content_13: "If you have any questions or suggestions regarding our privacy policy, please contact us at:",
    website_privacy_content_14: "Resource Systems Group, Inc.",
    website_privacy_content_15: "Email:",
    rsg_office_street: "41 North Rio Grande Street, Suite 106",
    rsg_office_city: "Salt Lake City",
    rsg_office_state: "UT",
    rsg_office_zip: "84101"
};
var PrivacyComponent = (function () {
    function PrivacyComponent() {
        this.dictionary = dict;
    }
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    core_1.Component({
        selector: 'privacy',
        templateUrl: './privacy.component.html',
    })
], PrivacyComponent);
exports.PrivacyComponent = PrivacyComponent;
//# sourceMappingURL=privacy.component.js.map