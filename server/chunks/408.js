"use strict";
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const config = {
    logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        style: {
            fontSize: 24,
            fontWeight: 600
        },
        children: "Atros"
    }),
    project: {
        link: "https://github.com/kodkafa/atros/"
    },
    docsRepositoryBase: "https://github.com/kodkafa/atros",
    footer: {
        text: "Atros - Automation for the Rest of Us"
    },
    useNextSeoProps () {
        const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s"
            };
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ })

};
;