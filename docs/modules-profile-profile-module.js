(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "G6Az":
/*!**************************************************!*\
  !*** ./src/app/shared/services/blogs.service.ts ***!
  \**************************************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "UYTu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");




class BlogsService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getTopBlogs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.apollo
                    .query({
                    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1__["default"] `
            {
              user(username: "shashibadhuk") {
                publication {
                  posts(page: 0) {
                    title
                    brief
                    slug
                    dateAdded
                    coverImage
                    followersCount
                    totalReactions
                  }
                }
              }
            }
          `,
                })
                    .toPromise();
            }
            catch (ex) {
                throw new Error('Unable to fetch blogs, Please try again later');
            }
        });
    }
}
BlogsService.ɵfac = function BlogsService_Factory(t) { return new (t || BlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
BlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BlogsService, factory: BlogsService.ɵfac, providedIn: 'root' });


/***/ }),

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
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_material_module__WEBPACK_IMPORTED_MODULE_2__["NgMaterialModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__["NgxTypedJsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
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
/* harmony import */ var src_app_shared_services_blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/blogs.service */ "G6Az");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");












function ProfileComponent_div_0_div_11_li_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 51);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fontSet", item_r10.itemIcon.indexOf("fab") >= 0 ? "fab" : "fas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fontIcon", ctx_r11.getFontAwesomeIcon(item_r10.itemIcon));
} }
function ProfileComponent_div_0_div_11_li_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.itemLabel, " ");
} }
function ProfileComponent_div_0_div_11_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_0_div_11_li_2_mat_icon_1_Template, 1, 2, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_0_div_11_li_2_ng_template_2_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.itemIcon)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.itemValue);
} }
function ProfileComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_0_div_11_li_2_Template, 6, 3, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.profile.shortBio);
} }
function ProfileComponent_div_0_div_12_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r17.skillLabel + " - " + skill_r17.skillValue + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skill_r17.skillValue);
} }
function ProfileComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_0_div_12_mat_card_1_Template, 6, 2, "mat-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.profile.majorSkills);
} }
function ProfileComponent_div_0_mat_card_actions_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", account_r19.profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fontSet", account_r19.accountIcon.indexOf("fab") >= 0 ? "fab" : "fas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fontIcon", ctx_r18.getFontAwesomeIcon(account_r19.accountIcon));
} }
function ProfileComponent_div_0_mat_card_actions_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_0_mat_card_actions_13_a_1_Template, 2, 3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.profile.socialAccounts);
} }
function ProfileComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", blog_r20.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, blog_r20.dateAdded, "dd/MM/yyyy hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r20.brief, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "https://blogs.shashibadhuk.com/" + blog_r20.slug, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_0_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Happy Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.counter.customers);
} }
function ProfileComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.counter.projects);
} }
function ProfileComponent_div_0_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Repositories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.counter.repos);
} }
function ProfileComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Certifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.counter.certificates);
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_0_div_11_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_0_div_12_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_div_0_mat_card_actions_13_Template, 2, 1, "mat-card-actions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hi I am Shashi Badhuk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-typed-js", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hire Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Download CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Blogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileComponent_div_0_div_40_Template, 14, 8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProfileComponent_div_0_div_44_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProfileComponent_div_0_div_45_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProfileComponent_div_0_div_46_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileComponent_div_0_div_47_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ProfileComponent_div_0_Template_mat_expansion_panel_opened_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.panelOpenState = true; })("closed", function ProfileComponent_div_0_Template_mat_expansion_panel_closed_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " About Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Professional Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 9+ years of experience in designing and development of software solutions for Web Apps, Javascript based TV/STB/OTT Apps and Hybrid Mobile Apps. Expert in designing high-performance, secure, and scalable web applications on the AWS stack along with exposure in architecture, design, and development of web applications, integration with devops tools or with 3rd-party solutions, and deployment on cloud. As an individual contributor the major skillsets are Javascript, NodeJS, ExpressJS, Angular, MongoDB, MySql, Docker, Kubernetes, Redis, AWS Cloud, Git, Nginx, Cordova, Ionic etc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Currently working on project which manage collaboration devices remotely to perform their activities like firmware upgrade, reboot, events syncing, and configurations changes etc. Involved in design and development for its microservices and its integration with other third-party tools along with the deployment on AWS Infrastructure. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-tab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Work Experiance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Staff Engineer at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Nagarro Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Since July 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Senior Software Engineer at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Barco Electronics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Feb 2020 to June 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Technical Lead - Full Stack at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Affle Limited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Apr 2015 to Feb 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Software Engineer at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Ebizon Netinfo Pvt Ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Mar 2013 to Apr 2015");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2010 - 2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Master's in Computer Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Mahamaya Technical University, Noida, India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "2007 - 2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Bachelor's in Computer Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Chhatrapati Shahu Ji Maharaj University, Kanpur, India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-tab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Technical Skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Frontend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " HTML, CSS, Bootstrap, Javascript, TypeScript , Angular, MarionetteJS, Ionic, Cordova ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " NodeJS, ExpressJS, GraphQL, NestJS, Mocha & Chai, EJS, Handlebar, RabbitMQ, PHP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "MongoDB, MySQL, Postgres, Redis, Parse Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "DevOps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Git, Nginx, Apache, Jenkins, Docker, Kubernetes, Kibana, Terraform, Newrelic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " AWS Cloud, Load Balancing & AutoScaling, SSL Integration, DNS Management, Mongo Atlas, Azure IoT, Google K8s Cluster etc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Others Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Gulp, Browserify, Webpack, PM2, JIRA, Slack, Basecamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Certifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Certified DevOps Professional By Skill Speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Certificate In Entrepreneurship and Leadership Management By Amity University, Noida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Project Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "IoT Based Device Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Node, Express, EJS, Angular, Bootstrap, MongoDB, Jenkins, Docker, Kubernetes, Azure IoT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Hassle free management of collaboration devices and its peripherals It increases availability, thereby enhancing meeting room user productivity. It brings an easy to use UI for remote and reliable device management to guarantee the user experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "OTT Solution for Set Top Box Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Node, Express, Angular, Bootstrap, MongoDB, Jenkins, Docker, Redis, AWS Cloud, RabbitMQ, Handlebar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "The DTH company wants Smart OTT solution for their Set Top Box devices. Which can provide subscriber based access to a world of OTT/Video Streaming apps. It includes bunch of Apps, and a huge library of curated online videos, Catch-Up TV shows, Web-series etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "eCommerce Mobile App Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Bootstrap, Cordova, Ionic, Node, Express, PHP, Magento, Shell Script, MySQL, Parse Cloud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Automation tool for mobile app builder for the magento ecommerce website. It automates the generation of mobile apps for the ecommerce backend. The Apps have ecommerce features like catalog, checkout, payment, order, shipping etc..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-tab", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.profile.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profile.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "auto")("height", "60vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profile.shortBio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profile.majorSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profile.socialAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animation", "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-ride", "carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", ctx_r0.headlines)("loop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.blogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.counter && ctx_r0.counter.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.counter && ctx_r0.counter.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.counter && ctx_r0.counter.repos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.counter && ctx_r0.counter.certificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
} }
class ProfileComponent {
    constructor(profileService, blogsService) {
        this.profileService = profileService;
        this.blogsService = blogsService;
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
           'Skilled Engineering Manager / Principal Engineer'
           'A Freelancer with DevOps Skills',
           '10+ Years Experiance in Full Stack Domain',
           'Cloud Services and AI Enthusiastic',
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
        this.blogsService.getTopBlogs().then((blogsData) => {
            var _a, _b, _c;
            this.blogs = (_c = (_b = (_a = blogsData === null || blogsData === void 0 ? void 0 : blogsData.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.publication) === null || _c === void 0 ? void 0 : _c.posts;
        });
    }
    getFontAwesomeIcon(iconClassStr) {
        return iconClassStr.replace(/far|fab|fas/gi, '');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-2", "nopadding"], [1, "default-bg"], ["mat-card-image", "", 3, "src", "alt"], [1, "profile-head"], ["class", "short-bio", 4, "ngIf"], ["class", "major-skills", 4, "ngIf"], [4, "ngIf"], [1, "col-md-10", "nopadding"], [1, "profile-wrapper", "container-fluid"], [1, "row", "carousel-row"], [1, "col-md-12"], ["id", "carouselExampleSlidesOnly", 1, "carousel", "slide", 3, "animation"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/bg-default.jpeg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [3, "strings", "loop"], [1, "typing"], [1, "btn-group", "profile-head-btn-group"], ["href", "https://www.linkedin.com/in/shashibadhuk", "target", "_blank", "mat-raised-button", "", "color", "accent"], ["href", "/assets/resume/ShashiBadhuk_NodeJS_FullStack_9Years.pdf", "target", "_blank", "mat-raised-button", "", "color", "primary", "download", ""], ["label", "Blogs"], [1, "col", "experiance-section"], [1, "alert", "alert-default"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["label", "About Me"], [1, "container", "counter-section"], [1, "row", "text-center"], ["class", "col", 4, "ngIf"], [3, "expanded", "opened", "closed"], ["label", "Experiance & Education"], [1, "list-group-item"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "col", "education-section"], ["label", "Skills & Certification"], [1, "skills-section-head", "alert", "alert-default"], [1, "table", "skill-table"], ["scope", "row"], ["label", "Portfolio"], ["label", "Contact"], [1, "elfsight-app-47f60202-81ab-44d4-9e18-af402e8680a8"], [1, "short-bio"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [3, "fontSet", "fontIcon", 4, "ngIf", "ngIfElse"], ["showBioLabel", ""], [1, "badge", "badge-primary", "badge-pill"], [3, "fontSet", "fontIcon"], [1, "major-skills"], ["class", "default-bg", 4, "ngFor", "ngForOf"], [1, "example-section"], ["mode", "determinate", "color", "primary", 3, "value"], ["target", "_blank", "mat-icon-button", "", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "mat-icon-button", "", 3, "href"], ["color", "primary", 3, "fontSet", "fontIcon"], [1, "mb-1", "blog-title"], [2, "width", "200px", "height", "150px", 3, "src"], [1, "blog-brief-container"], [1, "blog-date"], [1, "blog-brief"], [1, "read-more"], ["target", "_blank", "mat-raised-button", "", "color", "primary", 3, "href"], [1, "col"], [1, "counter"], [1, "fas", "fa-users", "fa-2x"], [1, "count-text"], [1, "count-title"], [1, "fas", "fa-tasks", "fa-2x"], [1, "fas", "fa-code-branch", "fa-2x"], [1, "fas", "fa-medal", "fa-2x"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 199, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__["NgxTypedJsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  max-width: 120px;\n  border-radius: 50% !important;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profile-head[_ngcontent-%COMP%]   div.mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 2px;\n  color: #64646f;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover, .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:active, .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover   .badge-pill[_ngcontent-%COMP%], .short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:active   .badge-pill[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.short-bio[_ngcontent-%COMP%]   ul.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .badge-pill[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.major-skills[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 8px;\n  padding-bottom: 0px;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  max-height: 360px;\n}\n\n.profile-wrapper[_ngcontent-%COMP%]   .carousel-row[_ngcontent-%COMP%] {\n  max-width: calc(100% - 32px);\n}\n\n.carousel-item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.counter[_ngcontent-%COMP%] {\n  background-color: #2c2d3a;\n  padding: 20px 0;\n  border-radius: 5px;\n}\n\n.count-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: normal;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.fa-2x[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  display: table;\n  color: #c43c5c;\n}\n\n.counter-section[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #2c2d3a;\n  color: #eaeaea;\n}\n\n.experiance-section[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background: #2c2d3a;\n  color: #eaeaea;\n  border-top: 1px solid #c43c5c;\n}\n\n.experiance-section[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .skills-section-head[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  color: #ff7b7b;\n}\n\n.skill-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .skill-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.profile-head-btn-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.read-more[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.blog-brief-container[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n\n.blog-brief[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSkE7Ozs7RUFJRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLDRCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FBWUY7O0FBVEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWUY7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFUQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZRjs7QUFUQTtFQUNFLGdCQUFBO0FBWUY7O0FBVEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQWFGOztBQVZBOzs7RUFHRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7O0VBRUUsYUFBQTtBQWNGOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRjs7QUFYQTtFQUNFLFlBQUE7QUFjRjs7QUFYQTtFQUNFLGdCQUFBO0FBY0Y7O0FBWEE7RUFDRSxXQUFBO0FBY0Y7O0FBWEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFjRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaGVhZCBkaXYubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjNjQ2NDZmO1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIsXG4uc2hvcnQtYmlvIHVsLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTphY3RpdmUsXG4uc2hvcnQtYmlvIHVsLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAuYmFkZ2UtcGlsbCxcbi5zaG9ydC1iaW8gdWwubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtOmFjdGl2ZSAuYmFkZ2UtcGlsbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNob3J0LWJpbyB1bC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmJhZGdlLXBpbGwge1xuICBjb2xvcjogI2NjYztcbn1cbi5tYWpvci1za2lsbHMgLm1hdC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5jYXJvdXNlbC1pdGVtIHtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5jYXJvdXNlbC1yb3cge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xufVxuLmNhcm91c2VsLWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvdW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZDNhO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvdW50LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS0yeCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiAjYzQzYzVjO1xufVxuXG4uY291bnRlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZDNhO1xuICBjb2xvcjogI2VhZWFlYTtcbn1cbi5leHBlcmlhbmNlLXNlY3Rpb24gLmxpc3QtZ3JvdXAtaXRlbSxcbi5lZHVjYXRpb24tc2VjdGlvbiAubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzJjMmQzYTtcbiAgY29sb3I6ICNlYWVhZWE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzQzYzVjO1xufVxuXG4uZXhwZXJpYW5jZS1zZWN0aW9uIC5hbGVydCxcbi5lZHVjYXRpb24tc2VjdGlvbiAuYWxlcnQsXG4uc2tpbGxzLXNlY3Rpb24taGVhZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmN2I3Yjtcbn1cbi5za2lsbC10YWJsZSB0ZCxcbi5za2lsbC10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9maWxlLWhlYWQtYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmJsb2ctdGl0bGUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yZWFkLW1vcmUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYmxvZy1icmllZi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxJTtcbn1cblxuLmJsb2ctYnJpZWYge1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIHBhZGRpbmctYm90dG9tOiAxJTtcbn1cbiJdfQ== */"] });


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
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map
