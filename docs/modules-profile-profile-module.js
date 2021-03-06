(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "HKXI":
/*!******************************************!*\
  !*** ./src/app/shared/models/profile.ts ***!
  \******************************************/
/*! exports provided: MajorSkill, SocialAccount, ProfileItem, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MajorSkill", function() { return MajorSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAccount", function() { return SocialAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileItem", function() { return ProfileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class MajorSkill {
    constructor(skill) {
        this.skillType = skill.type;
        this.skillLabel = skill.label;
        this.skillValue = skill.value;
    }
}
class SocialAccount {
    constructor(account) {
        this.accountType = account.type;
        this.accountLabel = account.label;
        this.accountIcon = account.icon;
        this.profileId = account.profileId;
        this.profileLink = account.profileLink;
    }
}
class ProfileItem {
    constructor(bioItem) {
        this.itemType = bioItem.type;
        this.itemLabel = bioItem.label;
        this.itemIcon = bioItem.icon;
        this.itemValue = bioItem.value;
    }
}
class Profile {
    constructor(profileData) {
        this.name = profileData.name;
        this.title = profileData.title;
        this.imageUrl = profileData.imageUrl;
        if (profileData.shortBio && profileData.shortBio.length > 0) {
            this.shortBio = profileData.shortBio.map((bioItem) => new ProfileItem(bioItem));
        }
        if (profileData.socialAccounts && profileData.socialAccounts.length > 0) {
            this.socialAccounts = profileData.socialAccounts.map((account) => new SocialAccount(account));
        }
        if (profileData.majorSkills && profileData.majorSkills.length > 0) {
            this.majorSkills = profileData.majorSkills.map((skill) => new MajorSkill(skill));
        }
    }
}


/***/ }),

/***/ "LqSQ":
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "clus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"] }];
class ProfileRoutingModule {
}
ProfileRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Lvw3":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ng-material.module */ "iuPR");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "LqSQ");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "clus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProfileModule {
}
ProfileModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: ProfileModule });
ProfileModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_material_module__WEBPACK_IMPORTED_MODULE_2__["NgMaterialModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__["NgxTypedJsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ng_material_module__WEBPACK_IMPORTED_MODULE_2__["NgMaterialModule"],
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__["NgxTypedJsModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"]] }); })();


/***/ }),

/***/ "clus":
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/profile.service */ "v0/F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");











function ProfileComponent_div_0_div_11_li_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 49);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("fontSet", item_r9.itemIcon.indexOf("fab") >= 0 ? "fab" : "fas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("fontIcon", ctx_r10.getFontAwesomeIcon(item_r9.itemIcon));
} }
function ProfileComponent_div_0_div_11_li_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r9.itemLabel, " ");
} }
function ProfileComponent_div_0_div_11_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProfileComponent_div_0_div_11_li_2_mat_icon_1_Template, 1, 2, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProfileComponent_div_0_div_11_li_2_ng_template_2_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r9.itemIcon)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r9.itemValue);
} }
function ProfileComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProfileComponent_div_0_div_11_li_2_Template, 6, 3, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.profile.shortBio);
} }
function ProfileComponent_div_0_div_12_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "section", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "mat-progress-bar", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const skill_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](skill_r16.skillLabel + " - " + skill_r16.skillValue + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", skill_r16.skillValue);
} }
function ProfileComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProfileComponent_div_0_div_12_mat_card_1_Template, 6, 2, "mat-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.profile.majorSkills);
} }
function ProfileComponent_div_0_mat_card_actions_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const account_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", account_r18.profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("fontSet", account_r18.accountIcon.indexOf("fab") >= 0 ? "fab" : "fas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("fontIcon", ctx_r17.getFontAwesomeIcon(account_r18.accountIcon));
} }
function ProfileComponent_div_0_mat_card_actions_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProfileComponent_div_0_mat_card_actions_13_a_1_Template, 2, 3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.profile.socialAccounts);
} }
function ProfileComponent_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Happy Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.counter.customers);
} }
function ProfileComponent_div_0_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.counter.projects);
} }
function ProfileComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Repositories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.counter.repos);
} }
function ProfileComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Certifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r7.counter.certificates);
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ProfileComponent_div_0_div_11_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProfileComponent_div_0_div_12_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProfileComponent_div_0_mat_card_actions_13_Template, 2, 1, "mat-card-actions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Hi I am Shashi Badhuk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ngx-typed-js", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Hire Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Download CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, ProfileComponent_div_0_div_37_Template, 7, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ProfileComponent_div_0_div_38_Template, 7, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ProfileComponent_div_0_div_39_Template, 7, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, ProfileComponent_div_0_div_40_Template, 7, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("opened", function ProfileComponent_div_0_Template_mat_expansion_panel_opened_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.panelOpenState = true; })("closed", function ProfileComponent_div_0_Template_mat_expansion_panel_closed_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r21.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " About Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Professional Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "8+ years of experience in designing and development of software solutions for Web Apps, Javascript based TV/STB/OTT Apps and Hybrid Mobile Apps. Expert in designing high-performance, secure, and scalable web applications on the AWS stack along with exposure in architecture, design, and development of web applications, integration with devops tools or with 3rd-party solutions, and deployment on cloud. As an individual contributor the major skillsets are Javascript, NodeJS, ExpressJS, Angular, MongoDB, MySql, Docker, Kubernetes, Redis, AWS Cloud, Git, Nginx, Cordova, Ionic etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Currently working on project which manage collaboration devices remotely to perform their activities like firmware upgrade, reboot, events syncing, and configurations changes etc. Involved in design and development for its microservices and its integration with other third-party tools along with the deployment on AWS Infrastructure. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Work Experiance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Senior Software Engineer at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Barco Electronics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Since Feb 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Technical Lead - Full Stack at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Affle Limited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Apr 2015 to Feb 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Software Engineer at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Ebizon Netinfo Pvt Ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Mar 2013 to Apr 2015");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "2010 - 2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Master's in Computer Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Mahamaya Technical University, Noida, India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "2007 - 2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Bachelor's in Computer Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Chhatrapati Shahu Ji Maharaj University, Kanpur, India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "mat-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Technical Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Frontend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "HTML, CSS, Bootstrap, Javascript, TypeScript , Angular, MarionetteJS, Ionic, Cordova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "NodeJS, ExpressJS, EJS, Handlebar, RabbitMQ, PHP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "MongoDB, MySQL, Redis, Parse Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "DevOps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Git, Nginx, Apache, Jenkins, Docker, Kubernetes, Kibana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "AWS Cloud, Load Balancing & AutoScaling, SSL Integration, DNS Management, Mongo Atlas, Azure IoT, Google K8s Cluster etc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Others Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Gulp, Browserify, Webpack, PM2, JIRA, Slack, Basecamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Certifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Certified DevOps Professional By Skill Speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Certificate In Entrepreneurship and Leadership Management By Amity University, Noida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Project Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "IoT Based Device Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Node, Express, EJS, Angular, Bootstrap, MongoDB, Jenkins, Docker, Kubernetes, Azure IoT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Hassle free management of collaboration devices and its peripherals It increases availability, thereby enhancing meeting room user productivity. It brings an easy to use UI for remote and reliable device management to guarantee the user experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "OTT Solution for Set Top Box Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Node, Express, Angular, Bootstrap, MongoDB, Jenkins, Docker, Redis, AWS Cloud, RabbitMQ, Handlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "The DTH company wants Smart OTT solution for their Set Top Box devices. Which can provide subscriber based access to a world of OTT/Video Streaming apps. It includes bunch of Apps, and a huge library of curated online videos, Catch-Up TV shows, Web-series etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "eCommerce Mobile App Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Bootstrap, Cordova, Ionic, Node, Express, PHP, Magento, Shell Script, MySQL, Parse Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Automation tool for mobile app builder for the magento ecommerce website. It automates the generation of mobile apps for the ecommerce backend. The Apps have ecommerce features like catalog, checkout, payment, order, shipping etc..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "mat-tab", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r0.profile.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx_r0.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.profile.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("overflow", "auto")("height", "60vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.profile.shortBio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.profile.majorSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.profile.socialAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("animation", "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-ride", "carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("strings", ctx_r0.headlines)("loop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.counter && ctx_r0.counter.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.counter && ctx_r0.counter.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.counter && ctx_r0.counter.repos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.counter && ctx_r0.counter.certificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", true);
} }
class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.panelOpenState = true;
    }
    ngOnInit() {
        this.counter = {
            customers: 28,
            projects: 36,
            repos: 84,
            certificates: 2,
        };
        this.headlines = [
            'NodeJS Full Stack Engineer',
            'A Freelancer with DevOps Skills',
            '8+ Years Experiance in Full Stack Domain',
            'Hybrid Mobile App Developer',
        ];
        this.profileService
            .getFullProfile()
            .then((profile) => {
            this.profile = profile;
            console.log(this.profile);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    getFontAwesomeIcon(iconClassStr) {
        return iconClassStr.replace(/far|fab|fas/gi, '');
    }
}
ProfileComponent.??fac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-2", "nopadding"], [1, "default-bg"], ["mat-card-image", "", 3, "src", "alt"], [1, "profile-head"], ["class", "short-bio", 4, "ngIf"], ["class", "major-skills", 4, "ngIf"], [4, "ngIf"], [1, "col-md-10", "nopadding"], [1, "profile-wrapper", "container-fluid"], [1, "row", "carousel-row"], [1, "col-md-12"], ["id", "carouselExampleSlidesOnly", 1, "carousel", "slide", 3, "animation"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/bg-default.jpeg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [3, "strings", "loop"], [1, "typing"], [1, "btn-group", "profile-head-btn-group"], ["href", "https://www.linkedin.com/in/shashibadhuk", "target", "_blank", "mat-raised-button", "", "color", "accent"], ["href", "/assets/resume/ShashiBadhuk_NodeJSFullStack_8Years.pdf", "target", "_blank", "mat-raised-button", "", "color", "primary", "download", ""], ["label", "About Me"], [1, "container", "counter-section"], [1, "row", "text-center"], ["class", "col", 4, "ngIf"], [3, "expanded", "opened", "closed"], ["label", "Experiance & Education"], [1, "col", "experiance-section"], [1, "alert", "alert-default"], [1, "list-group"], [1, "list-group-item"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "col", "education-section"], ["label", "Skills & Certification"], [1, "skills-section-head", "alert", "alert-default"], [1, "table", "skill-table"], ["scope", "row"], ["label", "Portfolio"], ["label", "Contact"], [1, "elfsight-app-47f60202-81ab-44d4-9e18-af402e8680a8"], [1, "short-bio"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [3, "fontSet", "fontIcon", 4, "ngIf", "ngIfElse"], ["showBioLabel", ""], [1, "badge", "badge-primary", "badge-pill"], [3, "fontSet", "fontIcon"], [1, "major-skills"], ["class", "default-bg", 4, "ngFor", "ngForOf"], [1, "example-section"], ["mode", "determinate", "color", "primary", 3, "value"], ["target", "_blank", "mat-icon-button", "", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "mat-icon-button", "", 3, "href"], ["color", "primary", 3, "fontSet", "fontIcon"], [1, "col"], [1, "counter"], [1, "fas", "fa-users", "fa-2x"], [1, "count-text"], [1, "count-title"], [1, "fas", "fa-tasks", "fa-2x"], [1, "fas", "fa-code-branch", "fa-2x"], [1, "fas", "fa-medal", "fa-2x"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProfileComponent_div_0_Template, 184, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__["NgxTypedJsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  max-width: 120px;\n  border-radius: 50% !important;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profile-head[_ngcontent-%COMP%]   div.mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 2px;\n  color: #64646f;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover, .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:active, .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover   .badge-pill[_ngcontent-%COMP%], .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:active   .badge-pill[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .badge-pill[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.major-skills[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 8px;\n  padding-bottom: 0px;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  max-height: 360px;\n}\n\n.profile-wrapper[_ngcontent-%COMP%]   .carousel-row[_ngcontent-%COMP%] {\n  max-width: calc(100% - 32px);\n}\n\n.carousel-item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.counter[_ngcontent-%COMP%] {\n  background-color: #2c2d3a;\n  padding: 20px 0;\n  border-radius: 5px;\n}\n\n.count-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: normal;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.fa-2x[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  display: table;\n  color: #c43c5c;\n}\n\n.counter-section[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #2c2d3a;\n  color: #eaeaea;\n}\n\n.experiance-section[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background: #2c2d3a;\n  color: #eaeaea;\n  border-top: 1px solid #c43c5c;\n}\n\n.experiance-section[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .skills-section-head[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  color: #ff7b7b;\n}\n\n.skill-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .skill-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.profile-head-btn-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSkE7Ozs7RUFJRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLDRCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FBWUY7O0FBVEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWUY7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFUQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZRjs7QUFUQTtFQUNFLGdCQUFBO0FBWUY7O0FBVEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQWFGOztBQVZBOzs7RUFHRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7O0VBRUUsYUFBQTtBQWNGOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaGVhZCBkaXYubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjNjQ2NDZmO1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIsXG4uc2hvcnQtYmlvIHVsLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTphY3RpdmUsXG4uc2hvcnQtYmlvIHVsLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAuYmFkZ2UtcGlsbCxcbi5zaG9ydC1iaW8gdWwubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtOmFjdGl2ZSAuYmFkZ2UtcGlsbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmJhZGdlLXBpbGwge1xuICBjb2xvcjogI2NjYztcbn1cbi5tYWpvci1za2lsbHMgLm1hdC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5jYXJvdXNlbC1pdGVtIHtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5jYXJvdXNlbC1yb3cge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xufVxuLmNhcm91c2VsLWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvdW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZDNhO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvdW50LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS0yeCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiAjYzQzYzVjO1xufVxuXG4uY291bnRlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZDNhO1xuICBjb2xvcjogI2VhZWFlYTtcbn1cbi5leHBlcmlhbmNlLXNlY3Rpb24gLmxpc3QtZ3JvdXAtaXRlbSxcbi5lZHVjYXRpb24tc2VjdGlvbiAubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzJjMmQzYTtcbiAgY29sb3I6ICNlYWVhZWE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzQzYzVjO1xufVxuXG4uZXhwZXJpYW5jZS1zZWN0aW9uIC5hbGVydCxcbi5lZHVjYXRpb24tc2VjdGlvbiAuYWxlcnQsXG4uc2tpbGxzLXNlY3Rpb24taGVhZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmN2I3Yjtcbn1cbi5za2lsbC10YWJsZSB0ZCxcbi5za2lsbC10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9maWxlLWhlYWQtYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "mrSG":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "v0/F":
/*!****************************************************!*\
  !*** ./src/app/shared/services/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/profile */ "HKXI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.profileUrl = './../data/profile.json';
    }
    getFullProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let profileJSON = yield this.httpClient.get(this.profileUrl).toPromise();
                return new _models_profile__WEBPACK_IMPORTED_MODULE_1__["Profile"](profileJSON);
            }
            catch (ex) {
                throw new Error('Unable to fetch profile, Please try again later');
            }
        });
    }
}
ProfileService.??fac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProfileService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ProfileService, factory: ProfileService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map