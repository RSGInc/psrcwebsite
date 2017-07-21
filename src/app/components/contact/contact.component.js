"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
        this.contacts = [
            {
                name: "Media inquiries: Rick Olson,",
                email: "rolson@psrc.org",
                phone: "1-206-971-3050"
            },
            {
                name: "Project inquiries: Brian Lee,",
                email: "blee@psrc.org",
                phone: "1-206-971-3270"
            },
            {
                name: "Project inquiries: Neil Kilgren,",
                email: "nkilgren@psrc.org",
                phone: "1-206-971-3602"
            },
        ];
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: './contact.component.html',
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map