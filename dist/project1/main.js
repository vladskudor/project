(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project1\src\main.ts */"zUnb");


/***/ }),

/***/ "0d4N":
/*!******************************************************************!*\
  !*** ./src/app/components/resume/daughter/daughter.component.ts ***!
  \******************************************************************/
/*! exports provided: DaughterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaughterComponent", function() { return DaughterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DaughterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DaughterComponent.ɵfac = function DaughterComponent_Factory(t) { return new (t || DaughterComponent)(); };
DaughterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DaughterComponent, selectors: [["app-daughter"]], inputs: { shopName: "shopName" }, decls: 10, vars: 1, consts: [[2, "text-align", "center", "padding", "50px 0 50px 0"], [2, "color", "red"]], template: function DaughterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "douchter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.shopName, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL2RhdWdodGVyL2RhdWdodGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaughterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daughter',
                templateUrl: './daughter.component.html',
                styleUrls: ['./daughter.component.css']
            }]
    }], function () { return []; }, { shopName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5fLt":
/*!*************************************************************************!*\
  !*** ./src/app/components/car-information/car-information.component.ts ***!
  \*************************************************************************/
/*! exports provided: CarInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarInformationComponent", function() { return CarInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class CarInformationComponent {
    constructor(actRoute, router, http) {
        this.actRoute = actRoute;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        const allCars = JSON.parse(localStorage.getItem('car'));
        if (allCars) {
            this.cars = allCars;
        }
        this.getCar();
        console.log(allCars);
    }
    getCar() {
        this.subscribtion = this.actRoute.params.subscribe((params) => {
            for (let car = 0; car < this.cars.length; car++) {
                this.param = JSON.parse(params['foundCar']);
                if (this.cars[car].firstcarName === this.param.firstcarName && this.cars[car].carModel1 === this.param.carModel1) {
                    this.currentParam = this.cars[car];
                }
            }
        });
    }
    save() {
        if (!this.cars) {
            this.cars = [];
        }
        localStorage.setItem('car', JSON.stringify(this.cars));
        this.router.navigate(['/cars']);
        alert(`Add new changes for car - ${this.currentParam.firstcarName}`);
    }
}
CarInformationComponent.ɵfac = function CarInformationComponent_Factory(t) { return new (t || CarInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CarInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarInformationComponent, selectors: [["app-car-information"]], decls: 41, vars: 10, consts: [[2, "width", "100%", "background", "black", "margin-top", "-50px", "height", "100vh", "padding", "50px 0"], [1, "inform-block"], ["type", "text", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [3, "click"]], template: function CarInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarInformationComponent_Template_input_ngModelChange_5_listener($event) { return ctx.currentParam.firstcarName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarInformationComponent_Template_input_ngModelChange_11_listener($event) { return ctx.currentParam.carModel1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "max speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarInformationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.currentParam.maxSpeed1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "km/hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "acceleration 0 - 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarInformationComponent_Template_input_ngModelChange_25_listener($event) { return ctx.currentParam.timeHundred1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "horse power");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarInformationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.currentParam.horsePower = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "hp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarInformationComponent_Template_button_click_39_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentParam.firstcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentParam.firstcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentParam.carModel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentParam.carModel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentParam.maxSpeed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentParam.maxSpeed1, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentParam.timeHundred1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentParam.timeHundred1, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentParam.horsePower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentParam.horsePower, " / ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["b[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  color: #eee;\r\n  font-size: 22px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  opacity: .7;\r\n  background: grey;\r\n  color: black;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  margin: 10px 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  background: black;\r\n  color: grey;\r\n  cursor: pointer;\r\n  padding: 10px 12px;\r\n  border: none;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: white;\r\n  color: black;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  -webkit-text-decoration: underline white;\r\n          text-decoration: underline white;\r\n}\r\n\r\n.inform-block[_ngcontent-%COMP%] {\r\n  background-image: url(\"/assets/images/renaultblack2.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: inherit;\r\n  background-position: center;\r\n  background-position-y: -30px;\r\n  background-size: 100%;\r\n  border-radius: 5px;\r\n  margin: calc(50vh - 300px) auto;\r\n  width: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  b[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    width: 130px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .inform-block[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXItaW5mb3JtYXRpb24vY2FyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXItaW5mb3JtYXRpb24vY2FyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJiIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogLjc7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdoaXRlO1xyXG59XHJcblxyXG4uaW5mb3JtLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9yZW5hdWx0YmxhY2syLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMzBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogY2FsYyg1MHZoIC0gMzAwcHgpIGF1dG87XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm9ybS1ibG9jayB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-information',
                templateUrl: './car-information.component.html',
                styleUrls: ['./car-information.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "602H":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout1.component.ts ***!
  \********************************************************/
/*! exports provided: Layout1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1Component", function() { return Layout1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function Layout1Component_nav_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WORK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PROCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SERVICES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTACT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Layout1Component {
    constructor(router) {
        this.router = router;
        this.likes = 735;
    }
    ngOnInit() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUser = user;
        }
        const like = JSON.parse(localStorage.getItem('likes'));
        if (like) {
            this.likes = like.likes;
        }
    }
    plusLikes(elementLikes) {
        this.likes++;
        this.user = {
            likes: this.likes
        };
        localStorage.setItem('likes', JSON.stringify(this.user));
    }
}
Layout1Component.ɵfac = function Layout1Component_Factory(t) { return new (t || Layout1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Layout1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Layout1Component, selectors: [["app-layout1"]], decls: 362, vars: 2, consts: [["id", "header-box"], ["id", "media-button-div", 3, "click"], [2, "list-style", "none", "cursor", "pointer"], ["id", "menu", 4, "ngIf"], ["id", "header-home"], ["id", "header-text"], ["id", "button"], ["href", "/layout1/#contact"], ["id", "main-text"], ["id", "main-img"], ["alt", "", "src", "./assets/images/02_One Page.png"], ["id", "content"], ["id", "content-process"], ["id", "content-process-text"], ["id", "span1"], ["id", "span-div1"], ["id", "span2"], ["id", "span-div2"], ["id", "span3"], ["id", "span-div3"], ["id", "content-options"], ["id", "div-content-img"], ["alt", "", "src", "./assets/images/html-css.jpg"], ["id", "section-box"], ["id", "section-box-inform"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-bag-dash", 2, "width", "40px", "height", "40px"], ["d", "M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z", "fill-rule", "evenodd"], ["d", "M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"], ["d", "M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z", "fill-rule", "evenodd"], ["id", "section-text"], [2, "text-align", "left"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-clock", 2, "width", "40px", "height", "40px"], ["d", "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z", "fill-rule", "evenodd"], ["d", "M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star", 2, "width", "40px", "height", "40px"], ["d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z", "fill-rule", "evenodd"], ["id", "section-box-inform", 3, "click"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-heart", 2, "width", "40px", "height", "40px"], ["elementLikes", ""], ["d", "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z", "fill-rule", "evenodd"], ["id", "main-box"], [2, "background", "#838383"], ["alt", "", "src", "./assets/images/images.png"], [2, "background", "#dddddd"], ["alt", "", "src", "./assets/images/images2.png"], ["alt", "", "src", "./assets/images/\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E.png"], ["alt", "", "src", "./assets/images/\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E (1).png"], ["alt", "", "src", "./assets/images/images6.jpg"], ["alt", "", "src", "./assets/images/images7.jpg"], ["alt", "", "src", "./assets/images/images8.png"], ["id", "more-text-href", 2, "background", "#838383"], ["alt", "", "src", "./assets/images/images9.jpg"], ["id", "more-text"], [2, "color", "grey"], ["id", "main-video"], ["id", "text-from-video"], [1, "video"], ["controls", ""], ["videoPlayer", ""], ["src", "assets/videos/\u0423\u0440\u043E\u043A\u0438 Front end _ HTML \u0441 \u043D\u0443\u043B\u044F _ \u0422\u0435\u0433\u0438.mp4", "type", "video/mp4"], ["id", "service"], ["id", "main-shop"], ["id", "blocks"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-pentagon", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M8 1.288l-6.842 5.56L3.733 15h8.534l2.575-8.153L8 1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrow-up-right-square", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z", "fill-rule", "evenodd"], ["d", "M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-phone", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z", "fill-rule", "evenodd"], ["d", "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-controller", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M11.119 2.693c.904.19 1.75.495 2.235.98.407.408.779 1.05 1.094 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.815-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773a11.307 11.307 0 0 1-.739-.809c-.126-.147-.25-.291-.368-.422-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.422-.243.283-.494.576-.739.81-.398.378-.877.705-1.513.772a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772.486-.485 1.331-.79 2.235-.98.932-.196 2.03-.292 3.119-.292 1.089 0 2.187.096 3.119.292zm-6.032.979c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.505C4.861 9.97 5.978 9.026 8 9.026s3.139.943 3.965 1.855c.164.182.307.35.44.505.214.25.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z", "fill-rule", "evenodd"], ["d", "M11.5 6.026a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-7-2.5h1v3h-1v-3z"], ["d", "M3.5 6.526h3v1h-3v-1zM3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .258.966l-1.932.518a.5.5 0 0 1-.612-.354zm9.976 0a.5.5 0 0 0-.353-.613l-1.932-.518a.5.5 0 1 0-.259.966l1.932.518a.5.5 0 0 0 .612-.354z"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-truck", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5v7h-1v-7a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5v1A1.5 1.5 0 0 1 0 10.5v-7zM4.5 11h6v1h-6v-1z", "fill-rule", "evenodd"], ["d", "M11 5h2.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5h-1v-1h1a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4.5h-1V5zm-8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "fill-rule", "evenodd"], ["d", "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-pencil", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z", "fill-rule", "evenodd"], ["d", "M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-lamp-fill", 2, "width", "50px", "height", "50px", "margin-bottom", "30px"], ["d", "M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z"], ["d", "M7.5 1l.276-.553a.25.25 0 0 1 .448 0L8.5 1h-1zm-.615 8h2.23C9.968 10.595 11 12.69 11 13.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5c0-.81 1.032-2.905 1.885-4.5z", "fill-rule", "evenodd"], ["id", "testimonials"], ["id", "box-inform"], ["id", "box-inform-text"], [2, "font-size", "10px", "letter-spacing", "2px"], ["id", "div-block", 2, "display", "inline-flex"], ["id", "div", 2, "background", "#fff", "width", "10px", "height", "10px", "border-radius", "50px"], ["id", "div-img"], ["alt", "1", "src", "./assets/images/img1.png"], ["alt", "2", "src", "./assets/images/img2.png"], ["alt", "3", "src", "./assets/images/img3.png"], ["alt", "4", "src", "./assets/images/img4.png"], ["id", "contact"], ["alt", "5", "src", "./assets/images/img5.png"], ["id", "registr-box"], ["id", "registr-box-text"], [2, "text-align", "center", "padding", "20px"], [2, "text-align", "center"], ["id", "registr-box-input"], ["id", "inp1-2"], ["placeholder", "Your Name", "type", "text"], ["placeholder", "Your Email", "type", "text", 1, "email-input"], ["id", "inp3"], ["placeholder", "Your Title", "type", "text"], ["id", "inp4"], ["placeholder", "Your Comment", "type", "text"], [1, "message-div"], ["id", "button-message"], ["id", "div-footer"], [2, "color", "#ffffff"], ["href", "#"], ["id", "footer-text"], ["href", "https://vladskudor.github.io/cars/", "target", "_blank"], ["id", "menu"], ["href", "/layout1/#menu", 2, "color", "#4ad2cd"], ["href", "/layout1/#content"], ["href", "/layout1/#section-box"], ["href", "/layout1/#main-video"], ["href", "/layout1/#main-shop"], ["href", "/layout1/#registr-box"]], template: function Layout1Component_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Layout1Component_Template_div_click_2_listener() { return ctx.menu = !ctx.menu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "______");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "______");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "______");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Layout1Component_nav_10_Template, 14, 0, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " We Design and Develop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " We are a new design studio based in USA. We have over");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 20 years of combined experience, and know a thing ar two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " about designing websites and mobile apps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " CONTACT US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Divide have don't man wherein air fourth. Own itself make have night won't make.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " A you under Seed appear which good give. Own give air without fowl moveth dry first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " heaven fruit,dominion she'd won't very all. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Professional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "UI/UX DESIGN 75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "WEB DEVELOPMENT 90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "MARKETING 63%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 548 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " PROJECTS COMPLETED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 1465 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " WORKING HOURS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 612 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " POSITIVE FEEDBACKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Layout1Component_Template_div_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99); return ctx.plusLikes(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " HAPPY CLIENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "LOAD MORE WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Our Work Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Was years it seasons was there form he in them together over that,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " third sixth gathered female creeping bearing behold years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "video", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "source", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Browser not supported ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "UI/UX DESIGN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Be set fourth land god darkness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " make it wherein own ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "WEB DEWELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " A she'd them bring void moving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " third she'd kind fill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "svg", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "APP/MOBILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " third she'd kind fill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "svg", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "GAME DESIGN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Morning his saying moveth it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " multiply appear life be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "svg", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "SEO/MARKETING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Give won't after land fill creeping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " meat you,may ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "svg", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "PHOTOGRAPHY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Creepeth one seas cattle grass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " give moving saw give ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "svg", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "GRAPHIC DESIGN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Open,great whales air rule for, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " fourth life whales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "svg", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "ILLUSTRATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Whales likeness nath, man kind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " for them air two won't ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " \" Outstanding job and exceeded all expentations. It was a pleasure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " to work with them on a sizable first project and am looking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "forward to start the next one asap.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " MICHAEL HOPKINS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h1", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Need a Project?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Let us know what you're looking for in an agency.We'll take a look and see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " this could be the start of something beatiful. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "form", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " SEND MESSAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h3", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Piroll Design, Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "c 2020 Piroll.All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Designed by robirurk. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "vladskudor371@mail.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "+380687320185");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Carreer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Legals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Cooperation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.likes, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["svg[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\nheader[_ngcontent-%COMP%] {\n  z-index: 5;\n  width: 100%;\n  \n  \n  background: url('wallp.jpeg');\n  background-repeat: no-repeat;\n  -moz-background-size: 100%;\n  -webkit-background-size: 100%;\n  -o-background-size: 100%;\n  height: 800px;\n}\n\n@media (max-width: 600px) {\n  #header-box[_ngcontent-%COMP%] {\n    font-size: 10px;\n    \n  }\n\n  nav[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  header[_ngcontent-%COMP%] {\n    background: url('wallp.jpeg');\n    background-repeat: no-repeat;\n    -moz-background-size: 100%;\n    -webkit-background-size: 100%;\n    -o-background-size: 100%;\n  }\n\n  #header-home[_ngcontent-%COMP%] {\n    \n  }\n}\n\n#header-home[_ngcontent-%COMP%] {\n  background-image: url('wallp.jpeg');\n}\n\n#header-box[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #e9e9e9;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n#media-button-div[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 500px) {\n  #media-button-div[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: center;\n    padding-top: 30px;\n  }\n\n  #header-box[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\n@media (max-width: 600px) {\n  #media-button-div[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0;\n    font-size: 5px;\n  }\n\n  #header-text[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n#logo[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n  cursor: pointer;\n  float: left;\n  width: 31px;\n  height: 25px;\n  margin-left: 10%;\n  padding: 40px 0 40px 0;\n}\n\n#logo[_ngcontent-%COMP%]:hover {\n  filter: blur(1px);\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  width: 50px;\n  margin-left: -10px;\n}\n\n#menu[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n  float: right;\n  padding: 15px 0 15px 0;\n}\n\n#menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  letter-spacing: 0.5px;\n  font-weight: bold;\n  margin-left: 30px;\n  text-decoration: none;\n}\n\n#menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: .5s;\n  color: grey;\n}\n\n#but-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 1020px) {\n\n  #logo[_ngcontent-%COMP%] {\n    padding-top: 25px;\n    padding-bottom: 0;\n    margin-left: 0;\n    width: 100%;\n    text-align: center;\n    float: none;\n  }\n\n  #menu[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    float: none;\n  }\n\n  #menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  #but-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 500px) {\n\n  #logo[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n\n  #menu[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n  }\n\n  #menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    display: block;\n  }\n}\n\n#header-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  margin-top: 300px;\n  width: 450px;\n  float: right;\n  margin-right: 9%;\n}\n\n#header-text[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 3px white;\n  letter-spacing: .5px;\n}\n\n#button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  width: 200px;\n  background: #10c9c3;\n  color: #fff;\n  margin-top: 25px;\n  padding: 23px 0 23px 0;\n  font-weight: bold;\n}\n\n#button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: .5s;\n  background: #0cf2eb;\n}\n\n@media (max-width: 1000px) {\n  #header-text[_ngcontent-%COMP%] {\n    margin: calc(50vh - 200px);\n  }\n\n  header[_ngcontent-%COMP%] {\n    height: 670px;\n  }\n}\n\n@media (max-width: 800px) {\n  header[_ngcontent-%COMP%]{\n    height: 70vh;\n  }\n  #header-text[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    \n    margin: 50px 40px 0 40px;\n  }\n}\n\n@media (max-width: 600px) {\n  header[_ngcontent-%COMP%]{\n    height: 50vh;\n  }\n  #header-text[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    \n    margin: 50px 0 !important;\n  }\n\n  #header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1200 - 320));\n  }\n\n  #header-box[_ngcontent-%COMP%] {\n    padding: 10px 0 10px 0;\n  }\n\n  #header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px 40px 10px 40px;\n  }\n}\n\nmain[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 420px;\n  background: #fff;\n}\n\n#main-box[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n#main-text[_ngcontent-%COMP%] {\n  height: auto;\n  background: #fff;\n  text-align: center;\n  \n  padding: 100px 0 50px 0;\n}\n\n#main-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#main-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8a8a8a;\n}\n\n#main-img[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 85px;\n}\n\n#content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 170px;\n  \n  background: #e9e9e9;\n}\n\n#content-process[_ngcontent-%COMP%] {\n  width: 500px;\n  padding-top: 170px;\n  margin-left: 10%;\n  background: #e9e9e9;\n}\n\n#content-process-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#span1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: black;\n}\n\n#span-div1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 5px;\n  background: #10c9c3;\n}\n\n#span2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: black;\n}\n\n#span-div2[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 5px;\n  background: #10c9c3;\n}\n\n#span3[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: black;\n}\n\n#span-div3[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 5px;\n  background: #10c9c3;\n}\n\n@media (max-width: 600px) {\n  #content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n\n  #content-process[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 5px 20px 5px;\n    width: 100%;\n    \n  }\n\n  #content-process[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #span-div1[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n\n  #span-div2[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  #span-div3[_ngcontent-%COMP%] {\n    width: 63%;\n  }\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  background: #10c9c3;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n#section-box[_ngcontent-%COMP%] {\n  width: 1100px;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 230px 230px 230px 230px;\n  grid-gap: 50px;\n  grid-row: 50px;\n  grid-auto-rows: auto;\n  padding: 100px 0 100px 0;\n}\n\n#section-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n#section-box-inform[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n@media (max-width: 1100px) {\n  #section-box[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media (max-width: 750px) {\n  #section-box[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 40px 20px 20px 40px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: 40px 40px;\n  }\n}\n\n#main-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  \n}\n\n#main-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 720px) {\n  #main-box[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    \n\n  }\n}\n\n@media (max-width: 600px) {\n  #main-box[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    \n  }\n\n  section[_ngcontent-%COMP%] {\n    \n  }\n}\n\n#more-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0 40px 0;\n  width: 100%;\n  background: #f5f5f5;\n}\n\n#main-video[_ngcontent-%COMP%] {\n  z-index: -9999;\n  padding: 100px 0 100px 0;\n  background: #eee;\n}\n\n#text-from-video[_ngcontent-%COMP%] {\n  z-index: -9999;\n  width: 100%;\n  text-align: center;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 70%;\n  max-height: 760px;\n  padding: 100px 10% 100px 10%;\n}\n\n@media (max-width: 800px) {\n  video[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 600px) {\n  #main-video[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n\n  video[_ngcontent-%COMP%] {\n    width: 60%;\n    padding: 0;\n    margin: 0;\n  }\n}\n\n#main-shop[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #e9e9e9;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n\n}\n\n@media (max-width: 700px) {\n  #main-shop[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: auto;\n  }\n}\n\n@media (max-width: 600px) {\n  #main-shop[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-rows: auto;\n  }\n\n  .email-input[_ngcontent-%COMP%]{\n    margin: 0;\n  }\n}\n\n#blocks[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  text-align: center;\n  height: 250px;\n\n}\n\n#box-inform[_ngcontent-%COMP%] {\n  padding: 180px 0 70px 0;\n  text-align: center;\n  background: #10c9c3;\n}\n\n#box-inform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #fff;\n  font-size: 20px;\n}\n\n#div-block[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n#div-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n#div[_ngcontent-%COMP%]:hover {\n  width: 12px;\n  height: 12px;\n}\n\n@media (max-width: 600px) {\n  #box-inform[_ngcontent-%COMP%] {\n    padding: 30px 0 30px 0;\n  }\n\n  #box-inform-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  #div-block[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n\n#div-img[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 70px 10% 70px 10%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\n#registr-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f5f5f5;\n  \n  display: flex;\n  justify-content: center;\n}\n\n#registr-box-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 0 0 20px 0;\n}\n\n#registr-box-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 0 20px 0;\n}\n\n#inp1-2[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#inp1-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  width: 340px;\n  margin-left: 30px;\n}\n\n#inp3[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n#inp3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px;\n  width: 96%;\n  margin-left: 30px;\n}\n\n#inp4[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n#inp4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  margin-left: 30px;\n  width: 96%;\n  padding: 10px 0 140px 10px;\n}\n\n#button-message[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 180px;\n  height: 50px;\n  padding: 12px;\n  padding-left: 10px;\n  background: #10c9c3;\n  color: #fff;\n  font-weight: bold;\n  margin: 30px 0 30px 0;\n  text-align: center;\n}\n\n@media (max-width: 760px) {\n  #registr-box[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    padding: 30px 0 30px 0;\n    margin: 0;\n  }\n\n  #registr-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  #inp1-2[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: grey;\n  margin: 0;\n  padding: 0;\n  background: #212529;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.message-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#div-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 2fr 1fr 1fr 1fr;\n}\n\n#div-footer[_ngcontent-%COMP%] {\n  padding: 100px 10% 100px 10%;\n}\n\n@media (max-width: 900px) {\n  #div-footer[_ngcontent-%COMP%] {\n    grid-template-columns: \t3fr 2fr;\n    grid-auto-rows: auto;\n    grid-gap: 30px;\n  }\n\n  #div-img[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media (max-width: 500px) {\n  #div-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  #div-footer[_ngcontent-%COMP%] {\n    padding: 20px 20% 20px 20%;\n  }\n\n  #footer-text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #div-img[_ngcontent-%COMP%] {\n    \n    display: block;\n    text-align: center;\n    \n    \n  }\n}\n\n.video[_ngcontent-%COMP%] {\n  background: #eee;\n}\n\n@media (max-width: 600px) {\n  #registr-box-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 40px 20px 40px;\n  }\n\n  #text-from-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 50px 0 50px;\n  }\n\n  #box-inform-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 30px 0 30px;\n    font-size: 15px;\n  }\n\n  #content-process[_ngcontent-%COMP%] {\n    padding: 20px 40px 30px 40px;\n  }\n\n  #main-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 40px 0 40px;\n  }\n}\n\n#button-message[_ngcontent-%COMP%]:hover {\n  transition: .5s;\n  background: white;\n  color: #10c9c3;\n}\n\n@media (max-width: 400px) {\n  #content-process[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  #header-box[_ngcontent-%COMP%] {\n    \n  }\n\n  #section-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  #button-message[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 40px;\n    font-size: 10px;\n  }\n}\n\nvideo[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #eee;\n}\n\n#content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#div-content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 200px;\n  width: 600px;\n  min-width: 300px;\n  padding: 170px 1% 10% 20%;\n}\n\n@media (max-width: 1200px) {\n  #content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #div-content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n\n}\n\n@media (max-width: 1000px) {\n  #content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #div-content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n\n@media (max-width: 880px) {\n  #content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  #div-content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0MS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsNkJBQStDO0VBQy9DLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsNkJBQStDO0lBQy9DLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0UsbUNBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsY0FBYztFQUNkLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usc0NBQXNDO0lBQ3RDLHVDQUF1Qzs7RUFFekM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDOztBQUV4Qzs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmhlYWRlciB7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmhlaWdodDogNjcwcHg7Ki9cbiAgLypiYWNrZ3JvdW5kOiAjZTllOWU5O1x0Ki9cbiAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy93YWxscC5qcGVnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2hlYWRlci1ib3gge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvKm1hcmdpbi10b3A6IDEwMHB4OyovXG4gIH1cblxuICBuYXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3dhbGxwLmpwZWcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuXG4gICNoZWFkZXItaG9tZSB7XG4gICAgLyptYXJnaW4tdG9wOiAtMjAwcHg7Ki9cbiAgfVxufVxuXG4jaGVhZGVyLWhvbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3dhbGxwLmpwZWcnKTtcbn1cblxuI2hlYWRlci1ib3gge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI21lZGlhLWJ1dHRvbi1kaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI21lZGlhLWJ1dHRvbi1kaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cblxuICAjaGVhZGVyLWJveCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjbWVkaWEtYnV0dG9uLWRpdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICB9XG5cbiAgI2hlYWRlci10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuI2xvZ28ge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xufVxuXG4jbG9nbzpob3ZlciB7XG4gIGZpbHRlcjogYmx1cigxcHgpO1xufVxuXG4jbG9nbyBpbWc6aG92ZXIge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4jbWVudSB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMDtcbn1cblxuI21lbnUgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI21lbnUgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IC41cztcbiAgY29sb3I6IGdyZXk7XG59XG5cbiNidXQtbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcblxuICAjbG9nbyB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgI21lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gICNtZW51IGEge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gICNidXQtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAjbG9nbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAjbWVudSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI21lbnUgYSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuI2hlYWRlci10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMzAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDklO1xufVxuXG4jaGVhZGVyLXRleHQge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xufVxuXG4jYnV0dG9uIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICMxMGM5YzM7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAyM3B4IDAgMjNweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2J1dHRvbiBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAuNXM7XG4gIGJhY2tncm91bmQ6ICMwY2YyZWI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2hlYWRlci10ZXh0IHtcbiAgICBtYXJnaW46IGNhbGMoNTB2aCAtIDIwMHB4KTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgaGVpZ2h0OiA2NzBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgaGVhZGVye1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuICAjaGVhZGVyLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKm1hcmdpbi10b3A6IDMwMHB4OyovXG4gICAgbWFyZ2luOiA1MHB4IDQwcHggMCA0MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXJ7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICB9XG4gICNoZWFkZXItdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qbWFyZ2luLXRvcDogMzAwcHg7Ki9cbiAgICBtYXJnaW46IDUwcHggMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2hlYWRlci10ZXh0IHB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAoMjAgLSAxNikgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xuICB9XG5cbiAgI2hlYWRlci1ib3gge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gIH1cblxuICAjaGVhZGVyLXRleHQgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNoZWFkZXItdGV4dCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggNDBweDtcbiAgfVxufVxuXG5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbiNtYWluLWJveCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI21haW4tdGV4dCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKm1hcmdpbi10b3A6IDEwMHB4OyovXG4gIHBhZGRpbmc6IDEwMHB4IDAgNTBweCAwO1xufVxuXG4jbWFpbi10ZXh0IGgxIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21haW4tdGV4dCBwIHtcbiAgY29sb3I6ICM4YThhOGE7XG59XG5cbiNtYWluLWltZyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDg1cHg7XG59XG5cbiNjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxNzBweDtcbiAgLypoZWlnaHQ6IDU3MHB4OyovXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG59XG5cbiNjb250ZW50LXByb2Nlc3Mge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbn1cblxuI2NvbnRlbnQtcHJvY2Vzcy10ZXh0IGRpdiBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzcGFuMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzcGFuLWRpdjEge1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTBjOWMzO1xufVxuXG4jc3BhbjIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jc3Bhbi1kaXYyIHtcbiAgd2lkdGg6IDQzMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzEwYzljMztcbn1cblxuI3NwYW4zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NwYW4tZGl2MyB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICMxMGM5YzM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICNjb250ZW50LXByb2Nlc3Mge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDVweCAyMHB4IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKmhlaWdodDogMjAwcHg7Ki9cbiAgfVxuXG4gICNjb250ZW50LXByb2Nlc3MgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNzcGFuLWRpdjEge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAjc3Bhbi1kaXYyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgI3NwYW4tZGl2MyB7XG4gICAgd2lkdGg6IDYzJTtcbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJhY2tncm91bmQ6ICMxMGM5YzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNzZWN0aW9uLWJveCB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMzBweCAyMzBweCAyMzBweCAyMzBweDtcbiAgZ3JpZC1nYXA6IDUwcHg7XG4gIGdyaWQtcm93OiA1MHB4O1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgcGFkZGluZzogMTAwcHggMCAxMDBweCAwO1xufVxuXG4jc2VjdGlvbi1ib3ggZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5cbiNzZWN0aW9uLWJveC1pbmZvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAjc2VjdGlvbi1ib3gge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgI3NlY3Rpb24tYm94IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDIwcHggNDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogNDBweCA0MHB4O1xuICB9XG59XG5cbiNtYWluLWJveCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgLypncmlkLWF1dG8tcm93czogbWlubWF4KGF1dG8sIDIwMHB4KTsqL1xufVxuXG4jbWFpbi1ib3ggaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICNtYWluLWJveCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgLypncmlkLWF1dG8tcm93czogbWlubWF4KGF1dG8sIDIwMHB4KTsqL1xuXG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNtYWluLWJveCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIC8qZ3JpZC1hdXRvLXJvd3M6IG1pbm1heChhdXRvLCAxNTBweCk7Ki9cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIC8qbWFyZ2luLXRvcDogNTBweDsqL1xuICB9XG59XG5cbiNtb3JlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4jbWFpbi12aWRlbyB7XG4gIHotaW5kZXg6IC05OTk5O1xuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbiN0ZXh0LWZyb20tdmlkZW8ge1xuICB6LWluZGV4OiAtOTk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogNzAlO1xuICBtYXgtaGVpZ2h0OiA3NjBweDtcbiAgcGFkZGluZzogMTAwcHggMTAlIDEwMHB4IDEwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIHZpZGVvIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjbWFpbi12aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICB2aWRlbyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4jbWFpbi1zaG9wIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjbWFpbi1zaG9wIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNtYWluLXNob3Age1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICB9XG5cbiAgLmVtYWlsLWlucHV0e1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4jYmxvY2tzIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNTBweDtcblxufVxuXG4jYm94LWluZm9ybSB7XG4gIHBhZGRpbmc6IDE4MHB4IDAgNzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxMGM5YzM7XG59XG5cbiNib3gtaW5mb3JtIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2Rpdi1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuI2Rpdi1ibG9jayBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNkaXY6aG92ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2JveC1pbmZvcm0ge1xuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XG4gIH1cblxuICAjYm94LWluZm9ybS10ZXh0IGRpdiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAjZGl2LWJsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuXG4jZGl2LWltZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDcwcHggMTAlIDcwcHggMTAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cblxuI3JlZ2lzdHItYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIC8qcGFkZGluZzogMTAwcHggMzAlIDEwMHB4IDMwJTsqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3JlZ2lzdHItYm94LXRleHQgZGl2IGgxIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbn1cblxuI3JlZ2lzdHItYm94LXRleHQgZGl2IHAge1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xufVxuXG4jaW5wMS0yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2lucDEtMiBpbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDM0MHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuI2lucDMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jaW5wMyBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbiNpbnA0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI2lucDQgaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB3aWR0aDogOTYlO1xuICBwYWRkaW5nOiAxMHB4IDAgMTQwcHggMTBweDtcbn1cblxuI2J1dHRvbi1tZXNzYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTBjOWMzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgI3JlZ2lzdHItYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNyZWdpc3RyLWJveCBpbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gICNpbnAxLTIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbmZvb3RlciB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XG59XG5cbmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1lc3NhZ2UtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNkaXYtZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyIDFmciAxZnIgMWZyO1xufVxuXG4jZGl2LWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwMHB4IDEwJSAxMDBweCAxMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAjZGl2LWZvb3RlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBcdDNmciAyZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gIH1cblxuICAjZGl2LWltZyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2Rpdi1mb290ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgI2Rpdi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjAlIDIwcHggMjAlO1xuICB9XG5cbiAgI2Zvb3Rlci10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjZGl2LWltZyB7XG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7Ki9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyptYXJnaW4tbGVmdDogMjMlOyovXG4gICAgLypwYWRkaW5nOiAzMCU7Ki9cbiAgfVxufVxuXG4udmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjcmVnaXN0ci1ib3gtdGV4dCBkaXYgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4IDIwcHggNDBweDtcbiAgfVxuXG4gICN0ZXh0LWZyb20tdmlkZW8gcCB7XG4gICAgcGFkZGluZzogMCA1MHB4IDAgNTBweDtcbiAgfVxuXG4gICNib3gtaW5mb3JtLXRleHQgZGl2IHAge1xuICAgIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgI2NvbnRlbnQtcHJvY2VzcyB7XG4gICAgcGFkZGluZzogMjBweCA0MHB4IDMwcHggNDBweDtcbiAgfVxuXG4gICNtYWluLXRleHQgZGl2IHAge1xuICAgIHBhZGRpbmc6IDAgNDBweCAwIDQwcHg7XG4gIH1cbn1cblxuI2J1dHRvbi1tZXNzYWdlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogLjVzO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMxMGM5YzM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAjY29udGVudC1wcm9jZXNzIGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgI2hlYWRlci1ib3gge1xuICAgIC8qbWFyZ2luLXRvcDogMzVweDsqL1xuICB9XG5cbiAgI3NlY3Rpb24tdGV4dCBkaXYgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgI2J1dHRvbi1tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG52aWRlbyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2Rpdi1jb250ZW50LWltZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxNzBweCAxJSAxMCUgMjAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuXG4gICNkaXYtY29udGVudC1pbWcgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICNjb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICAjZGl2LWNvbnRlbnQtaW1nIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xuICAjY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAjZGl2LWNvbnRlbnQtaW1nIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Layout1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout1',
                templateUrl: './layout1.component.html',
                styleUrls: ['./layout1.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "7zwq":
/*!*************************************************************!*\
  !*** ./src/app/components/directive/directive.directive.ts ***!
  \*************************************************************/
/*! exports provided: DirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveDirective", function() { return DirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DirectiveDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.min = 0;
    }
}
DirectiveDirective.ɵfac = function DirectiveDirective_Factory(t) { return new (t || DirectiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DirectiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DirectiveDirective, selectors: [["", "appDirective", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectiveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDirective]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AywQ":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-header/menu-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuHeaderComponent", function() { return MenuHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/new-service.service */ "y9dV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time/time.component */ "OwjR");






function MenuHeaderComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_11_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LAYOUT1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_11_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LAYOUT2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Created by potrace 1.15, written by Peter Selinger 2001-2017 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-time", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuHeaderComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.router.navigate(["/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuHeaderComponent {
    constructor(router, svc, element) {
        this.router = router;
        this.svc = svc;
        this.element = element;
        this.showUl = true;
    }
    ngOnInit() {
        this.svc.getData().subscribe((res) => {
            console.log(res.name);
        });
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.currentUserMenu = user;
            this.status = this.currentUserMenu.name;
        }
    }
    ngDoCheck() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUserMenu = user;
            this.status = 'true';
        }
        if (!user) {
            this.currentUserMenu = false;
            this.status = 'false';
        }
    }
    user() {
        // const user = localStorage.getItem('currentUser');
        // if (!user) {
        //   this.router.navigate(['/login']);
        //   console.error('Error,ви повинні увійти');
        //   return;
        // }
    }
    profile() {
        this.router.navigate(['/profiele']);
    }
    showMenu() {
        this.showUl = !this.showUl;
    }
}
MenuHeaderComponent.ɵfac = function MenuHeaderComponent_Factory(t) { return new (t || MenuHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MenuHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuHeaderComponent, selectors: [["app-menu-header"]], decls: 23, vars: 7, consts: [[1, "pos-f-t"], ["id", "navbarToggleExternalContent", 1, "collapse"], [1, "bg-dark", "p-4"], [1, "text-white"], [1, "text-muted"], [1, "navbar", "navbar-dark", "bg-dark"], ["aria-controls", "navbarToggleExternalContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarToggleExternalContent", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "layout", 4, "ngIf"], ["routerLink", "/cars", "routerLinkActive", "active", "title", "\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u043C\u0430\u0448\u0438\u043D", 3, "click", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active", "title", "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456", 3, "click", 4, "ngIf"], ["routerLink", "/request", "routerLinkActive", "active", "title", "\u0417\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 \u0431\u0435\u043A\u0435\u043D\u0434", 3, "click", 4, "ngIf"], ["routerLink", "/shop", "routerLinkActive", "active", "title", "\u041C\u0430\u0433\u0430\u0437\u0438\u043D", 3, "click", 4, "ngIf"], ["class", "profile-nav-block", 4, "ngIf"], ["title", "\u041F\u0440\u043E\u0444\u0456\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430", 1, "resume-button", 3, "click"], ["fill", "currentColor", "height", "25", "viewBox", "0 0 16 16", "width", "25", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-person-circle"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z", "fill-rule", "evenodd"], [3, "click", 4, "ngIf"], ["id", "layout"], ["fill", "currentColor", "height", "50", "viewBox", "0 0 16 16", "width", "100", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-display", 2, "color", "black"], ["d", "M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"], ["id", "submenu"], ["id", "sub", "routerLink", "/layout1", "routerLinkActive", "active", "title", "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 1", 3, "click"], ["id", "sub", "routerLink", "/layout2", "routerLinkActive", "active", "title", "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 2", 3, "click"], ["routerLink", "/cars", "routerLinkActive", "active", "title", "\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u043C\u0430\u0448\u0438\u043D", 3, "click"], ["height", "50px", "preserveAspectRatio", "xMidYMid meet", "version", "1.0", "viewBox", "0 0 1280.000000 640.000000", "width", "100px", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#000000", "stroke", "none", "transform", "translate(0.000000,640.000000) scale(0.100000,-0.100000)"], ["d", "M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3 -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64 -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302 140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22 259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1 -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50 680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332 -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66 -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36 -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83 54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134 274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"], ["d", "M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262 -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493 -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23 86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50 -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220 1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360 0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"], ["d", "M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120 -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"], ["d", "M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28 22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"], ["d", "M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0 165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"], ["d", "M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0 165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"], ["d", "M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58 -13 0 -29 -8 -34 -18z"], ["d", "M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9 153 -71 153 -27 0 -44 -8 -66 -29z"], ["d", "M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z"], ["d", "M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z"], ["d", "M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"], ["d", "M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"], ["d", "M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z"], ["d", "M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7 0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"], ["d", "M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232 -230 231 -3 0 -11 -3 -17 -6z"], ["d", "M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z"], ["d", "M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80 119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"], ["d", "M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163 84 -207 91 l-43 7 0 -162z"], ["d", "M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"], ["d", "M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88 241 -108 241 -4 0 -57 -51 -119 -112z"], ["d", "M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10 68 -14 2 -31 -3 -38 -10z"], ["d", "M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44 -6 -64 -31z"], ["d", "M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"], ["d", "M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24 13 -3 0 -14 -6 -24 -13z"], ["d", "M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"], ["d", "M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"], ["d", "M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z"], ["d", "M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"], ["d", "M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239 98 16 10 -216 242 -234 235z"], ["routerLink", "/login", "routerLinkActive", "active", "title", "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456", 3, "click"], ["fill", "currentColor", "height", "50", "viewBox", "0 0 16 16", "width", "100", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-people-fill", 2, "color", "black"], ["d", "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], ["d", "M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z", "fill-rule", "evenodd"], ["d", "M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"], ["routerLink", "/request", "routerLinkActive", "active", "title", "\u0417\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 \u0431\u0435\u043A\u0435\u043D\u0434", 3, "click"], ["fill", "currentColor", "height", "50", "viewBox", "0 0 16 16", "width", "100", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrow-down-up", 2, "color", "black"], ["d", "M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z", "fill-rule", "evenodd"], ["routerLink", "/shop", "routerLinkActive", "active", "title", "\u041C\u0430\u0433\u0430\u0437\u0438\u043D", 3, "click"], ["fill", "currentColor", "height", "50", "viewBox", "0 0 16 16", "width", "100", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-cart-check-fill", 2, "color", "black"], ["d", "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"], [1, "profile-nav-block"], [1, "conteiner"], [1, "time-component-style"], [3, "click"], ["title", "\u0423\u0432\u0456\u0439\u0442\u0438", 1, "resume-button"], ["fill", "currentColor", "height", "35", "viewBox", "0 0 16 16", "width", "35", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-box-arrow-in-right"], ["d", "M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z", "fill-rule", "evenodd"], ["d", "M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z", "fill-rule", "evenodd"]], template: function MenuHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Collapsed content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toggleable via the navbar brand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_button_click_9_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuHeaderComponent_a_11_Template, 14, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuHeaderComponent_a_12_Template, 34, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuHeaderComponent_a_13_Template, 5, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenuHeaderComponent_a_14_Template, 3, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MenuHeaderComponent_a_15_Template, 3, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuHeaderComponent_div_16_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_button_click_18_listener() { return ctx.profile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MenuHeaderComponent_div_22_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUserMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _time_time_component__WEBPACK_IMPORTED_MODULE_4__["TimeComponent"]], styles: [".header-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  padding: 10px 20% 0 20%;\r\n  background: grey;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  transition: .5s;\r\n  box-shadow: 1px 0 20px #343a40;\r\n  background: #343a40;\r\n  padding: 0 10px 0 10px;\r\n  border-radius: 10px;\r\n  border-right: 5px solid black;\r\n  border-bottom: 5px solid black;\r\n  list-style: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  border-right: 5px solid #343a40;\r\n  border-bottom: 5px solid #343a40;\r\n  background: grey;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: grey;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  letter-spacing: 5px;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n  }\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  transition: .5s;\r\n  color: white;\r\n  \r\n  background: white;\r\n  border-radius: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  font-size: 50px;\r\n  color: black;\r\n  border-bottom: 5px solid white;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  letter-spacing: 2px;\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#user[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  padding: 20px 0 0 10px;\r\n}\r\n\r\n#name[_ngcontent-%COMP%] {\r\n  \r\n  text-transform: uppercase;\r\n  font-weight: bolder;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#user[_ngcontent-%COMP%]:hover   #name[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n\r\n#button-div[_ngcontent-%COMP%] {\r\n  padding: 20px 15px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: grey;\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n\r\n#text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  letter-spacing: 3px;\r\n  font-weight: bold;\r\n}\r\n\r\n#button-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 10px 10px 10px 10px;\r\n  background: #343a40;\r\n  color: grey;\r\n  font-weight: bold;\r\n}\r\n\r\n#button-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transition: .5s;\r\n  background: #6c757d;\r\n  color: #343a40;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #text[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n  }\r\n\r\n  #text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%] {\r\n    padding: 20px 20px 20px 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  ul[_ngcontent-%COMP%] {\r\n    padding: 20px 20px 20px 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\n#layout[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n#submenu[_ngcontent-%COMP%] {\r\n  top: -100000px;\r\n  position: absolute\r\n}\r\n\r\n#sub[_ngcontent-%COMP%]:hover {\r\n  background: none;\r\n}\r\n\r\n#submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  background: none;\r\n  display: grid;\r\n}\r\n\r\n#layout[_ngcontent-%COMP%]:hover   #submenu[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n}\r\n\r\n#layout[_ngcontent-%COMP%]:hover   b[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n#menu-li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr;\r\n  grid-gap: 30px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    text-align: center;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: 60px;\r\n  }\r\n}\r\n\r\n.resume-button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 2%;\r\n  z-index: 1;\r\n  margin-top: 10px;\r\n  padding: 3px 5px;\r\n  background: #212529;\r\n  border-radius: 10px;\r\n  margin-left: 10px;\r\n  animation-name: colors;\r\n  animation-delay: .5s;\r\n  animation-iteration-count: infinite;\r\n  animation-duration: 3s;\r\n  animation-direction: alternate-reverse;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.time-component-style[_ngcontent-%COMP%] {\r\n  animation-name: time-colors;\r\n  animation-delay: .5s;\r\n  animation-iteration-count: infinite;\r\n  animation-duration: 3s;\r\n  animation-direction: alternate-reverse;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n@keyframes colors {\r\n  0% {\r\n    background: white;\r\n    color: black;\r\n  }\r\n  50% {\r\n    background: grey;\r\n    color: black;\r\n  }\r\n  100% {\r\n    background: black;\r\n    color: white;\r\n  }\r\n}\r\n\r\n@keyframes time-colors {\r\n  0% {\r\n    color: grey;\r\n  }\r\n  100% {\r\n    color: white;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWhlYWRlci9tZW51LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtaGVhZGVyL21lbnUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwJSAwIDIwJTtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5iIHtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxubGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgYm94LXNoYWRvdzogMXB4IDAgMjBweCAjMzQzYTQwO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzM0M2E0MDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzM0M2E0MDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG5saTpob3ZlciBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGEgc3Zne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyovXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuYTphY3RpdmUge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5pIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI3VzZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMTBweDtcclxufVxyXG5cclxuI25hbWUge1xyXG4gIC8qZGlzcGxheTogbm9uZTsqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4jdXNlcjpob3ZlciAjbmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4jYnV0dG9uLWRpdiB7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4IDAgMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4jdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4jdGV4dCBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNidXR0b24tZGl2IGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNidXR0b24tZGl2IGJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICN0ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAjdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2xheW91dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jc3VibWVudSB7XHJcbiAgdG9wOiAtMTAwMDAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlXHJcbn1cclxuXHJcbiNzdWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbiNzdWJtZW51IHVsIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbiNsYXlvdXQ6aG92ZXIgI3N1Ym1lbnUge1xyXG4gIHRvcDogMzBweDtcclxufVxyXG5cclxuI2xheW91dDpob3ZlciBiIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtZW51LWxpIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VtZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMiU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBjb2xvcnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbn1cclxuXHJcbi50aW1lLWNvbXBvbmVudC1zdHlsZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHRpbWUtY29sb3JzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbG9ycyB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aW1lLWNvbG9ycyB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-header',
                templateUrl: './menu-header.component.html',
                styleUrls: ['./menu-header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "GK38":
/*!***********************************************************!*\
  !*** ./src/app/components/profiele/profiele.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfieleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfieleComponent", function() { return ProfieleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ProfieleComponent {
    constructor(routerNav, http) {
        this.routerNav = routerNav;
        this.http = http;
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.user = user;
            // this.name = user.name;
            // this.surname = user.surname;
            // this.email = user.email;
            // this.passw1 = user.passw1;
        }
    }
    navEdit() {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.routerNav.navigate(['/forms']);
    }
}
ProfieleComponent.ɵfac = function ProfieleComponent_Factory(t) { return new (t || ProfieleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfieleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfieleComponent, selectors: [["app-profiele"]], decls: 33, vars: 8, consts: [[1, "content-profiele"], [1, "data-div"], [1, "data"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "button-div"], [3, "click"]], template: function ProfieleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "your profiele");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfieleComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NAME: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfieleComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SURNAME: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfieleComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "EMAIL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfieleComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.passw1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PASSWORD: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfieleComponent_Template_button_click_31_listener() { return ctx.navEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.passw1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.passw1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  color: black;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  letter-spacing: 1px;\r\n  color: #6c757d;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background: #343a40;\r\n  color: #6c757d;\r\n  font-weight: bolder;\r\n  border: none;\r\n  padding: 0 10px;\r\n  letter-spacing: 1px;\r\n  transition: .5s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n}\r\n\r\n.button-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.data-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.data[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  padding: 20px 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWVsZS9wcm9maWVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWVsZS9wcm9maWVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0YSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbn1cclxuIl19 */", ".content-profiele[_ngcontent-%COMP%] {\n  background: linear-gradient(#212529, grey, #eee, #eee, grey, #212529);\n  padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWVsZS9EOi9wcm9qZWN0MS9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmllbGUvc3R5bGUubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWVsZS9zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpZWxlL3N0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wcm9maWVsZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjEyNTI5LCBncmV5LCAjZWVlLCAjZWVlLCBncmV5LCAjMjEyNTI5KTtcbiAgcGFkZGluZzogMTAlO1xufVxuIiwiLmNvbnRlbnQtcHJvZmllbGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIxMjUyOSwgZ3JleSwgI2VlZSwgI2VlZSwgZ3JleSwgIzIxMjUyOSk7XG4gIHBhZGRpbmc6IDEwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfieleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profiele',
                templateUrl: './profiele.component.html',
                styleUrls: ['./profiele.component.css', './style.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/forms']);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 12, vars: 0, consts: [[1, "content", 2, "text-align", "center"], [1, "back", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404 not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " sorry , page not found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_div_click_10_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  margin-top: calc(50vh - 150px);\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n  color: lightblue;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]:before {\r\n  content: '< ';\r\n}\r\n\r\n.back[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMTUwcHgpO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrOmJlZm9yZSB7XHJcbiAgY29udGVudDogJzwgJztcclxufVxyXG5cclxuLmJhY2s6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "LZdC":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/guard/auth.guard */ "rCeP");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_layout_layout1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout1.component */ "602H");
/* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cars/cars.component */ "muDB");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms/forms.component */ "xX1k");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/request/request.component */ "theA");
/* harmony import */ var _components_file_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/file/file.component */ "pPjW");
/* harmony import */ var _components_layout2_layout2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout2/layout2.component */ "vCby");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_profiele_profiele_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profiele/profiele.component */ "GK38");
/* harmony import */ var _components_car_information_car_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/car-information/car-information.component */ "5fLt");

















const appRoutes = [
    { path: 'information/:foundCar', component: _components_car_information_car_information_component__WEBPACK_IMPORTED_MODULE_14__["CarInformationComponent"] },
    { path: 'profiele', component: _components_profiele_profiele_component__WEBPACK_IMPORTED_MODULE_13__["ProfieleComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'free', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'layout1', component: _components_layout_layout1_component__WEBPACK_IMPORTED_MODULE_5__["Layout1Component"] },
    { path: 'cars', component: _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_6__["CarsComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'forms/:inputValuelog/:inputValuepas', component: _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"] },
    { path: 'forms', component: _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"] },
    { path: 'request', component: _components_request_request_component__WEBPACK_IMPORTED_MODULE_8__["RequestComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'file', component: _components_file_file_component__WEBPACK_IMPORTED_MODULE_9__["FileComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', redirectTo: '/layout1', pathMatch: 'full' },
    // {path: '', component: AppComponent, canActivate: [AuthGuard]},
    { path: 'layout2', component: _components_layout2_layout2_component__WEBPACK_IMPORTED_MODULE_10__["Layout2Component"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'shop', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"], canActivate: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
class Router {
}
Router.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Router });
Router.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Router_Factory(t) { return new (t || Router)(); }, providers: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Router, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Router, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                providers: [_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OwjR":
/*!***************************************************!*\
  !*** ./src/app/components/time/time.component.ts ***!
  \***************************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimeComponent {
    constructor() {
    }
    ngOnInit() {
        this.time();
    }
    time() {
        let date = new Date();
        let Year = date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        this.minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let miliseconds = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds();
        let time = day + '-' + month + '-' + Year + '  ' + this.hours + ':' + this.minutes + ':' + this.seconds + '  ' + miliseconds;
        console.log(this.hours, this.minutes, this.seconds);
    }
}
TimeComponent.ɵfac = function TimeComponent_Factory(t) { return new (t || TimeComponent)(); };
TimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeComponent, selectors: [["app-time"]], decls: 5, vars: 2, template: function TimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hours, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.minutes, " ");
    } }, styles: [".time-component-style[_nghost-%COMP%] {\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 120px;\r\n  z-index: 1;\r\n}\r\n\r\n.conteiner[_nghost-%COMP%], .conteiner   [_nghost-%COMP%] {\r\n  border-radius: 0 0 10px 0;\r\n  width: 100px;\r\n  float: left;\r\n  color: grey;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lL3RpbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZS90aW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCgudGltZS1jb21wb25lbnQtc3R5bGUpIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMTIwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguY29udGVpbmVyKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-time',
                templateUrl: './time.component.html',
                styleUrls: ['./time.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_service_new_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/service/new-service.service */ "y9dV");
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-header/menu-header.component */ "AywQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(newSvc) {
        this.newSvc = newSvc;
        window.addEventListener('beforeunload', (event) => {
            event.returnValue = `You have unsaved changes, leave anyway?`;
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_service_new_service_service__WEBPACK_IMPORTED_MODULE_1__["NewServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_2__["MenuHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _components_service_new_service_service__WEBPACK_IMPORTED_MODULE_1__["NewServiceService"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginComponent_section_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "incorrect input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { display: a0 }; };
function LoginComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0425\u0406\u0414");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Number/Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.inputValuelog = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.inputValuepas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_section_0_div_16_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return _r2.type = "text"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (o) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return _r2.type = "password"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " (o) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_0_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.navigateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.nav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.inputValuelog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.inputValuepas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _r2.type == "password" ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _r2.type == "text" ? "block" : "none"));
} }
class LoginComponent {
    constructor(router) {
        this.router = router;
        this.invalid = false;
    }
    ngOnInit() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        let users = JSON.parse(localStorage.getItem('person'));
        if (user) {
            this.router.navigate(['forms/:user/:true']);
        }
        if (users) {
            this.allUsers = users;
        }
    }
    nav() {
        this.router.navigate(['/forms']);
    }
    navigateStatus() {
        this.allUsers.forEach((users) => {
            if (users.passw1 !== this.inputValuepas || users.email !== this.inputValuelog) {
                this.invalid = true;
                return;
            }
            else {
                this.router.navigate(['/forms', this.inputValuelog, this.inputValuepas]);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["id", "section-log", 4, "ngIf"], ["id", "section-log"], ["action", "#"], ["for", "inpLog"], ["id", "inpLog", "name", "login", "type", "text", 3, "ngModel", "ngModelChange"], ["inpLog", ""], ["for", "inpPas", 2, "display", "flex", "justify-content", "space-between", "padding", "20px 0 20px 0"], ["id", "inpPas", "name", "password", "type", "password", 3, "ngModel", "ngModelChange"], ["inpPas", ""], ["style", "text-transform: uppercase; color: red;text-align: center;font-weight: bold;padding: 0 0 10px 0", 4, "ngIf"], ["id", "log-button", 3, "ngStyle", "click"], [3, "ngStyle", "click"], ["id", "log-button"], [2, "text-decoration", "none", 3, "click"], ["id", "log-button", 3, "click"], [2, "text-transform", "uppercase", "color", "red", "text-align", "center", "font-weight", "bold", "padding", "0 0 10px 0"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_section_0_Template, 28, 9, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  padding: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 20px 0 20px 0;\r\n  background: #eee;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 10px #eee;\r\n  background: #eee;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n#log-button[_ngcontent-%COMP%] {\r\n  background: #212529;\r\n  font-weight: bolder;\r\n  color: grey;\r\n}\r\n\r\n#log-button[_ngcontent-%COMP%]:hover {\r\n  transition: .5s;\r\n  background: black;\r\n  color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n#section-log[_ngcontent-%COMP%] {\r\n  background: #212529;\r\n  margin-top: calc(40vh - 300px);\r\n  padding: 100px 0 100px 0;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%] {\r\n  padding: 20px 0 35px 0;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: none;\r\n\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  section[_ngcontent-%COMP%] {\r\n    padding: 0 10px 0 10px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    display: block;\r\n    width: auto;\r\n  }\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  font-size: 14px;\r\n  border: 1px solid grey;\r\n  padding: 0 0 3px 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.noneBlock[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.none[_ngcontent-%COMP%] {\r\n  border: 1px solid grey;\r\n}\r\n\r\n.null[_ngcontent-%COMP%] {\r\n  border: 1px solid grey;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n  border: 5px solid red;\r\n}\r\n\r\n.big[_ngcontent-%COMP%] {\r\n  border: 5px solid green;\r\n}\r\n\r\n#passwordiv[_ngcontent-%COMP%] {\r\n  width: 185px;\r\n  height: 7px;\r\n  background: grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n#passwinsidediv[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 7px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n  padding: 3px 7px 3px 7px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  background: grey;\r\n  color: #eee;\r\n  float: right;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: #eee;\r\n  color: grey;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover   b[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  color: blue;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\n.user-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.user-table[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.edit-user-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.edit-user-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 130px;\r\n}\r\n\r\n#td-button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-bottom: 1px solid grey;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-bottom: 12.5px;\r\n  width: 100px;\r\n  font-size: 18px;\r\n}\r\n\r\n#td-text[_ngcontent-%COMP%]:first-letter {\r\n  font-size: 150%;\r\n  font-family: Dialog;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  table[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  table[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 30px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    font-size: 8px;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%] {\r\n    display: grid;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    width: 100%;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHBhZGRpbmc6IDAgMCAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlZWU7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2xvZy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuI2xvZy1idXR0b246aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNzZWN0aW9uLWxvZyB7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKDQwdmggLSAzMDBweCk7XHJcbiAgcGFkZGluZzogMTAwcHggMCAxMDBweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMjBweCAwIDM1cHggMDtcclxufVxyXG5cclxuLmhlYWRlci1idXR0b24gYnV0dG9uIHtcclxuICBmbG9hdDogbm9uZTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDAgMCAzcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub25lQmxvY2sge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4ubnVsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5iaWcge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4jcGFzc3dvcmRpdiB7XHJcbiAgd2lkdGg6IDE4NXB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3Bhc3N3aW5zaWRlZGl2IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIHBhZGRpbmc6IDNweCA3cHggM3B4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgY29sb3I6IGdyZXk7XHJcblxyXG59XHJcblxyXG5idXR0b246aG92ZXIgYiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5iIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXItdGFibGUgdGgsIC51c2VyLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZWRpdC11c2VyLWNvbnRhaW5lciB1bCBsaSBkaXYgaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZWRpdC11c2VyLWNvbnRhaW5lciB1bCBsaSBkaXYgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMzBweDtcclxufVxyXG5cclxuI3RkLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiN0ZC1idXR0b24gYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMi41cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI3RkLXRleHQ6Zmlyc3QtbGV0dGVyIHtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbiAgZm9udC1mYW1pbHk6IERpYWxvZztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRkIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG5cclxuICAjdGQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAjdGQtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI3RkLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI3RkLWJ1dHRvbiBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "WSbs":
/*!***********************************************************!*\
  !*** ./src/app/components/request/interseptor.service.ts ***!
  \***********************************************************/
/*! exports provided: Interseptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interseptor", function() { return Interseptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Interseptor {
    intercept(req, next) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.user = user;
            this.name = JSON.stringify(this.user.name);
        }
        // {params: req.params.set('request', `Currentuser - ${this.name}`)}
        const request = req.clone();
        return next.handle(request);
    }
}
Interseptor.ɵfac = function Interseptor_Factory(t) { return new (t || Interseptor)(); };
Interseptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Interseptor, factory: Interseptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Interseptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/guard/auth.guard */ "rCeP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "LZdC");
/* harmony import */ var _components_directive_directive_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/directive/directive.directive */ "7zwq");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_layout_layout1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/layout1.component */ "602H");
/* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cars/cars.component */ "muDB");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/forms/forms.component */ "xX1k");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/request/request.component */ "theA");
/* harmony import */ var _components_layout2_layout2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout2/layout2.component */ "vCby");
/* harmony import */ var _components_file_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/file/file.component */ "pPjW");
/* harmony import */ var _components_service_new_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/service/new-service.service */ "y9dV");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_resume_daughter_daughter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/resume/daughter/daughter.component */ "0d4N");
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/menu-header/menu-header.component */ "AywQ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_request_interseptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/request/interseptor.service */ "WSbs");
/* harmony import */ var _components_profiele_profiele_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/profiele/profiele.component */ "GK38");
/* harmony import */ var _components_time_time_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/time/time.component */ "OwjR");
/* harmony import */ var _components_car_information_car_information_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/car-information/car-information.component */ "5fLt");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _components_service_new_service_service__WEBPACK_IMPORTED_MODULE_16__["NewServiceService"],
        _components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _components_request_interseptor_service__WEBPACK_IMPORTED_MODULE_22__["Interseptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_layout_layout1_component__WEBPACK_IMPORTED_MODULE_10__["Layout1Component"],
        _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_11__["CarsComponent"],
        _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_12__["FormsComponent"],
        _components_request_request_component__WEBPACK_IMPORTED_MODULE_13__["RequestComponent"],
        _components_layout2_layout2_component__WEBPACK_IMPORTED_MODULE_14__["Layout2Component"],
        _components_file_file_component__WEBPACK_IMPORTED_MODULE_15__["FileComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_17__["ResumeComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
        _components_resume_daughter_daughter_component__WEBPACK_IMPORTED_MODULE_19__["DaughterComponent"],
        _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_20__["MenuHeaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _components_directive_directive_directive__WEBPACK_IMPORTED_MODULE_8__["DirectiveDirective"],
        _components_profiele_profiele_component__WEBPACK_IMPORTED_MODULE_23__["ProfieleComponent"],
        _components_time_time_component__WEBPACK_IMPORTED_MODULE_24__["TimeComponent"],
        _components_car_information_car_information_component__WEBPACK_IMPORTED_MODULE_25__["CarInformationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _components_layout_layout1_component__WEBPACK_IMPORTED_MODULE_10__["Layout1Component"],
                    _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_11__["CarsComponent"],
                    _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_12__["FormsComponent"],
                    _components_request_request_component__WEBPACK_IMPORTED_MODULE_13__["RequestComponent"],
                    _components_layout2_layout2_component__WEBPACK_IMPORTED_MODULE_14__["Layout2Component"],
                    _components_file_file_component__WEBPACK_IMPORTED_MODULE_15__["FileComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_17__["ResumeComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
                    _components_resume_daughter_daughter_component__WEBPACK_IMPORTED_MODULE_19__["DaughterComponent"],
                    _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_20__["MenuHeaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _components_directive_directive_directive__WEBPACK_IMPORTED_MODULE_8__["DirectiveDirective"],
                    _components_profiele_profiele_component__WEBPACK_IMPORTED_MODULE_23__["ProfieleComponent"],
                    _components_time_time_component__WEBPACK_IMPORTED_MODULE_24__["TimeComponent"],
                    _components_car_information_car_information_component__WEBPACK_IMPORTED_MODULE_25__["CarInformationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _router__WEBPACK_IMPORTED_MODULE_7__["Router"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__["Ng2GoogleChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
                ],
                providers: [
                    _components_service_new_service_service__WEBPACK_IMPORTED_MODULE_16__["NewServiceService"],
                    _components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _components_request_interseptor_service__WEBPACK_IMPORTED_MODULE_22__["Interseptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h+Is":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ResumeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_div_21_Template_b_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const obj_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.funDelete(obj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u0440\u043E\u0434\u0443\u043A\u0442: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u041E\u041F\u0418C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u041A\u0406\u041B\u042C\u041A\u0406\u0421\u0422\u042C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_div_21_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const obj_r2 = ctx.$implicit; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fun1(_r3, obj_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u041A\u0423\u041F\u0418\u0422\u0418 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r2.length);
} }
function ResumeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041F\u0440\u043E\u0434\u0443\u043A\u0442: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041E\u041F\u0418C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u041A\u0406\u041B\u042C\u041A\u0406\u0421\u0422\u042C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const byProd_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](byProd_r7.byName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](byProd_r7.byDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](byProd_r7.byLength);
} }
class ResumeComponent {
    constructor() {
        this.shop = false;
        //
        this.byProduct = [];
    }
    ngOnInit() {
        const person = JSON.parse(localStorage.getItem('persons'));
        if (person) {
            this.array = person;
        }
        const byProd = JSON.parse(localStorage.getItem('by'));
        if (byProd) {
            this.byProduct = byProd;
        }
    }
    addPerson() {
        let person = JSON.parse(localStorage.getItem('persons'));
        if (!person) {
            person = [];
        }
        if (this.nameEnter == null) {
            return;
        }
        else {
            const newPerson = {
                name: this.nameEnter,
                description: this.descriptionEnter,
                length: this.lengthEnter
            };
            person.unshift(newPerson);
            localStorage.setItem('persons', JSON.stringify(person));
            this.array = person;
        }
    }
    //
    fun1(block, obj) {
        block.style.background = 'black';
        block.style.color = 'green';
        block.style.borderRadius = '20px';
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === obj) {
                this.curShop = obj;
                this.array.splice(i, 1);
                localStorage.setItem('persons', JSON.stringify(this.array));
                let by = JSON.parse(localStorage.getItem('by'));
                if (!by) {
                    by = [];
                }
                const byObj = {
                    byName: obj.name,
                    byDescription: obj.description,
                    byLength: obj.length
                };
                this.byProduct = by;
                this.byProduct.unshift(byObj);
                localStorage.setItem('by', JSON.stringify(by));
            }
        }
    }
    //
    funDelete(obj) {
        for (let del = 0; del < this.array.length; del++) {
            if (this.array[del] === obj) {
                this.array.splice(del, 1);
                localStorage.setItem('persons', JSON.stringify(this.array));
            }
        }
    }
    clear() {
        localStorage.removeItem('by');
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 35, vars: 5, consts: [["id", "body"], ["id", "menu"], ["id", "menu-div"], ["type", "text", 3, "ngModel", "ngModelChange"], [2, "padding", "15px 0 0 0", 3, "click"], ["id", "content"], ["id", "home"], ["id", "blocks", 4, "ngFor", "ngForOf"], ["id", "header-div", 2, "text-align", "center", "color", "white"], [2, "background", "black", "border-radius", "10px", "padding", "5px 10px 5px 10px"], [2, "text-align", "center"], [2, "background", "black", "color", "white", "padding", "5px 10px 5px 10px", "border-radius", "10px"], [2, "border-radius", "5px", 3, "click"], ["id", "blocks"], ["block", ""], [2, "float", "right", "color", "red", "cursor", "pointer"], [3, "click"], ["id", "button-shop", 3, "click"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResumeComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nameEnter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u041F\u0418C: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResumeComponent_Template_input_ngModelChange_10_listener($event) { return ctx.descriptionEnter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u0406\u041B\u042C\u041A\u0406\u0421\u0422\u042C: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResumeComponent_Template_input_ngModelChange_14_listener($event) { return ctx.lengthEnter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_div_click_15_listener() { return ctx.addPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResumeComponent_div_21_Template, 27, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418 \u0412 \u041D\u0410\u042F\u0412\u041D\u041E\u0421\u0422\u0406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041F\u0420\u041E\u0414\u0410\u041D\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ResumeComponent_div_31_Template, 19, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_button_click_33_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " CLEAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nameEnter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descriptionEnter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lengthEnter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.byProduct);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#body[_ngcontent-%COMP%] {\r\n  background-image: url('\u043E\u0432\u043E\u0447\u04564.jpg');\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n  background-position-y: -900px;\r\n  background-attachment: fixed;\r\n  height: 80vh;\r\n  \r\n}\r\n\r\n@media (min-width: 2300px) {\r\n  #body[_ngcontent-%COMP%] {\r\n    background-attachment: inherit;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #body[_ngcontent-%COMP%]{\r\n    height: 40vh;\r\n    padding-bottom: -500px;\r\n  }\r\n}\r\n\r\n#home[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n#header-div[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: black;\r\n  float: left;\r\n  padding: 0 20px 0 20px;\r\n  border-radius: 10px;\r\n  margin: 70px 20% 0 25%;\r\n  opacity: 0.8;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  #menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    font-size: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  #header-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], b[_ngcontent-%COMP%]{\r\n    font-size: calc(14px + (100 - 14) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  padding: 20px 0 20px 0;\r\n}\r\n\r\n#menu-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  #home[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  #menu[_ngcontent-%COMP%] {\r\n    margin-left: 1%;\r\n  }\r\n\r\n  #home[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  #body[_ngcontent-%COMP%] {\r\n    background-position-y: -100px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #menu[_ngcontent-%COMP%] {\r\n    margin: 10px 10% 10px 10%;\r\n  }\r\n\r\n  #menu-div[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding-bottom: 15px;\r\n  }\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  width: 100px;\r\n  margin: 0 0 0 10px;\r\n  \r\n  float: right;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  width: 100px;\r\n  \r\n  \r\n  float: right;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  margin: 5px 10px 10px 10px;\r\n  padding: 10px 0 10px 0;\r\n  float: right;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 130px;\r\n  padding: 0 5% 0 5%;\r\n  width: 100%;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n#blocks[_ngcontent-%COMP%] {\r\n  color: white;\r\n  opacity: 0.8;\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  background: black;\r\n  text-transform: uppercase;\r\n  width: auto;\r\n  min-width: 150px;\r\n  \r\n  border-radius: 10px;\r\n  border: 2px solid black;\r\n  display: inline-block;\r\n  margin: 2%;\r\n  padding: 20px 1% 20px 1%;\r\n}\r\n\r\n#button-shop[_ngcontent-%COMP%] {\r\n  float: right;\r\n  border-radius: 5px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#div[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  background: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBcUQ7RUFDckQscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0UsbUVBQW1FO0VBQ3JFO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMv0L7QstC+0YfRljQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTkwMHB4O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIC8qcGFkZGluZy1ib3R0b206IDQwMHB4OyovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyMzAwcHgpIHtcclxuICAjYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAjYm9keXtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAtNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4jaGVhZGVyLWRpdiB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbiNtZW51IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNzBweCAyMCUgMCAyNSU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAjbWVudSBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgKDIwIC0gMTApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcblxyXG4gICNoZWFkZXItZGl2IGgxICwgYntcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgKDEwMCAtIDE0KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxufVxyXG5cclxuI21lbnUtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgI2hvbWUge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICNtZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB9XHJcblxyXG4gICNob21lIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB9XHJcblxyXG4gICNib2R5IHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgI21lbnUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwJSAxMHB4IDEwJTtcclxuICB9XHJcblxyXG4gICNtZW51LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4jbWVudSBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgLypwYWRkaW5nOiAxMHB4IDAgMTBweCAwOyovXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jbWVudSBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLyptYXJnaW46IDVweCAxMHB4IDEwcHggMTBweDsqL1xyXG4gIC8qcGFkZGluZzogMTBweCAwIDEwcHggMDsqL1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI21lbnUgYiB7XHJcbiAgbWFyZ2luOiA1cHggMTBweCAxMHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMzBweDtcclxuICBwYWRkaW5nOiAwIDUlIDAgNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjb250ZW50IGlucHV0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNibG9ja3Mge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIC8qd2lkdGg6IDE1MHB4OyovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBwYWRkaW5nOiAyMHB4IDElIDIwcHggMSU7XHJcbn1cclxuXHJcbiNidXR0b24tc2hvcCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jZGl2IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "muDB":
/*!***************************************************!*\
  !*** ./src/app/components/cars/cars.component.ts ***!
  \***************************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_new_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/new-service.service */ "y9dV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directive_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directive/directive.directive */ "7zwq");








function CarsComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.enterCars1 = !ctx_r27.enterCars1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.enterCars1 = !ctx_r29.enterCars1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ENTER CAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_ul_20_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_ul_20_li_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const arr_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.carEnter(arr_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_ul_20_li_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const arr_r32 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx_r35.delCar(arr_r32, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arr_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", arr_r32.firstcarName, " ");
} }
function CarsComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarsComponent_ul_20_li_1_Template, 5, 1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.allCars);
} }
function CarsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_button_77_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_button_77_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.enterCars2 = !ctx_r36.enterCars2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_button_78_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_button_78_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.enterCars2 = !ctx_r38.enterCars2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ENTER CAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_ul_79_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_ul_79_li_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const arr_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.carEnter2(arr_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arr_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", arr_r41.firstcarName, " ");
} }
function CarsComponent_ul_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarsComponent_ul_79_li_1_Template, 3, 1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.allCars);
} }
function CarsComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_span_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_span_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_div_159_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NAME: ", com_r45.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r45.comment);
} }
function CarsComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarsComponent_div_159_ul_1_Template, 7, 2, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.comments);
} }
function CarsComponent_button_163_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_button_163_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.allCarOptions = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LOOK ALL CARS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_table_165_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_table_165_td_14_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.allCarOptions = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_table_165_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_table_165_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const optCars_r52 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.transfer(optCars_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "hp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_table_165_tr_15_Template_td_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const optCars_r52 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.carDel(optCars_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optCars_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optCars_r52.firstcarName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optCars_r52.carModel1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", optCars_r52.maxSpeed1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", optCars_r52.timeHundred1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", optCars_r52.horsePower, " ");
} }
function CarsComponent_table_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CAR NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MAX SPEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ACCELERATION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " TO ONE HUNDRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HORSE POWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CarsComponent_table_165_td_14_Template, 3, 0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarsComponent_table_165_tr_15_Template, 19, 5, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.allCarOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.allCars);
} }
class CarsComponent {
    // public image: any;
    // public file: any;
    // public reader: any;
    constructor(router, http, svc) {
        this.router = router;
        this.http = http;
        this.svc = svc;
        this.allCarOptions = false;
        this.bestPower = false;
        this.bestPower2 = false;
        this.bestSpeed1 = false;
        this.bestSpeed2 = false;
        this.bestHundred1 = false;
        this.bestHundred2 = false;
        this.enterCars1 = false;
        this.enterCars2 = false;
        this.rating1 = null;
        this.rating2 = null;
        this.comments = [];
        this.inputComments = false;
        this.avtorisation = false;
        this.registr = true;
    }
    ngOnInit() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.currentUser = currentUser;
        }
        const userName = JSON.parse(localStorage.getItem('carCurrentUser'));
        if (userName) {
            this.cars = true;
            this.currentUserCar = userName;
            this.avtorisation = false;
            this.registr = false;
        }
        const cars = JSON.parse(localStorage.getItem('car'));
        if (cars) {
            this.allCars = cars;
        }
        let comms = JSON.parse(localStorage.getItem('comment'));
        if (comms) {
            this.comments = comms;
        }
        this.usersBox = JSON.parse(localStorage.getItem('userCars'));
    }
    // search(allCarsSearch): void {
    //   const newArr = this.allCars.filter((item) => {
    //     return item.firstcarName === allCarsSearch;
    //   });
    //   const car = JSON.stringify(newArr);
    //   console.log(JSON.parse(car));
    // }
    showEdit1() {
        this.avtorisation = false;
        this.registr = true;
    }
    showEdit2() {
        this.avtorisation = true;
        this.registr = false;
    }
    // CARS
    addCom(carName1, inpComment) {
        if (this.commentClear == null) {
            return;
        }
        const newComments = {
            // userName: this.currentUserCar.name,
            userName: this.currentUser.name,
            comment: inpComment
        };
        this.comments.push(newComments);
        localStorage.setItem('comment', JSON.stringify(this.comments));
    }
    reset() {
        this.enterCars1 = false;
        this.enterCars2 = false;
        this.firstcarName = null;
        this.secondcarName = null;
        this.carModel1 = null;
        this.carModel2 = null;
        this.maxSpeed1 = null;
        this.maxSpeed2 = null;
        this.timeHundred1 = null;
        this.timeHundred2 = null;
        this.horsePower = null;
        this.horsePower2 = null;
        this.bestSpeed1 = false;
        this.bestSpeed2 = false;
        this.bestHundred1 = false;
        this.bestHundred2 = false;
        this.bestPower = false;
        this.bestPower2 = false;
        this.rating1 = null;
        this.rating2 = null;
        this.commentClear = null;
    }
    saveCar(arr, carName1, carName2, carModels1, carModels2, speed1, hundred1, horsepower, horsepower2) {
        let cars = JSON.parse(localStorage.getItem('car'));
        if (!cars) {
            cars = [];
        }
        const newCars = {
            firstcarName: carName1,
            carModel1: carModels1,
            maxSpeed1: speed1,
            timeHundred1: hundred1,
            horsePower: horsepower
        };
        if (this.firstcarName == null) {
            return;
        }
        else {
            cars.push(newCars);
            localStorage.setItem('car', JSON.stringify(cars));
            this.allCars = cars;
        }
    }
    carEnter(arr) {
        for (let car = 0; car < this.allCars.length; car++) {
            if (this.allCars[car] === arr) {
                this.currentCar = arr;
                this.firstcarName = this.currentCar.firstcarName;
                this.carModel1 = this.currentCar.carModel1;
                this.maxSpeed1 = this.currentCar.maxSpeed1;
                this.timeHundred1 = this.currentCar.timeHundred1;
                this.horsePower = this.currentCar.horsePower;
            }
        }
        console.log(this.currentCar.firstcarName);
        console.log('VS');
        this.enterCars1 = false;
    }
    carEnter2(arr) {
        for (let car = 0; car < this.allCars.length; car++) {
            if (this.allCars[car] === arr) {
                this.currentCar = arr;
                this.secondcarName = this.currentCar.firstcarName;
                this.carModel2 = this.currentCar.carModel1;
                this.maxSpeed2 = this.currentCar.maxSpeed1;
                this.timeHundred2 = this.currentCar.timeHundred1;
                this.horsePower2 = this.currentCar.horsePower;
            }
        }
        console.log(this.currentCar.firstcarName);
        this.enterCars2 = false;
    }
    compareCars(carName1, carName2, speed1, speed2, hundred1, hundred2, horsepower, horsepower2) {
        if (speed1 > speed2) {
            this.rating1++;
            this.bestSpeed1 = true;
            this.bestSpeed2 = false;
        }
        else if (speed1 < speed2) {
            this.rating2++;
            this.bestSpeed2 = true;
            this.bestSpeed1 = false;
        }
        else {
            this.bestSpeed2 = false;
            this.bestSpeed1 = false;
        }
        if (hundred1 > hundred2) {
            this.rating2++;
            this.bestHundred1 = false;
            this.bestHundred2 = true;
        }
        else if (hundred1 < hundred2) {
            this.rating1++;
            this.bestHundred2 = false;
            this.bestHundred1 = true;
        }
        else {
            this.bestHundred2 = false;
            this.bestHundred1 = false;
        }
        if (horsepower > horsepower2) {
            this.rating1++;
            this.bestPower = true;
            this.bestPower2 = false;
        }
        else if (horsepower < horsepower2) {
            this.rating2++;
            this.bestPower2 = true;
            this.bestPower = false;
        }
        else {
            this.bestPower2 = false;
            this.bestPower = false;
        }
        if (this.rating1 > this.rating2) {
            console.log('WIСTORY', this.firstcarName);
        }
        else if (this.rating1 < this.rating2) {
            console.log('WIСTORY', this.secondcarName);
        }
    }
    delCar(arr, modal) {
        modal.style.display = 'block';
        this.arr = arr;
        // for (let del = 0; del < this.allCars.length; del++) {
        //   if (this.allCars[del] === arr) {
        //     this.allCars.splice(del, 1);
        //     localStorage.setItem('car', JSON.stringify(this.allCars));
        //   }
        // }
    }
    yes(modal) {
        for (let del = 0; del < this.allCars.length; del++) {
            if (this.allCars[del] === this.arr) {
                this.allCars.splice(del, 1);
                localStorage.setItem('car', JSON.stringify(this.allCars));
                modal.style.display = 'none';
            }
        }
    }
    no(modal) {
        modal.style.display = 'none';
    }
    carDel(optCars) {
        this.foundCar = JSON.stringify(optCars);
        this.router.navigate(['/information', `${this.foundCar}`]);
    }
}
CarsComponent.ɵfac = function CarsComponent_Factory(t) { return new (t || CarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_new_service_service__WEBPACK_IMPORTED_MODULE_3__["NewServiceService"])); };
CarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarsComponent, selectors: [["app-cars"]], decls: 171, vars: 40, consts: [["id", "modalWindow"], ["modal", ""], ["id", "content-modal"], ["id", "modalContent"], [2, "text-transform", "uppercase", "color", "blue"], ["id", "btn"], [3, "click"], ["id", "cars"], ["id", "section"], [1, "left-box"], ["style", "margin-left: 112px", 3, "click", 4, "ngIf"], ["style", "margin: 0 auto;", 3, "click", 4, "ngIf"], ["id", "ul", "style", "position: absolute", 4, "ngIf"], [2, "font-size", "28px"], ["id", "span"], ["for", "inpcarName1"], ["id", "inpcarName1", "type", "text", 3, "ngModel", "ngModelChange"], ["carName1", ""], ["for", "carModel1"], ["id", "carModel1", "type", "text", 3, "ngModel", "ngModelChange"], ["carModels1", ""], ["for", "maxSpeed1"], ["appDirective", "", "id", "maxSpeed1", "type", "number", 3, "ngModel", "ngModelChange"], ["speed1", ""], [4, "ngIf"], ["for", "timeHundred2"], ["appDirective", "", "id", "timeHundred1", "type", "number", 3, "ngModel", "ngModelChange"], ["hundred1", ""], ["for", "horsepower1"], ["appDirective", "", "id", "horsepower1", "type", "number", 3, "ngModel", "ngModelChange"], ["horsepower", ""], [2, "float", "left"], [2, "color", "green", "border-bottom", "none", "font-size", "22px"], [1, "right-box"], ["for", "inpcarName2"], ["id", "inpcarName2", "type", "text", 3, "ngModel", "ngModelChange"], ["carName2", ""], ["for", "carModel2"], ["id", "carModel2", "type", "text", 3, "ngModel", "ngModelChange"], ["carModels2", ""], ["for", "maxSpeed2"], ["appDirective", "", "id", "maxSpeed2", "type", "number", 3, "ngModel", "ngModelChange"], ["speed2", ""], ["appDirective", "", "id", "timeHundred2", "type", "number", 3, "ngModel", "ngModelChange"], ["hundred2", ""], ["for", "horsepower"], ["appDirective", "", "id", "horsepower", "type", "number", 3, "ngModel", "ngModelChange"], ["horsepower2", ""], ["id", "section2"], ["id", "section3"], ["id", "inpComment", "type", "text", 2, "height", "50px", "border-radius", "5px", 3, "ngModel", "ngModelChange"], ["inpComment", ""], [2, "width", "100px", "margin", "0 auto", 3, "click"], ["id", "bCom", 2, "border-bottom", "none", "cursor", "pointer", 3, "click"], ["id", "block-comments", 4, "ngIf"], [1, "footer"], ["id", "options"], [3, "click", 4, "ngIf"], ["id", "table-options", 4, "ngIf"], ["fill", "currentColor", "height", "20", "viewBox", "0 0 16 16", "width", "20", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-instagram"], ["d", "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"], ["href", "https://www.instagram.com", "target", "_blank", 2, "color", "white", "font-weight", "bold"], [2, "margin-left", "112px", 3, "click"], [2, "margin", "0 auto", 3, "click"], ["id", "ul", 2, "position", "absolute"], [4, "ngFor", "ngForOf"], [2, "float", "right", "color", "red", "font-weight", "bold", "padding-right", "5px", 3, "click"], ["id", "block-comments"], [2, "text-transform", "uppercase", "background", "#343a40", "color", "#6c757d", "padding", "0 5px 0 5px", "border-radius", "5px"], [2, "border", "1px solid black", "padding", "0 10px 0 10px", "border-radius", "5px"], ["id", "table-options"], [3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], ["id", "td-del-opt", 3, "click"]], template: function CarsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.yes(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.no(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CANSEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CarsComponent_button_18_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarsComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CarsComponent_ul_20_Template, 2, 1, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CAR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CAR MODEL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "MAX SPEED: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "0 - 100km/hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "HORSE POWER: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_49_listener($event) { return ctx.firstcarName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " MODEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_53_listener($event) { return ctx.carModel1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " SPEED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_57_listener($event) { return ctx.maxSpeed1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CarsComponent_span_59_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 0 - 100km");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_62_listener($event) { return ctx.timeHundred1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CarsComponent_span_64_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " HP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_67_listener($event) { return ctx.horsePower = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CarsComponent_span_69_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " RATING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CarsComponent_button_77_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CarsComponent_button_78_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CarsComponent_ul_79_Template, 2, 1, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "CAR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "CAR MODEL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "MAX SPEED: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "0 - 100km/hour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "HORSE POWER: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_108_listener($event) { return ctx.secondcarName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " MODEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_112_listener($event) { return ctx.carModel2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " SPEED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_116_listener($event) { return ctx.maxSpeed2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, CarsComponent_span_118_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " 0 - 100km ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_121_listener($event) { return ctx.timeHundred2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, CarsComponent_span_123_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " HP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_126_listener($event) { return ctx.horsePower2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, CarsComponent_span_128_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " RATING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](113); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127); return ctx.saveCar(ctx.arr, _r4.value, _r15.value, _r5.value, _r16.value, _r6.value, _r8.value, _r10.value, _r21.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " SAVE CAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_137_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " RESET ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](122); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127); return ctx.compareCars(_r4, _r15, _r6.value, _r17.value, _r8.value, _r19.value, _r10.value, _r21.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " COMPARE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_input_ngModelChange_146_listener($event) { return ctx.commentClear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_button_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147); return ctx.addCom(_r4.value, _r23.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "COMMENTS ABOUT CARS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "b", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsComponent_Template_b_click_157_listener() { return ctx.inputComments = !ctx.inputComments; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ">>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, CarsComponent_div_159_Template, 2, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, CarsComponent_button_163_Template, 2, 0, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, CarsComponent_table_165_Template, 16, 2, "table", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "svg", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " @p.r.o.s.t.o.y.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enterCars1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enterCars1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enterCars1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carModel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.maxSpeed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeHundred1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.horsePower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carModel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxSpeed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestSpeed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeHundred1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestHundred1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horsePower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestPower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rating1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enterCars2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enterCars2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enterCars2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carModel2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.maxSpeed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeHundred2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.horsePower2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondcarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carModel2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxSpeed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestSpeed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeHundred2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestHundred2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horsePower2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestPower2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rating2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentClear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("COMMENTS LENGTH: ", ctx.comments.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputComments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allCarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allCarOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _directive_directive_directive__WEBPACK_IMPORTED_MODULE_6__["DirectiveDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#section-header[_ngcontent-%COMP%] {\r\n  padding: 115px 0 20px 0;\r\n  display: flex;\r\n  background: grey;\r\n}\r\n\r\n#section-user[_ngcontent-%COMP%] {\r\n  padding-bottom: 100px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n#user[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n  background: black;\r\n  color: grey;\r\n}\r\n\r\n#cars[_ngcontent-%COMP%] {\r\n  background: black;\r\n  width: 100%;\r\n  opacity: .9;\r\n  background-image: url('renaultblack2.jpg');\r\n  background-repeat: no-repeat;\r\n  background-attachment: inherit;\r\n  background-position: center;\r\n  background-position-y: -30px;\r\n  background-size: 30%;\r\n  margin-top: 0;\r\n}\r\n\r\n@media (min-width: 1300px) {\r\n  #cars[_ngcontent-%COMP%] {\r\n    background-size: 30%;\r\n    background-attachment: inherit;\r\n  }\r\n}\r\n\r\n@media (max-width: 1500px) {\r\n  #cars[_ngcontent-%COMP%] {\r\n    background-position-y: calc(50vh - 200px);\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #cars[_ngcontent-%COMP%] {\r\n    background-position-y: calc(50vh - 150px);\r\n    background-size: 60%;\r\n  }\r\n}\r\n\r\n#section[_ngcontent-%COMP%] {\r\n  padding: 10px 100px 10px 100px;\r\n  position: relative;\r\n}\r\n\r\n#section3[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-top: 400px;\r\n  padding: 0 10px 30px 20px;\r\n  display: grid;\r\n  text-align: center;\r\n}\r\n\r\n#span[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: slategrey;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  padding: 3px 0 3px 0;\r\n  background: #343a40;\r\n  color: #6c757d;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  display: block;\r\n  justify-content: space-around;\r\n  width: 140px;\r\n  border-radius: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n  color: slategrey;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n  background: black;\r\n  color: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n#bCom[_ngcontent-%COMP%] {\r\n  background: #343a40;\r\n  color: #6c757d;\r\n  border-radius: 5px;\r\n  padding: 0 3px 5px 3px;\r\n}\r\n\r\n#bCom[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n  color: #343a40;\r\n}\r\n\r\n#section2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#section3[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  background: black;\r\n  opacity: .9;\r\n}\r\n\r\n#ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-left: 80px;\r\n  display: block;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  padding-top: 10px;\r\n  display: block;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-left: 5px;\r\n  border-radius: 5px;\r\n  height: 25px;\r\n}\r\n\r\n.left-box[_ngcontent-%COMP%] {\r\n  letter-spacing: 2px;\r\n  color: white;\r\n  border-radius: 5px;\r\n  padding: 10px 10px 0 10px;\r\n  float: left;\r\n  margin-left: 5%;\r\n}\r\n\r\n@media(max-width: 500px) {\r\n  .left-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .left-box[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{\r\n    font-size: calc(12px + (20 - 12) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .left-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: calc(18px + (20 - 18) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .left-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: calc(50px + (100 - 50) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n}\r\n\r\n.right-box[_ngcontent-%COMP%] {\r\n  letter-spacing: 2px;\r\n  color: white;\r\n  border-radius: 5px;\r\n  padding: 10px 10px 0 10px;\r\n  float: right;\r\n  margin-right: 5%;\r\n}\r\n\r\n@media(max-width: 500px) {\r\n  .right-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .right-box[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{\r\n    font-size: calc(12px + (20 - 12) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .right-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: calc(18px + (20 - 18) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n\r\n  .right-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: calc(50px + (100 - 50) * (100vw - 320px) / (1200 - 320));\r\n  }\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  display: inline-grid;\r\n  list-style: none;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  #section3[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    display: grid;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 5% 0 5%;\r\n  }\r\n\r\n  .left-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px black;\r\n    border-radius: 10px 0 0 10px;\r\n    border: 2px solid black;\r\n  }\r\n\r\n  .right-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px black;\r\n    border-radius: 0 10px 10px 0;\r\n    border: 2px solid black;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #logOut[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  #section-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  #inpComment[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n  }\r\n\r\n  #span[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: auto 0;\r\n    padding: 0;\r\n  }\r\n\r\n  #section[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n  }\r\n\r\n  .left-box[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n\r\n  .right-box[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    float: none;\r\n    width: 80px;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n\r\n  b[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n\r\n  #cars[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n  }\r\n}\r\n\r\n#user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  float: none;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n#table-options[_ngcontent-%COMP%] {\r\n  opacity: .8;\r\n  background: grey;\r\n  font-weight: 500;\r\n}\r\n\r\n#table-options[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 5px 10px 5px 10px;\r\n  text-transform: uppercase;\r\n  border: 1px solid black;\r\n}\r\n\r\n#td-del-opt[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#td-del-opt[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  background: white;\r\n  font-size: 20px;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  #table-options[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  background: #212529;\r\n  padding: 0 0 20px 0;\r\n  text-align: center;\r\n}\r\n\r\n#modalWindow[_ngcontent-%COMP%] {\r\n  display: none;\r\n  z-index: 1;\r\n  position: fixed;\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: black;\r\n  opacity: .9;\r\n  color: white;\r\n}\r\n\r\n#content-modal[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: 2px solid white;\r\n  background: black;\r\n  width: 300px;\r\n  margin: 15% auto;\r\n}\r\n\r\n#btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background: black;\r\n}\r\n\r\n#section-image[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#section-image[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 40px;\r\n}\r\n\r\n#section-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  padding: 70px;\r\n  height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJzL2NhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLDBDQUE0RDtFQUM1RCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSx5Q0FBeUM7SUFDekMsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlDQUF5QztJQUN6QyxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0UsK0RBQStEO0VBQ2pFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0Usa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0UsK0RBQStEO0VBQ2pFO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fycy9jYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbi1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDExNXB4IDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI3NlY3Rpb24tdXNlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiN1c2VyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHRkIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuI2NhcnMge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IC45O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3JlbmF1bHRibGFjazIuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0zMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAjY2FycyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAjY2FycyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoNTB2aCAtIDIwMHB4KTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAjY2FycyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoNTB2aCAtIDE1MHB4KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xyXG4gIH1cclxufVxyXG5cclxuI3NlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTAwcHggMTBweCAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNzZWN0aW9uMyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAzMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzcGFuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHNsYXRlZ3JleTtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogM3B4IDAgM3B4IDA7XHJcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHNsYXRlZ3JleTtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNiQ29tIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwIDNweCA1cHggM3B4O1xyXG59XHJcblxyXG5cclxuI2JDb206aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4jc2VjdGlvbjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWN0aW9uMyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogLjk7XHJcbn1cclxuXHJcbiN1bCBsaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubGFiZWwgaW5wdXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWJveCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5sZWZ0LWJveCBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgKDIwIC0gMTApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcblxyXG4gIC5sZWZ0LWJveCBie1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjAgLSAxMikgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtYm94IHNwYW57XHJcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArICgyMCAtIDE4KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG5cclxuICAubGVmdC1ib3ggaW5wdXR7XHJcbiAgICB3aWR0aDogY2FsYyg1MHB4ICsgKDEwMCAtIDUwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtYm94IHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAucmlnaHQtYm94IGxhYmVse1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMjAgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWJveCBie1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjAgLSAxMikgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWJveCBzcGFue1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDE4cHggKyAoMjAgLSAxOCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWJveCBpbnB1dHtcclxuICAgIHdpZHRoOiBjYWxjKDUwcHggKyAoMTAwIC0gNTApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI3NlY3Rpb24zIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDUlIDAgNSU7XHJcbiAgfVxyXG5cclxuICAubGVmdC1ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtYm94IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNsb2dPdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gICNzZWN0aW9uLWhlYWRlciBidXR0b24ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjaW5wQ29tbWVudCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAjc3BhbiB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAjc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICB9XHJcblxyXG4gIC5sZWZ0LWJveHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5yaWdodC1ib3h7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAjY2FycyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI3VzZXIgaW5wdXQge1xyXG4gIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4jb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jdGFibGUtb3B0aW9ucyB7XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jdGFibGUtb3B0aW9ucyB0ciB0ZCB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3RkLWRlbC1vcHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiN0ZC1kZWwtb3B0OmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAjdGFibGUtb3B0aW9ucyB0ciB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI21vZGFsV2luZG93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogLjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY29udGVudC1tb2RhbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMTUlIGF1dG87XHJcbn1cclxuXHJcbiNidG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4jc2VjdGlvbi1pbWFnZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI3NlY3Rpb24taW1hZ2UgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbiNzZWN0aW9uLWltYWdlIGltZyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogNzBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cars',
                templateUrl: './cars.component.html',
                styleUrls: ['./cars.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _service_new_service_service__WEBPACK_IMPORTED_MODULE_3__["NewServiceService"] }]; }, null); })();


/***/ }),

/***/ "pPjW":
/*!***************************************************!*\
  !*** ./src/app/components/file/file.component.ts ***!
  \***************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");



class FileComponent {
    constructor() {
        this.work = 1;
        this.eat = 1;
        this.study = 1;
        this.tv = 1;
        this.sleep = 1;
        this.pieChart = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Робота', this.work],
                ['Їда', this.eat],
                ['Вивчення програмування', this.study],
                ['Телевізор', this.tv],
                ['Сон', this.sleep]
            ],
            options: { title: 'Мій робочий день' },
        };
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    setTime() {
        setInterval(() => {
            this.seconds++;
            if (this.seconds > 59) {
                this.minutes++;
                this.seconds = 0;
            }
            else if (this.minutes > 59) {
                this.seconds = 0;
                this.minutes = 0;
                this.hours++;
            }
            else if (this.hours > 23) {
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
                alert('00;00;00');
            }
        }, 1000);
        console.log(this.seconds + ' ' + this.minutes + ' ' + this.hours);
    }
    ngOnInit() {
        this.setTime();
    }
}
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(); };
FileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileComponent, selectors: [["app-file"]], decls: 9, vars: 4, consts: [[3, "data"], ["id", "time"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SECONDS ", ctx.seconds, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MINUTES ", ctx.minutes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HOURS ", ctx.hours, " ");
    } }, directives: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: ["#time[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGltZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file',
                templateUrl: './file.component.html',
                styleUrls: ['./file.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rCeP":
/*!************************************************!*\
  !*** ./src/app/components/guard/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const user = localStorage.getItem('currentUser');
        if (!user) {
            this.router.navigate(['/login']);
            console.error('Error,ви повинні увійти');
            return false;
        }
        console.log(route, state);
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "theA":
/*!*********************************************************!*\
  !*** ./src/app/components/request/request.component.ts ***!
  \*********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/new-service.service */ "y9dV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RequestComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " loading...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " UserId: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Body: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.body);
} }
function RequestComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestComponent_div_1_div_2_Template, 17, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.usersAll);
} }
class RequestComponent {
    constructor(http, svc) {
        this.http = http;
        this.svc = svc;
        this.showUl = true;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        svc.consoleText('HELLO VLAD');
        console.log(svc.name);
        this.nameUser = svc.name;
    }
    search() {
        this.http.get('https://api.github.com/users/' + this.userName)
            .subscribe((response) => {
            this.response = response;
            console.log(this.response);
        });
    }
    ngOnInit() {
        this.svc.getRandomApiValue().subscribe((data) => {
            let wea = JSON.stringify(data);
            this.weather = JSON.parse(wea);
            console.log(data);
        });
        this.svc.getCurrency().subscribe((currency) => {
            let cur = JSON.stringify(currency);
            this.currency = JSON.parse(cur);
            console.log(currency);
        });
        this.postAll();
        this.svc.getAll()
            .subscribe((posts) => {
            this.usersAll = posts;
            this.usersAll.unshift(posts);
            console.log(this.usersAll);
        });
        if (!this.usersAll) {
            console.log('LOADING...');
        }
        if (this.usersAll) {
            console.log(this.usersAll);
        }
    }
    showMenu() {
        this.showUl = !this.showUl;
    }
    postAll() {
        this.http.post(this.url, this.bodyValue = { userId: this.userId, id: this.id, title: this.title, body: this.body })
            .subscribe((posts) => {
            this.usersAll.unshift(this.bodyValue);
            console.log(posts);
        });
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"])); };
RequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], decls: 3, vars: 2, consts: [["id", "load", 4, "ngIf"], ["id", "content", 4, "ngIf"], ["id", "load"], ["id", "content"], [2, "padding", "0 20px 0 20px", "color", "white"], ["style", "border: 1px solid black;padding: 20px", 4, "ngFor", "ngForOf"], [2, "border", "1px solid black", "padding", "20px"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.usersAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersAll);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#content[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n#load[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  margin-top: calc(50vh - 100px);\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  padding: 20px 20% 20px 20%;\r\n  \r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#push[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 200px;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n}\r\n\r\n#push[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  margin: 10px auto;\r\n  width: 100px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\n#button-div[_ngcontent-%COMP%] {\r\n  padding: 20px 15px 0 0;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background: grey;\r\n}\r\n\r\n#button-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 10px 10px 10px 10px;\r\n  background: #343a40;\r\n  color: grey;\r\n  font-weight: bold;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  ul[_ngcontent-%COMP%] {\r\n    padding: 20px 20px 20px 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  ul[_ngcontent-%COMP%] {\r\n    padding: 20px 20px 20px 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9hZCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMTAwcHgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgcGFkZGluZzogMjBweCAyMCUgMjBweCAyMCU7XHJcbiAgLypiYWNrZ3JvdW5kOiBncmV5OyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNwdXNoIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNwdXNoIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI2J1dHRvbi1kaXYge1xyXG4gIHBhZGRpbmc6IDIwcHggMTVweCAwIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbiNidXR0b24tZGl2IGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmIge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request',
                templateUrl: './request.component.html',
                styleUrls: ['./request.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"] }]; }, null); })();


/***/ }),

/***/ "vCby":
/*!*********************************************************!*\
  !*** ./src/app/components/layout2/layout2.component.ts ***!
  \*********************************************************/
/*! exports provided: Layout2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout2Component", function() { return Layout2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function Layout2Component_nav_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How it works");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Layout2Component {
    constructor() {
        this.showMenu = true;
    }
    ngOnInit() {
    }
}
Layout2Component.ɵfac = function Layout2Component_Factory(t) { return new (t || Layout2Component)(); };
Layout2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Layout2Component, selectors: [["app-layout2"]], decls: 248, vars: 1, consts: [[1, "header-block"], [1, "logo"], ["src", "./assets/logo.jpg", "alt", ""], ["id", "nav", 4, "ngIf"], [1, "burger-menu"], ["id", "burgerMenu", "xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list", 3, "click"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], ["id", "content", 1, "content"], [1, "section-one"], [1, "section-one-content"], [1, "section-one-header"], [1, "section-one-text"], [1, "section-one-buttons"], ["type", "text", "id", "nameValue", "placeholder", "Submit your name"], ["id", "getName"], ["id", "section-two", 1, "section-two"], [1, "section-two-content"], [1, "section-two-header"], [1, "section-two-switch"], [1, "section-two-switch-main-block"], [1, "section-two-switch-block"], [1, "container"], [1, "row"], [1, "col"], [1, "block-img"], ["src", "./assets/section-two-logo/logo1.jpg", "alt", ""], ["src", "./assets/section-two-logo/logo2.jpg", "alt", ""], ["src", "./assets/section-two-logo/logo3.jpg", "alt", ""], ["id", "section-three", 1, "section-three"], [1, "section-three-content"], [1, "section-three-header"], [1, "section-three-header-text"], [1, "section-three-video"], ["src", "", "controls", ""], [1, "section-four"], [1, "section-four-content"], [1, "containers"], [1, "rows"], [1, "cols"], [1, "section-five"], [1, "section-five-content"], [1, "section-five-header"], [1, "block-email"], [1, "buttons"], ["type", "text", "placeholder", "Enter your email adress"], ["id", "section-six", 1, "section-six"], [1, "section-six-content"], ["type", "text", "placeholder", "Submit your house details", 1, "section-six-content-input"], ["type", "text", "placeholder", "Your name"], ["type", "text", "placeholder", "Your email adress"], ["type", "text", "placeholder", "Your phone number"], ["type", "text", "placeholder", "Subject"], ["type", "text", "placeholder", "Leave a message"], [1, "footer"], ["id", "footer-block"], ["id", "user", 2, "color", "red"], ["id", "nav"], ["href", "#content"], ["href", "#section-two"], ["href", "#section-three"], ["href", "#section-six"]], template: function Layout2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Layout2Component_nav_5_Template, 9, 0, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Layout2Component_Template__svg_svg_click_7_listener() { return ctx.showMenu = !ctx.showMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sell Your House Instantly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Simply tell us about your house and get a quaranteed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cash offer within 24 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get your offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Key Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Dicta sapiente, sequi amet saepe harum,temporibus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "exercitationem aperiam maxime nobis pariatur,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "velit, dignissimos quo magnam quod blanditiis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "laudantium nesciunt assumenda esse!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Dicta sapiente, sequi amet saepe harum,temporibus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "exercitationem aperiam maxime nobis pariatur,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "velit, dignissimos quo magnam quod blanditiis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "laudantium nesciunt assumenda esse!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Dicta sapiente, sequi amet saepe harum,temporibus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "exercitationem aperiam maxime nobis pariatur,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "velit, dignissimos quo magnam quod blanditiis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "laudantium nesciunt assumenda esse!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sell in 3 Easy Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Submit your house details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lorem ipsum dolor sit amet consectetur adipisicing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Get all Cash offer within 24 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae numquam fugit dignissimos ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Receive your money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, exercitationem, amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "video", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "How many days will take to sell?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Do I have to open house for public inspection?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Do I have to repair house before selling?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Do i have to pay selling commission?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Can I stay till my other house is ready?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Housecart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Receive an all cash offer in 24 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "No showing or public inspections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "No repairs or dress for sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "thousands of dollars in savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Stay till you move to your new house");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Traditionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "House on market for over 3 month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Spend Thousands of dollars in repair to make it ready for sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Pay thousands of dollars in agent fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Pay thousands of dollars in agent fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Move immediately once sold, may need to double mortgage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Sign up for real estate news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Sell your House Instantly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Simply tell us about your house and get a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " quaranteed cash offer within 24 hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Get your offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Submit now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Copyright C 2017 Real Estate Company Template - All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n}\n\n@media (max-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: calc(12px + (36 - 12) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  color: #ff6515;\n}\n\n@media (max-width: 1200px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: calc(12px + (24 - 12) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\n@media (max-width: 1200px) {\n  p[_ngcontent-%COMP%] {\n    font-size: calc(10px + (16 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  border-bottom: 2px solid #fff;\n}\n\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.burger-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 15px;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n\n@media (max-width: 610px) {\n  .burger-menu[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 1920px;\n  margin: 0 auto;\n  padding: 0;\n  padding-bottom: 50px;\n}\n\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: calc(20px + (50 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.col[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nheader[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 100%;\n  max-width: 1920px;\n  display: flex;\n  padding: 20px;\n  justify-content: space-around;\n  background: #fff;\n}\n\n@media (max-width: 1200px) {\n  header[_ngcontent-%COMP%] {\n    padding: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n  }\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 115px;\n}\n\n@media (max-width: 1200px) {\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: calc(100px + (350 - 100) * (100vw - 320px) / (1200 - 320));\n    height: calc(50px + (115 - 50) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n@media (max-width: 1200px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    padding: calc(20px + (35 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-left: 25px;\n  color: black;\n  font-size: 20px;\n}\n\n@media (max-width: 1200px) {\n  header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: calc(5px + (25 - 5) * (100vw - 320px) / (1200 - 320));\n    font-size: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 0.3s;\n  color: #ff6515;\n}\n\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  transition: 0.3s;\n  font-size: 22px;\n}\n\n.header-block[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.section-one[_ngcontent-%COMP%] {\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  background: url(\"/assets/sec1.jpg\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  padding: 260px 0;\n}\n\n@media (min-width: 1600px) {\n  .section-one[_ngcontent-%COMP%] {\n    background-position: center;\n  }\n}\n\n@media (max-width: 1600px) {\n  .section-one[_ngcontent-%COMP%] {\n    background-position: center;\n    padding: calc(5px + (130 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.section-one[_ngcontent-%COMP%]   .section-one-content[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%] {\n  background: #78340f;\n  display: flex;\n  min-width: 100px;\n  padding: 20px;\n  margin-top: 50px;\n}\n\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%] {\n    padding: calc(3px + (20 - 3) * (100vw - 320px) / (1200 - 320));\n    margin-top: calc(15px + (30 - 15) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 400px) {\n  .section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 25px 335px 25px 20px;\n  font-size: 14px;\n}\n\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: calc(8px + (14 - 8) * (100vw - 320px) / (1200 - 320));\n    padding-top: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n    padding-bottom: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n    padding-right: calc(30px + (335 - 30) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 600px) {\n  .section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-right: calc(100px + (150 - 100) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  padding: 25px;\n  font-size: 16px;\n  font-weight: 600;\n  background: #ff6515;\n  color: #fff;\n}\n\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding-left: 3px;\n    padding-right: 3px;\n    font-size: calc(10px + (16 - 10) * (100vw - 320px) / (1200 - 320));\n    padding-top: calc(4px + (10 - 4) * (100vw - 320px) / (1200 - 320));\n    padding-bottom: calc(6px + (10 - 6) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-one[_ngcontent-%COMP%]   .section-one-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.7s;\n  background: #fff;\n  color: #ff6515;\n}\n\n.section-two[_ngcontent-%COMP%] {\n  background: white;\n  padding: 90px;\n}\n\n@media (max-width: 1200px) {\n  .section-two[_ngcontent-%COMP%] {\n    padding: calc(10px + (90 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-two-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n\n@media (max-width: 1200px) {\n  .section-two-content[_ngcontent-%COMP%] {\n    padding-bottom: calc(10px + (50 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-two-switch-main-block[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 3px;\n  background: grey;\n  position: relative;\n}\n\n.section-two-switch-block[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 7px;\n  position: absolute;\n  top: -2px;\n  left: calc(50% - 50px);\n  background: #ff6515;\n}\n\n.col[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  padding: 20px 0;\n  text-align: center;\n  box-shadow: 0px 0px 5px 5px #ecf9ff;\n}\n\n@media (max-width: 1200px) {\n  .col[_ngcontent-%COMP%] {\n    margin: calc(5px + (20 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 800px) {\n  .col[_ngcontent-%COMP%] {\n    opacity: 0.8;\n  }\n}\n\n.col[_ngcontent-%COMP%]   .block-img[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: inline-block;\n  box-shadow: 0px 0px 5px 5px #ecf9ff;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.section-three[_ngcontent-%COMP%] {\n  background-image: url(/assets/sec3.jpg);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  padding-top: 37px;\n}\n\n@media (max-width: 1600px) {\n  .section-three[_ngcontent-%COMP%] {\n    padding-top: calc(10px + (37 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 600px) {\n  .section-three[_ngcontent-%COMP%] {\n    background-position: center;\n    padding-bottom: 20px;\n  }\n}\n\n.section-three[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  font-weight: bold;\n  color: #ff6515;\n}\n\n@media (max-width: 1200px) {\n  .section-three[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-bottom: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-three[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.section-three[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 400px) {\n  .section-three[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0;\n  }\n}\n\n.section-three[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0px 0px 5px 10px #ecf9ff;\n}\n\n@media (max-width: 1000px) {\n  .section-three[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n}\n\n@media (max-width: 500px) {\n  .section-three[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n}\n\n.section-three-video[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\nvideo[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  width: 865px;\n  height: 460px;\n}\n\n@media (max-width: 1200px) {\n  video[_ngcontent-%COMP%] {\n    width: calc(300px + (860 - 150) * (100vw - 320px) / (1200 - 320));\n    height: calc(200px + (460 - 50) * (100vw - 320px) / (1200 - 320));\n    margin-top: calc(20px + (60 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 800px) {\n  video[_ngcontent-%COMP%] {\n    padding: 50px;\n  }\n}\n\n.section-three-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212529;\n}\n\n.section-three-header-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  font-size: 28px;\n  color: #ff6515;\n}\n\n@media (max-width: 1200px) {\n  .section-three-header-text[_ngcontent-%COMP%] {\n    font-size: calc(14px + (26 - 14) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-four[_ngcontent-%COMP%] {\n  background: white;\n  padding: 100px;\n}\n\n@media (max-width: 1200px) {\n  .section-four[_ngcontent-%COMP%] {\n    padding: calc(20px + (50 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%] {\n  background: #ff6515;\n  max-width: 300px;\n  margin-left: 10px;\n}\n\n.section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 100px;\n  min-height: 100px;\n  border: 1px solid white;\n  color: white;\n  padding: 20px;\n}\n\n@media (max-width: 400px) {\n  .section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    overflow: hidden;\n    padding: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-four[_ngcontent-%COMP%]   .rows[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.section-five[_ngcontent-%COMP%] {\n  background: #ff6515;\n  padding: 140px;\n}\n\n@media (max-width: 1200px) {\n  .section-five[_ngcontent-%COMP%] {\n    padding: calc(20px + (140 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-five[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.section-five[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\n\n.section-five-content[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.block-email[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #78340f;\n  padding: 20px;\n}\n\n@media (max-width: 1200px) {\n  .block-email[_ngcontent-%COMP%] {\n    padding: calc(3px + (20 - 3) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.block-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 25px 335px 25px 20px;\n  font-size: 14px;\n}\n\n@media (max-width: 1200px) {\n  .block-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: calc(8px + (14 - 8) * (100vw - 320px) / (1200 - 320));\n    padding-top: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n    padding-bottom: calc(5px + (10 - 5) * (100vw - 320px) / (1200 - 320));\n    padding-right: calc(30px + (335 - 30) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n@media (max-width: 600px) {\n  .block-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-right: calc(100px + (150 - 100) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.block-email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  padding: 25px;\n  font-size: 16px;\n  font-weight: 600;\n  background: #ff6515;\n  color: #fff;\n}\n\n.block-email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.7s;\n  background: #fff;\n  color: #ff6515;\n}\n\n@media (max-width: 1200px) {\n  .block-email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding-left: 3px;\n    padding-right: 3px;\n    font-size: calc(10px + (16 - 10) * (100vw - 320px) / (1200 - 320));\n    padding-top: calc(4px + (10 - 4) * (100vw - 320px) / (1200 - 320));\n    padding-bottom: calc(6px + (10 - 6) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.section-six[_ngcontent-%COMP%] {\n  background: url(/assets/sec6.jpg);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  padding: 80px 0;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%] {\n    padding: calc(20px + (80 - 20) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n.section-six[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #ff6515;\n}\n\n.section-six[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: left;\n}\n\n.section-six[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 25px;\n  font-size: 16px;\n  font-weight: 600;\n  background: #ff6515;\n  color: #fff;\n  float: right;\n}\n\n.section-six[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.7s;\n  background: #fff;\n  color: #ff6515;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: calc(5px + (25 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(1) {\n  background: #fff;\n  max-height: 475px;\n  max-width: 470px;\n  padding: 35px 35px 110px 35px;\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(1)   input[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n  width: 100%;\n  padding: 20px;\n  margin: 25px 0;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(1)   input[_ngcontent-%COMP%] {\n    padding: calc(5px + (20 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2) {\n  background: #fff;\n  max-width: 670px;\n  padding: 40px;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2) {\n    padding: calc(10px + (40 - 10) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   input[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n  width: 100%;\n  min-width: 160px;\n  padding: 15px;\n  margin: 10px 0;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   input[_ngcontent-%COMP%] {\n    text-align: left;\n    width: calc(85% + (100 - 85) * (100vw - 320px) / (1200 - 320));\n    padding: calc(5px + (15 - 5) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   input[_ngcontent-%COMP%]:nth-last-child {\n  padding-bottom: 175px;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   input[_ngcontent-%COMP%]:nth-last-child {\n    padding-bottom: calc(40px + (130 - 40) * (100vw - 320px) / (1200 - 320));\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding: 15px 0;\n  width: 50%;\n  font-size: 16px;\n}\n\n@media (max-width: 1200px) {\n  .section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%] {\n    font-size: calc(12px + (16 - 12) * (100vw - 320px) / (1200 - 320));\n    width: 50%;\n    min-width: 100px;\n    float: none;\n  }\n}\n\n.section-six[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.7s;\n  background: #fff;\n  color: #ff6515;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nfooter[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 1920px;\n  width: 100%;\n  background: #000;\n  padding: 45px;\n  color: #fff;\n}\n\n.activeNavigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQyL2xheW91dDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUVFO0VBSEY7SUFJSSxrRUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXRCTTtBQXVCUjs7QUFBRTtFQUpGO0lBS0ksa0VBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFGRTtFQUhGO0lBSUksa0VBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBS0Y7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUpFO0VBTkY7SUFPSSxlQUFBO0VBT0Y7QUFDRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQU9GOztBQU5FO0VBTEY7SUFNSSx1RUFBQTtFQVNGO0FBQ0Y7O0FBTkE7RUFDRSxlQUFBO0FBU0Y7O0FBTkE7RUFDRSxVQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBUEU7RUFURjtJQVVJLGdFQUFBO0VBVUY7QUFDRjs7QUFURTtFQVpGO0lBYUksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQVlGO0FBQ0Y7O0FBVkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVhJO0VBSEY7SUFJSSxpRUFBQTtJQUNBLGdFQUFBO0VBY0o7QUFDRjs7QUFaRTtFQUNFLGFBQUE7QUFjSjs7QUFiSTtFQUZGO0lBR0ksZ0VBQUE7RUFnQko7QUFDRjs7QUFYRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVpJO0VBTEY7SUFNSSxrRUFBQTtJQUNBLGtFQUFBO0VBZUo7QUFDRjs7QUFiRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWVKOztBQWJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBZUo7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBY0Y7O0FBWEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFiRTtFQVJGO0lBU0ksMkJBQUE7RUFnQkY7QUFDRjs7QUFmRTtFQVhGO0lBWUksMkJBQUE7SUFDQSwrREFBQTtFQWtCRjtBQUNGOztBQWpCRTtFQUNFLFNBQUE7QUFtQko7O0FBakJFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQW1CSjs7QUFqQkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFsQkk7RUFORjtJQU9JLDhEQUFBO0lBQ0EsbUVBQUE7RUFxQko7QUFDRjs7QUFwQkk7RUFWRjtJQVdJLHVCQUFBO0VBdUJKO0FBQ0Y7O0FBdEJJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBd0JOOztBQXZCTTtFQUhGO0lBSUksZ0VBQUE7SUFDQSxrRUFBQTtJQUNBLHFFQUFBO0lBQ0EsdUVBQUE7RUEwQk47QUFDRjs7QUF6Qk07RUFURjtJQVVJLHlFQUFBO0VBNEJOO0FBQ0Y7O0FBMUJJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkE3TEU7RUE4TEYsV0FBQTtBQTRCTjs7QUEzQk07RUFQRjtJQVFJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrRUFBQTtJQUNBLGtFQUFBO0lBQ0EscUVBQUE7RUE4Qk47QUFDRjs7QUE3Qk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMU1BO0FBeU9SOztBQTFCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQTZCRjs7QUE1QkU7RUFIRjtJQUlJLGdFQUFBO0VBK0JGO0FBQ0Y7O0FBN0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFnQ0Y7O0FBL0JFO0VBSkY7SUFLSSx1RUFBQTtFQWtDRjtBQUNGOztBQWhDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBMU9NO0FBOFFSOztBQWpDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FoUE87QUFvUlQ7O0FBbkNFO0VBTEY7SUFNSSw2REFBQTtFQXNDRjtBQUNGOztBQXJDRTtFQVJGO0lBU0ksWUFBQTtFQXdDRjtBQUNGOztBQXZDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQTFQSztFQTJQTCxrQkFBQTtBQXlDSjs7QUF2Q0U7RUFDRSxTQUFBO0FBeUNKOztBQXJDQTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBd0NGOztBQXZDRTtFQUxGO0lBTUksb0VBQUE7RUEwQ0Y7QUFDRjs7QUF6Q0U7RUFSRjtJQVNJLDJCQUFBO0lBQ0Esb0JBQUE7RUE0Q0Y7QUFDRjs7QUEzQ0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FsUkk7QUErVFI7O0FBNUNJO0VBSkY7SUFLSSxxRUFBQTtFQStDSjtBQUNGOztBQTdDRTtFQUNFLFVBQUE7QUErQ0o7O0FBN0NFO0VBQ0UsU0FBQTtBQStDSjs7QUE5Q0k7RUFGRjtJQUdJLGNBQUE7SUFDQSxTQUFBO0VBaURKO0FBQ0Y7O0FBL0NFO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtBQWlESjs7QUFoREk7RUFIRjtJQUlJLGdCQUFBO0VBbURKO0FBQ0Y7O0FBbERJO0VBTkY7SUFPSSxjQUFBO0VBcURKO0FBQ0Y7O0FBaERBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQW1ERjs7QUFoREE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBbURGOztBQWxERTtFQUpGO0lBS0ksaUVBQUE7SUFDQSxpRUFBQTtJQUNBLG1FQUFBO0VBcURGO0FBQ0Y7O0FBcERFO0VBVEY7SUFVSSxhQUFBO0VBdURGO0FBQ0Y7O0FBbkRFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBc0RKOztBQW5EQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1VU07QUFrWVI7O0FBckRFO0VBTEY7SUFNSSxrRUFBQTtFQXdERjtBQUNGOztBQXJEQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXdERjs7QUF2REU7RUFIRjtJQUlJLGdFQUFBO0VBMERGO0FBQ0Y7O0FBeERFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBMERKOztBQXpESTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTJETjs7QUExRE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQTREUjs7QUF6RE07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUEyRFI7O0FBMURRO0VBUEY7SUFRSSxnQkFBQTtJQUNBLDhEQUFBO0VBNkRSO0FBQ0Y7O0FBM0RRO0VBQ0Usc0JBQUE7QUE2RFY7O0FBL0JBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBa0NGOztBQWpDRTtFQUhGO0lBSUksaUVBQUE7RUFvQ0Y7QUFDRjs7QUFuQ0U7RUFDRSxXQUFBO0FBcUNKOztBQW5DRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXFDSjs7QUFqQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBb0NGOztBQWpDQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBb0NGOztBQW5DRTtFQUpGO0lBS0ksOERBQUE7RUFzQ0Y7QUFDRjs7QUFwQ0U7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFzQ0o7O0FBckNJO0VBSEY7SUFJSSxnRUFBQTtJQUNBLGtFQUFBO0lBQ0EscUVBQUE7SUFDQSx1RUFBQTtFQXdDSjtBQUNGOztBQXZDSTtFQVRGO0lBVUkseUVBQUE7RUEwQ0o7QUFDRjs7QUF4Q0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQS9iSTtFQWdjSixXQUFBO0FBMENKOztBQXpDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyY0U7QUFnZlI7O0FBekNJO0VBYkY7SUFjSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0VBQUE7SUFDQSxrRUFBQTtJQUNBLHFFQUFBO0VBNENKO0FBQ0Y7O0FBeENBO0VBQ0UsYUFBQTtBQTJDRjs7QUF4Q0E7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUEyQ0Y7O0FBMUNFO0VBTkY7SUFPSSxnRUFBQTtFQTZDRjtBQUNGOztBQTVDRTtFQUNFLFlBQUE7QUE4Q0o7O0FBNUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQW5lSTtBQWloQlI7O0FBNUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQThDSjs7QUEzQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFoZkk7RUFpZkosV0FBQTtFQUNBLFlBQUE7QUE2Q0o7O0FBNUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXZmRTtBQXFpQlI7O0FBNUNJO0VBZkY7SUFnQkksOERBQUE7RUErQ0o7QUFDRjs7QUE3Q0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQStDSjs7QUE5Q0k7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWdETjs7QUEvQ007RUFMRjtJQU1JLDhEQUFBO0VBa0ROO0FBQ0Y7O0FBL0NFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFpREo7O0FBaERJO0VBSkY7SUFLSSxnRUFBQTtFQW1ESjtBQUNGOztBQWxESTtFQUNFLGtCQUFBO0FBb0ROOztBQWxESTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFvRE47O0FBbkRNO0VBTkY7SUFPSSxnQkFBQTtJQUNBLDhEQUFBO0lBQ0EsOERBQUE7RUFzRE47QUFDRjs7QUFuREk7RUFDRSxxQkFBQTtBQXFETjs7QUFwRE07RUFGRjtJQUdJLHdFQUFBO0VBdUROO0FBQ0Y7O0FBckRJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXVETjs7QUF0RE07RUFMRjtJQU1JLGtFQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQXlETjtBQUNGOztBQXhETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0F4akJBO0FBa25CUjs7QUFyREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUF3REY7O0FBdERBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBeURGOztBQXREQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXlERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0Mi9sYXlvdXQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yOiAjZmY2NTE1O1xyXG4kc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2VjZjlmZjtcclxuKntcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDM2IC0gMTIpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcbn1cclxuXHJcbmgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArICgyNCAtIDEyKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMTYgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxufVxyXG5cclxubGl7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG5zdmd7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnVyZ2VyLW1lbnV7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMjBweCArICg1MCAtIDIwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29se1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaGVhZGVye1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLy9wb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgcGFkZGluZzogY2FsYygxMHB4ICsgKDIwIC0gMTApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwcHggKyAoMzUwIC0gMTAwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgIGhlaWdodDogY2FsYyg1MHB4ICsgKDExNSAtIDUwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IGNhbGMoMjBweCArICgzNSAtIDIwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgICAgLy9kaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDVweCArICgyNSAtIDUpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMjAgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVye1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgY29sb3I6ICNmZjY1MTU7XHJcbiAgfVxyXG4gIGE6YWN0aXZle1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1ibG9ja3tcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW9uZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zZWMxLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDI2MHB4IDA7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiBjYWxjKDVweCArICgxMzAgLSA1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLW9uZS1jb250ZW50e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlY3Rpb24tb25lLWJ1dHRvbnN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzgzNDBmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcGFkZGluZzogY2FsYygzcHggKyAoMjAgLSAzKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTVweCArICgzMCAtIDE1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMzM1cHggMjVweCAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgKDE0IC0gOCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDVweCArICgxMCAtIDUpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg1cHggKyAoMTAgLSA1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzMHB4ICsgKDMzNSAtIDMwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxMDBweCArICgxNTAgLSAxMDApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTBweCArICgxNiAtIDEwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoNHB4ICsgKDEwIC0gNCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDZweCArICgxMCAtIDYpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2VjdGlvbi10d297XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogOTBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKDEwcHggKyAoOTAgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxufVxyXG4uc2VjdGlvbi10d28tY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwcHggKyAoNTAgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxufVxyXG4uc2VjdGlvbi10d28tc3dpdGNoLW1haW4tYmxvY2t7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWN0aW9uLXR3by1zd2l0Y2gtYmxvY2t7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAkc2hhZG93O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIG1hcmdpbjogY2FsYyg1cHggKyAoMjAgLSA1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICAuYmxvY2staW1ne1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aHJlZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9zZWMzLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZy10b3A6IDM3cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTBweCArICgzNyAtIDEwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDVweCArICgxMCAgLSA1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2x7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMTBweCAjZWNmOWZmO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zZWN0aW9uLXRocmVlLXZpZGVve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnZpZGVve1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgd2lkdGg6IDg2NXB4O1xyXG4gIGhlaWdodDogNDYwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMzAwcHggKyAoODYwIC0gMTUwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMjAwcHggKyAoNDYwIC0gNTApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoMjBweCArICg2MCAtIDIwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRocmVlLWhlYWRlcntcclxuICBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDMzLCAzNywgNDEpO1xyXG4gIH1cclxufVxyXG4uc2VjdGlvbi10aHJlZS1oZWFkZXItdGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNiAtIDE0KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1mb3Vye1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoMjBweCArICg1MCAtIDIwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG5cclxuICAucm93c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jb2xze1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY2NTE1O1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgdWx7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpe1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKDVweCArICgxMCAtIDUpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyAuY29sc3tcclxuICAvLyBcdHBhZGRpbmc6IDA7XHJcbiAgLy8gXHRiYWNrZ3JvdW5kOiAjZmY2NTE1O1xyXG4gIC8vIFx0cHtcclxuICAvLyBcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgLy8gXHR9XHJcbiAgLy8gXHR1bHtcclxuICAvLyBcdFx0cGFkZGluZzogMDtcclxuICAvLyBcdH1cclxuICAvLyBcdGxpe1xyXG4gIC8vIFx0XHRjb2xvcjogI2ZmZjtcclxuICAvLyBcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuICAvLyBcdFx0cGFkZGluZzogMjhweDtcclxuICAvLyBcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC8vIFx0XHRcdHBhZGRpbmc6IGNhbGMoNHB4ICsgKDI4IC0gNCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIC8vIFx0XHR9XHJcbiAgLy8gXHR9XHJcbiAgLy8gXHRsaTpudGgtY2hpbGQoMSl7XHJcbiAgLy8gXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vIFx0XHRmb250LXNpemU6IDE4cHg7XHJcbiAgLy8gXHRcdGNvbG9yOiAjZmZmO1xyXG4gIC8vIFx0fVxyXG4gIC8vIH1cclxufVxyXG5cclxuLnNlY3Rpb24tZml2ZXtcclxuICBiYWNrZ3JvdW5kOiAjZmY2NTE1O1xyXG4gIHBhZGRpbmc6IDE0MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoMjBweCArICgxNDAgLSAyMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gIH1cclxuICBoMXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1maXZlLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmxvY2stZW1haWx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICM3ODM0MGY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKDNweCArICgyMCAtIDMpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICB9XHJcblxyXG4gIGlucHV0e1xyXG4gICAgcGFkZGluZzogMjVweCAzMzVweCAyNXB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAoMTQgLSA4KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDVweCArICgxMCAtIDUpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNXB4ICsgKDEwIC0gNSkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDMwcHggKyAoMzM1IC0gMzApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEwMHB4ICsgKDE1MCAtIDEwMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMTBweCArICgxNiAtIDEwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDRweCArICgxMCAtIDQpICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNnB4ICsgKDEwIC0gNikgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlY3Rpb24tc2l4e1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NlYzYuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoMjBweCArICg4MCAtIDIwKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcGFkZGluZzogY2FsYyg1cHggKyAoMjUgLSA1KSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2w6bnRoLWNoaWxkKDEpe1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1heC1oZWlnaHQ6IDQ3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NzBweDtcclxuICAgIHBhZGRpbmc6IDM1cHggMzVweCAxMTBweCAzNXB4O1xyXG4gICAgaW5wdXR7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgKDIwIC0gNSkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2w6bnRoLWNoaWxkKDIpe1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1heC13aWR0aDogNjcwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKDEwcHggKyAoNDAgLSAxMCkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDg1JSArICgxMDAgLSA4NSkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgKDE1IC0gNSkgKiAoMTAwdncgLSAzMjBweCkgLyAoMTIwMCAtIDMyMCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaW5wdXQ6bnRoLWxhc3QtY2hpbGR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNzVweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQwcHggKyAoMTMwIC0gNDApICogKDEwMHZ3IC0gMzIwcHgpIC8gKDEyMDAgLSAzMjApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArICgxNiAtIDEyKSAqICgxMDB2dyAtIDMyMHB4KSAvICgxMjAwIC0gMzIwKSk7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb290ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb290ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMTkyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgcGFkZGluZzogNDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFjdGl2ZU5hdmlnYXRpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Layout2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout2',
                templateUrl: './layout2.component.html',
                styleUrls: ['./layout2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xX1k":
/*!*****************************************************!*\
  !*** ./src/app/components/forms/forms.component.ts ***!
  \*****************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/new-service.service */ "y9dV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function FormsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.router.navigate(["/login"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BACK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LOGOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { none: a0, small: a1, big: a2 }; };
const _c1 = function (a0) { return { display: a0 }; };
const _c2 = function (a0, a1) { return { background: a0, width: a1 }; };
function FormsComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "* \u0423\u0441\u0456 \u043F\u043E\u043B\u044F \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0456\u043C'\u044F \u0434\u043B\u044F \u043F\u043E\u0448\u0442\u043E\u0432\u043E\u0457 \u0441\u043A\u0440\u0438\u043D\u044C\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.passw1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r9.type = "text"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(o) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r9.type = "password"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(o) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 8 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.passw2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "em", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0430\u0434\u0430\u044E\u0442\u044C!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u042F\u043A \u0432\u0430\u0441 \u0437\u0432\u0430\u0442\u0438?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.day = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.moonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormsComponent_section_4_Template_input_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.year = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u0456\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0416\u0456\u043D\u043E\u0447\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_input_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.funR1(_r16, _r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_input_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.funR2(_r16, _r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.printForm(ctx_r31.user, _r8, _r9, _r10, _r11.value, _r12, _r13, _r14, _r15, ctx_r31.sex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u0423\u0432\u0456\u0439\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_section_4_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.register(_r8.value, _r9.value, _r10.value, _r11.value, _r12.value, _r13.value, _r14.value, _r15.value, ctx_r32.sex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0441\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](24, _c0, ctx_r2.email.length < 0, ctx_r2.email.length > 0, ctx_r2.email.length > 7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.passw1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](28, _c0, ctx_r2.passw1.length < 0, ctx_r2.passw1.length > 0, ctx_r2.passw1.length > 7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, _r9.type == "password" ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, _r9.type == "text" ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, ctx_r2.passw1.length < 8 ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.passw1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c2, ctx_r2.passw1.length < 8 ? "red" : "green", ctx_r2.passw1.length < 8 ? "100px" : "185px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.passw2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](41, _c0, !ctx_r2.passw2.length < 0, ctx_r2.passw2 != ctx_r2.passw1, ctx_r2.passw2 == ctx_r2.passw1 && ctx_r2.passw1 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c1, ctx_r2.passw2 != ctx_r2.passw1 ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.passw2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.name, " ", ctx_r2.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.moonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r2.day, " ", ctx_r2.moonth, " ", ctx_r2.year, "");
} }
function FormsComponent_div_6_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_div_6_tr_16_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const user_r34 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.nameChange(user_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_div_6_tr_16_Template_td_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const user_r34 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.nameChange(user_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_div_6_tr_16_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const user_r34 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.nameChange(user_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r35 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r34.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r34.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r34.email, " ");
} }
function FormsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0434\u043E\u0440\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "@mail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormsComponent_div_6_tr_16_Template, 10, 4, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currentUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.allUsers);
} }
class FormsComponent {
    constructor(Http, svc, activateRoute, router) {
        this.Http = Http;
        this.svc = svc;
        this.activateRoute = activateRoute;
        this.router = router;
        this.email = '';
        this.passw1 = '';
        this.passw2 = '';
        this.array = [];
        this.divUser = false;
        this.sex = '';
        this.isEdit1 = false;
        this.isEdit2 = true;
        this.isEdit3 = false;
        this.isEdit5 = false;
        this.inpChange = false;
        this.currentEditUser = null;
        this.dateOne = new Date();
        this.date = new Date();
        console.log(this.date);
    }
    ngOnInit() {
        this.open();
        this.globalUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('person'));
        if (users) {
            this.allUsers = users;
        }
        if (this.globalUser) {
            this.currentEditUser = this.globalUser;
            this.currentUser = this.globalUser;
            this.allUsers = users;
        }
        console.log('this.currentUser', this.currentUser);
        console.log('this.allUsers', this.allUsers);
    }
    showEdit1() {
        this.isEdit1 = false;
        this.isEdit2 = true;
        this.divUser = false;
    }
    showEdit2() {
        this.isEdit2 = false;
        this.isEdit1 = true;
        this.divUser = true;
    }
    funR1(r1, r2) {
        if (r1.checked) {
            r1.checked = true;
            r2.checked = false;
            this.sex = 'Жіночий';
        }
        else if (r2.checked) {
            r1.checked = false;
            r2.checked = true;
            this.sex = 'Чоловічий';
        }
    }
    funR2(r1, r2) {
        if (r2.checked) {
            r1.checked = false;
            r2.constructor = true;
            this.sex = 'Чоловічий';
        }
        else {
            r1.checked = true;
            r2.checked = false;
            this.sex = 'Жіночий';
        }
    }
    register(inpmail, inppassword, inppassw2, inpname, inpsurname, inpday, inpmoonth, inpyear, sex) {
        if (this.email.length < 8) {
            alert('Назва повиненна містити не менше 8 символів');
        }
        if (this.passw1 !== this.passw2) {
            alert('Паролі не збігаються');
        }
        if (this.name.length < 3) {
            alert('Заповніть поле з ім ям');
        }
        if (this.surname.length < 3) {
            alert('Заповніть поле з прізвищем');
        }
        else {
            let users = JSON.parse(localStorage.getItem('person'));
            if (!users) {
                users = [];
            }
            const newUser = {
                email: inpmail + '@gmail.com',
                passw1: inppassword,
                passw2: inppassw2,
                name: inpname,
                surname: inpsurname,
                day: inpday,
                moonth: inpmoonth,
                year: inpyear,
                likes: false,
                sex
            };
            users.push(newUser);
            localStorage.setItem('person', JSON.stringify(users));
        }
        alert('Реєстрація пройдена');
    }
    printForm(user, inpmail, inppassword, inppassw2, inpname, inpsurname, inpday, inpmoonth, inpyear, sex) {
        const data = localStorage.getItem('person');
        this.allUsers = JSON.parse(data);
        this.currentUser = null;
        if (this.email.length < 8) {
            alert('Назва повиненна містити не менше 8 символів');
        }
        else {
            console.log('Користувач: ' + this.name + ' ' + this.surname + ' email ' + this.email + '@mail.cars');
            this.divUser = !this.divUser;
            this.isEdit1 = false;
            this.isEdit2 = false;
            this.isEdit5 = true;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.currentUser = this.name;
            this.router.navigate(['/login']);
        }
    }
    open() {
        this.subscription = this.activateRoute.params.subscribe((params) => {
            this.param1 = params['inputValuelog'];
            this.param2 = params['inputValuepas'];
        });
        this.paramLog = this.param1;
        this.paramPas = this.param2;
        const data = localStorage.getItem('person');
        this.allUsers = JSON.parse(data);
        this.allUsers.forEach((user) => {
            if (user.passw1 === this.paramPas && user.email === this.paramLog) {
                this.isEdit5 = true;
                this.currentUser = user;
                this.currentEditUser = user;
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            }
        });
    }
    logout() {
        this.currentUser = null;
        this.router.navigate(['/login']);
        localStorage.removeItem('currentUser');
    }
    close() {
        console.log('Вийшов користувач: ' + this.currentUser.name);
        this.isEdit3 = false;
        this.isEdit5 = true;
        this.isEdit5 = false;
        this.inputValuelog = null;
        this.inputValuepas = null;
    }
    deleteUser(user) {
        for (let us = 0; us < this.allUsers.length; us++) {
            if (this.currentUser === user) {
                this.currentUser = null;
                localStorage.removeItem('currentUser');
            }
            if (this.allUsers[us] === user) {
                this.allUsers.splice(us, 1);
                console.log('Delete user: ' + user.name);
                localStorage.setItem('person', JSON.stringify(this.allUsers));
            }
        }
    }
    editUser(user, nameUser) {
        for (let edit = 0; edit < this.allUsers.length; edit++) {
            if (this.allUsers[edit] === user) {
                this.currentEditUser = user;
                this.thisUser = nameUser;
                this.thisUser.style.color = 'green';
            }
        }
    }
    saveChange(nameUser) {
        this.thisUser.style.color = '#343a40';
        localStorage.setItem('person', JSON.stringify(this.allUsers));
    }
    nameChange(user) {
        this.inpChange = true;
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], decls: 7, vars: 4, consts: [[1, "header-button"], [3, "click", 4, "ngIf"], ["style", "padding: 0 0 20px 0", 4, "ngIf"], [2, "padding", "20px", "background", "#eee", "height", "80vh"], [4, "ngIf"], [3, "click"], ["fill", "currentColor", "height", "25", "viewBox", "0 0 16 16", "width", "25", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-box-arrow-left"], ["d", "M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z", "fill-rule", "evenodd"], ["d", "M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z", "fill-rule", "evenodd"], [2, "padding", "0 0 20px 0"], ["id", "form1"], ["action", "#"], [2, "color", "grey", "font-size", "12px", "font-family", "cursive"], ["for", "email"], ["id", "email", "name", "email", "placeholder", "@gmaill.com", "type", "email", 3, "ngModel", "ngClass", "ngModelChange"], ["inpmail", ""], ["for", "password"], ["id", "password", "maxlength", "8", "name", "password", "placeholder", "password", "type", "password", 3, "ngModel", "ngClass", "ngModelChange"], ["inppassword", ""], ["id", "form-button", 3, "ngStyle", "click"], [2, "display", "none", "color", "red", "font-size", "14px", 3, "ngStyle"], ["id", "passwordiv"], ["id", "passwinsidediv", 3, "ngStyle"], ["for", "passw2"], ["id", "passw2", "maxlength", "8", "name", "passw2", "placeholder", "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password", 3, "ngModel", "ngClass", "ngModelChange"], ["inppassw2", ""], [2, "color", "red", 3, "ngStyle"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "name", "type", "text", 3, "ngModel", "ngModelChange"], ["inpname", ""], ["name", "surname", "placeholder", "surname", "type", "text", 3, "ngModel", "ngModelChange"], ["inpsurname", ""], ["for", "date"], ["id", "date", "name", "day", "placeholder", "day", "type", "number", 3, "ngModel", "ngModelChange"], ["inpday", ""], ["name", "moon", "placeholder", "moon", "type", "number", 3, "ngModel", "ngModelChange"], ["inpmoonth", ""], ["name", "year", "placeholder", "year", "type", "number", 3, "ngModel", "ngModelChange"], ["inpyear", ""], ["for", "r1"], ["id", "r1", "name", "r1", "type", "radio", 3, "click"], ["r1", ""], ["for", "r2"], ["id", "r2", "name", "r2", "type", "radio", 3, "click"], ["r2", ""], ["id", "form-button", 3, "click"], ["id", "form-button", "type", "reset"], [2, "text-align", "center"], [2, "text-transform", "uppercase", "color", "gray", "text-decoration", "underline"], ["border", "1px", 1, "user-table"], [2, "text-transform", "uppercase"], [4, "ngFor", "ngForOf"], ["id", "td-text", 3, "click"], ["nameUser", ""]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormsComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormsComponent_button_3_Template, 5, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormsComponent_section_4_Template, 91, 47, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormsComponent_div_6_Template, 17, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  color: black;\r\n  text-transform: uppercase;\r\n  padding: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  \r\n  background: linear-gradient(#eee, grey);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#section-log[_ngcontent-%COMP%] {\r\n  padding-bottom: 300px;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%] {\r\n  background: #eee;\r\n  padding: 20px 0 35px 0;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: none;\r\n  background: #212529;\r\n  font-weight: bolder;\r\n  color: grey;\r\n\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n  transition: .5s;\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  section[_ngcontent-%COMP%] {\r\n    padding: 0 10px 0 10px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    display: block;\r\n    width: auto;\r\n  }\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  font-size: 14px;\r\n  border: 1px solid grey;\r\n  padding: 0 0 3px 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.noneBlock[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.none[_ngcontent-%COMP%] {\r\n  border: 1px solid grey;\r\n}\r\n\r\n.null[_ngcontent-%COMP%] {\r\n  border: 1px solid grey;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n  border: 5px solid red;\r\n}\r\n\r\n.big[_ngcontent-%COMP%] {\r\n  border: 5px solid green;\r\n}\r\n\r\n#passwordiv[_ngcontent-%COMP%] {\r\n  width: 185px;\r\n  height: 7px;\r\n  background: grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n#passwinsidediv[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 7px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n  padding: 3px 7px 3px 7px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  background: grey;\r\n  color: #eee;\r\n  float: right;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: #eee;\r\n  color: grey;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover   b[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  color: blue;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\n.user-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.user-table[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.edit-user-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.edit-user-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 130px;\r\n}\r\n\r\n#td-button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-top: 1px solid grey;\r\n  \r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  \r\n  \r\n}\r\n\r\n#td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  width: 100px;\r\n  font-size: 18px;\r\n  background: #212529;\r\n  font-weight: bolder;\r\n  color: grey;\r\n}\r\n\r\n#td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transition: .5s;\r\n  background: black;\r\n  color: white;\r\n}\r\n\r\n#td-text[_ngcontent-%COMP%]:first-letter {\r\n  text-transform: uppercase;\r\n  \r\n  font-weight: bold;\r\n  font-family: Dialog;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  table[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  table[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 30px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    font-size: 8px;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%] {\r\n    display: grid;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    width: 100%;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  #td-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\n#button-set[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 179px;\r\n  padding: 0 20px 0 20px;\r\n  height: 30px;\r\n  background: #212529;\r\n  font-weight: bolder;\r\n  color: grey;\r\n}\r\n\r\n#button-set[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n  color: white;\r\n  transition: .5s;\r\n}\r\n\r\n#form-button[_ngcontent-%COMP%] {\r\n  letter-spacing: 1px;\r\n  font-weight: bolder;\r\n  transition: .5s;\r\n  background: #212529;\r\n  color: grey;\r\n}\r\n\r\n#form-button[_ngcontent-%COMP%]:hover {\r\n  background: black;\r\n  color: white;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:after {\r\n  content: '!';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7QUFDRjs7QUFHQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDAgMCAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIC8qcGFkZGluZzogMjBweCAwIDIwcHggMDsqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWVlLCBncmV5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2VjdGlvbi1sb2cge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMDBweDtcclxufVxyXG5cclxuLmhlYWRlci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgcGFkZGluZzogMjBweCAwIDM1cHggMDtcclxufVxyXG5cclxuLmhlYWRlci1idXR0b24gYnV0dG9uIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IGdyZXk7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDAgMCAzcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub25lQmxvY2sge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4ubnVsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5iaWcge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4jcGFzc3dvcmRpdiB7XHJcbiAgd2lkdGg6IDE4NXB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3Bhc3N3aW5zaWRlZGl2IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIHBhZGRpbmc6IDNweCA3cHggM3B4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgY29sb3I6IGdyZXk7XHJcblxyXG59XHJcblxyXG5idXR0b246aG92ZXIgYiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5iIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXItdGFibGUgdGgsIC51c2VyLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZWRpdC11c2VyLWNvbnRhaW5lciB1bCBsaSBkaXYgaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZWRpdC11c2VyLWNvbnRhaW5lciB1bCBsaSBkaXYgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMzBweDtcclxufVxyXG5cclxuI3RkLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xyXG4gIC8qbWFyZ2luLXRvcDogMTBweDsqL1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIC8qZGlzcGxheTogZmxleDsqL1xyXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbn1cclxuXHJcbiN0ZC1idXR0b24gYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4jdGQtYnV0dG9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3RkLXRleHQ6Zmlyc3QtbGV0dGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC8qZm9udC1zaXplOiAxNTAlOyovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IERpYWxvZztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRkIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG5cclxuICAjdGQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAjdGQtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI3RkLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI3RkLWJ1dHRvbiBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG50YWJsZSB0ciB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNidXR0b24tc2V0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTc5cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4jYnV0dG9uLXNldDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuI2Zvcm0tYnV0dG9uIHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbiNmb3JtLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pOmFmdGVyIHtcclxuICBjb250ZW50OiAnISc7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms',
                templateUrl: './forms.component.html',
                styleUrls: ['./forms.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _service_new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "y9dV":
/*!***********************************************************!*\
  !*** ./src/app/components/service/new-service.service.ts ***!
  \***********************************************************/
/*! exports provided: NewServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewServiceService", function() { return NewServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NewServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    ngOnInit() {
    }
    getAll() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }
    consoleText(arg) {
        console.log(arg);
    }
    getData() {
        return this.httpClient.get('http://localhost:4200/request');
    }
    getRandomApiValue() {
        return this.httpClient.get('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=d2d3af14c23f4279abf61e732c9abdfd');
    }
    getCurrency() {
        return this.httpClient.get('https://api.fastforex.io/fetch-all?api_key=a91e184a6d-a4a5605964-qzu4cu');
    }
}
NewServiceService.ɵfac = function NewServiceService_Factory(t) { return new (t || NewServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewServiceService, factory: NewServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map