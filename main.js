(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"UploadForm\">\n  <div class=\"logo\">Upload an item </div>\n  <div class=\"register-item\">\n    <form #myform=\"ngForm\" (ngSubmit)=\"register(myform)\" class=\"form form-register\">\n\n      <div class=\"form-field\">\n            <label class=\"user\" for=\"category\"><span class=\"hidden\">Category</span></label>\n            <select name=\"category\" id=\"category\" type=\"select\" class=\"form-input\" placeholder=\"Category\" ngModel required>\n              <option value=\"\" disabled>Please select a category</option>\n              <option *ngFor=\"let cat of categories\"\n                      [value]=\"cat.id\"> \n                      {{cat.category_name}} \n              </option>\n            </select>\n\n      </div>\n      <div class=\"form-field\">\n        <label class=\"number_of_images\" for=\"type\"><span class=\"hidden\">Number of Images</span></label>\n        <Input name=\"number_of_images\" ngDefaultControl type=\"number\" min=\"1\" value=\"1\" [(ngModel)]=\"number_of_images\">\n      </div>\n      <div class=\"form-field\">\n        <label class=\"user\" for=\"art-title\"><span class=\"hidden\">Title</span></label>\n        <input name=\"title\" id=\"art-title\" type=\"text\" class=\"form-input\" placeholder=\"title\" ngModel required>\n      </div>\n\n      <!-- <div class=\"form-field\">\n        <label class=\"lock\" for=\"description\"><span class=\"hidden\">description</span></label>\n        <input name=\"description\" id=\"description\" type=\"text\" class=\"form-input\" placeholder=\"description\" ngModel required>\n      </div> -->\n      <div class=\"form-field\">\n        <label class=\"lock\" for=\"order\"><span class=\"hidden\">order</span></label>\n        <input name=\"order\" id=\"order\" type=\"number\" class=\"form-input\" placeholder=\"order\" ngModel required>\n      </div>\n      <div class=\"form-field\">\n        <label class=\"lock\" for=\"description\"><span class=\"hidden\">global_order</span></label>\n        <input name=\"global_order\" id=\"global_order\" type=\"number\" class=\"form-input\" placeholder=\"global_order\" ngModel required>\n      </div>\n      <!-- <div class=\"form-field\">\n        <label class=\"lock\" for=\"order\"><span class=\"hidden\">image</span></label>\n        <input name=\"image\" id=\"image\" type=\"text\" class=\"form-input\" placeholder=\"image\" ngModel required>\n      </div> -->\n      <div class=\"form-field\">\n        <label class=\"lock\" for=\"order\"><span class=\"hidden\">Image / Cover Image</span></label>\n        <input name=\"preview_image\" id=\"image\" type=\"file\" class=\"form-input\" placeholder=\"image\" (change)=\"gotCoverImage($event)\" required>\n      </div>\n      <ng-container  class=\"image_bucket\" *ngFor=\"let count of number_of_images | iteration\">\n        <div class=\"form-field\">\n          <label class=\"lock\" for=\"description\"><span class=\"hidden\">description {{ count +1 }}</span></label>\n          <input name=\"{{'description_'+count}}\" id=\"description\" type=\"text\" class=\"form-input\" placeholder=\"description\" ngModel required>\n        </div>\n        <div class=\"form-field\">\n        <label class=\"lock\" for=\"order\"><span class=\"hidden\">Image {{ count +1 }}</span></label>\n        <input name=\"{{'image_'+count}}\" [attr.index]=\"count\" id=\"image\" type=\"file\" class=\"form-input\" placeholder=\"image\" (change)=\"gotImage($event)\" required>\n      </div>\n      </ng-container>\n      \n      <div class=\"status\">\n        <p id=\"status\">Click the upload button after filling form</p>\n      </div>\n      <div class=\"form-field\">\n        <input *ngIf=\"!mode\" type=\"submit\" value=\"Upload to Website\">\n        <input *ngIf=\"mode\" type=\"reset\" value=\"reset the form for another upload\" (click)=\"showUpload()\">\n      </div>\n    </form>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n  .container .UploadForm {\n    border: 5px solid orange;\n    border-radius: 15px 0px 15px 0px;\n    width: 50%;\n    height: 50%;\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background-color: lightcoral; }\n  .container .UploadForm .logo {\n      text-decoration: underline;\n      font-size: 25px;\n      padding: 15px; }\n  .container .UploadForm .register-item {\n      background-color: orange;\n      border-radius: 15px 0px 15px 0px;\n      padding: 10px; }\n  .container .UploadForm .register-item .form-field {\n        padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9zYXJmYXJhel9iYWNrZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsV0FBVTtFQUNWLFlBQVcsRUFBQTtFQU5mO0lBUVEsd0JBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxVQUFTO0lBQ1QsV0FBVTtJQUNWLGFBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNEJBQTJCLEVBQUE7RUFqQm5DO01BbUJZLDBCQUEwQjtNQUMxQixlQUFjO01BQ2QsYUFBWSxFQUFBO0VBckJ4QjtNQXdCWSx3QkFBdUI7TUFDdkIsZ0NBQWdDO01BQ2hDLGFBQVksRUFBQTtFQTFCeEI7UUE0QmdCLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgLlVwbG9hZEZvcm17XG4gICAgICAgIGJvcmRlcjo1cHggc29saWQgb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBoZWlnaHQ6NTAlO1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRjb3JhbDtcbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZWdpc3Rlci1pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIC5mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(firebase) {
        this.firebase = firebase;
        this.cover_image = null;
        this.images = [];
        this.mode = false;
        this.number_of_images = 1;
        this.categories = [];
        // this.items = db.collection('/items').valueChanges();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.firebase.signedInState.subscribe((user) => {
        //   console.log(user);
        // });
        this.firebase.getCategories()
            .then(function (categories) {
            _this.categories = categories;
        });
    };
    AppComponent.prototype.register = function (form) {
        this.mode = true;
        console.log(form.value);
        document.getElementById('status').innerText = "Uploading to Website...";
        this.firebase.addToWork(form.value, this.cover_image, this.images)
            .then(function (result) {
            document.getElementById('status').innerText = "Upload Successful";
            setTimeout(function () {
                document.getElementById('status').innerText = "CLik the uplaod button after filling form";
            }, 2000);
        })
            .catch(function (err) {
            document.getElementById('status').innerText = "Upload Failed , plese try again";
            setTimeout(function () {
                document.getElementById('status').innerText = "CLik the uplaod button after filling form";
            }, 2000);
        });
    };
    AppComponent.prototype.showUpload = function () {
        this.mode = false;
    };
    AppComponent.prototype.gotImage = function (event) {
        console.warn(event.target, event.target.getAttribute('index'));
        console.log(event.target.files[0]);
        this.images[parseInt(event.target.getAttribute('index'))] = event.target.files[0];
        console.error(this.images);
    };
    AppComponent.prototype.gotCoverImage = function (event) {
        this.cover_image = event.target.files[0];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _iteration_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./iteration.pipe */ "./src/app/iteration.pipe.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _iteration_pipe__WEBPACK_IMPORTED_MODULE_13__["IterationPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]
            ],
            providers: [_firebase_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var FirebaseService = /** @class */ (function () {
    function FirebaseService(fireAuth, firestore, firestorage) {
        this.fireAuth = fireAuth;
        this.firestore = firestore;
        this.firestorage = firestorage;
        this.loginListener();
    }
    FirebaseService.prototype.loginListener = function () {
        // this.fireAuth.onAuthStateChanged((user) => {
        //     this.signedInState.next(user);
        // });
    };
    FirebaseService.prototype.login = function (email, password) {
        // this.fireAuth.signInWithEmailAndPassword(email, password)
        // .then(result => {
        //   console.log(result);
        // });
    };
    FirebaseService.prototype.uploadImageandGetURL = function (image) {
        // this.firestorage.
    };
    FirebaseService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            var categories = [];
            _this.firestore.collection('/categories').get().subscribe(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, ' => ', doc.data());
                    categories.push({
                        id: doc.id,
                        category_name: doc.data().category_name,
                        category_order: doc.data().category_order,
                        count: 0
                    });
                });
                fulfill(categories);
            });
        });
    };
    FirebaseService.prototype.addToWork = function (art, cover, images) {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            var data = art;
            console.log(art);
            var ref = _this.firestore.collection('/categories').doc(art.category).ref;
            data.category = ref;
            _this.firestore.collection('/works').add(data).then(function (res) {
                console.log(res);
                var storageref = _this.firestorage.ref(res.id);
                storageref.put(cover)
                    .then(function (snapshot) {
                    console.log(snapshot);
                    snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        console.log('File available at', downloadURL);
                        _this.firestore.collection('/works').doc(res.id).set({ cover_image: downloadURL }, { merge: true })
                            .then(function (resp) {
                            fulfill();
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
                images.forEach(function (image, index) {
                    var storageref = _this.firestorage.ref(res.id + '_' + index);
                    storageref.put(image)
                        .then(function (snapshot) {
                        console.log(snapshot);
                        snapshot.ref.getDownloadURL().then(function (downloadURL) {
                            console.log('File available at', downloadURL);
                            var obj = {};
                            obj["image_" + index] = downloadURL;
                            _this.firestore.collection('/works').doc(res.id).set(obj, { merge: true })
                                .then(function (resp) {
                                fulfill();
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/iteration.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/iteration.pipe.ts ***!
  \***********************************/
/*! exports provided: IterationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationPipe", function() { return IterationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IterationPipe = /** @class */ (function () {
    function IterationPipe() {
    }
    IterationPipe.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    IterationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'iteration'
        })
    ], IterationPipe);
    return IterationPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyByfKZNiGTz2PFwq5Sp2AMWsruJ_CW51rI",
        authDomain: "sarfaraz-3eff1.firebaseapp.com",
        databaseURL: "https://sarfaraz-3eff1.firebaseio.com",
        projectId: "sarfaraz-3eff1",
        storageBucket: "sarfaraz-3eff1.appspot.com",
        messagingSenderId: "195104991448"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikhilmathew/Code/sarfaraz_backend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map