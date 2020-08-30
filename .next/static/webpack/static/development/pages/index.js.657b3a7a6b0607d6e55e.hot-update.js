webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/meow/Documents/Github/Blockchain-Data-Labeling-/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import Link from '../routes'\n\n\n\nvar DataLabelingIndex = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(DataLabelingIndex, _Component);\n\n  var _super = _createSuper(DataLabelingIndex);\n\n  function DataLabelingIndex() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, DataLabelingIndex);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DataLabelingIndex, [{\n    key: \"renderDataLabelings\",\n    value: function renderDataLabelings() {\n      var _this = this;\n\n      var items = this.props.DataLabelings.map(function (DataLabeling) {\n        return {\n          header: DataLabeling,\n          description: __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n            href: {\n              pathname: \"/DataLabelings/[DataLabeling]\"\n            },\n            as: \"/DataLabelings/\".concat(DataLabeling),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 11\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 13\n            }\n          }, \"View DataLabeling\")),\n          fluid: true\n        };\n      });\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Card\"].Group, {\n        items: items,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 12\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }\n      }, __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }, \"Open DataLabelings\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        href: \"/campaigns/new\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        content: \"Create DataLabeling\",\n        icon: \"add circle\",\n        primary: true,\n        floated: \"right\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 15\n        }\n      }))), this.renderDataLabelings()));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var DataLabelings;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__[\"default\"].methods.getDeployedDataLabelings().call();\n\n              case 2:\n                DataLabelings = _context.sent;\n                return _context.abrupt(\"return\", {\n                  DataLabelings: DataLabelings\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return DataLabelingIndex;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLabelingIndex);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRhdGFMYWJlbGluZ0luZGV4IiwiaXRlbXMiLCJwcm9wcyIsIkRhdGFMYWJlbGluZ3MiLCJtYXAiLCJEYXRhTGFiZWxpbmciLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInBhdGhuYW1lIiwiZmx1aWQiLCJyZW5kZXJEYXRhTGFiZWxpbmdzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZERhdGFMYWJlbGluZ3MiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7SUFFTUEsaUI7Ozs7Ozs7Ozs7Ozs7MENBUWtCO0FBQUE7O0FBQ3BCLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLGFBQVgsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQUNDLFlBQUQsRUFBa0I7QUFDM0QsZUFBTztBQUNMQyxnQkFBTSxFQUFFRCxZQURIO0FBRUxFLHFCQUFXLEVBQ1QsTUFBQyxpREFBRDtBQUNFLGdCQUFJLEVBQUU7QUFBRUMsc0JBQVEsRUFBRTtBQUFaLGFBRFI7QUFFRSxjQUFFLDJCQUFvQkgsWUFBcEIsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRixDQUhHO0FBVUxJLGVBQUssRUFBRTtBQVZGLFNBQVA7QUFZRCxPQWJhLENBQWQ7QUFjQSxhQUFPLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFUixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFEO0FBQ0UsZUFBTyxFQUFDLHFCQURWO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxlQUFPLE1BSFQ7QUFJRSxlQUFPLEVBQUMsT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQUZGLEVBWUcsS0FBS1MsbUJBQUwsRUFaSCxDQURGLENBREY7QUFrQkQ7Ozs7Ozs7Ozs7O3VCQTNDNkJDLHlEQUFPLENBQUNDLE9BQVIsQ0FDekJDLHdCQUR5QixHQUV6QkMsSUFGeUIsRTs7O0FBQXRCWCw2QjtpREFHQztBQUFFQSwrQkFBYSxFQUFiQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTHFCWSwrQzs7QUFnRGpCZixnRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgRGF0YUxhYmVsaW5nSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IERhdGFMYWJlbGluZ3MgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcbiAgICAgIC5nZXREZXBsb3llZERhdGFMYWJlbGluZ3MoKVxuICAgICAgLmNhbGwoKTtcbiAgICByZXR1cm4geyBEYXRhTGFiZWxpbmdzIH07XG4gIH1cblxuICByZW5kZXJEYXRhTGFiZWxpbmdzKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5EYXRhTGFiZWxpbmdzLm1hcCgoRGF0YUxhYmVsaW5nKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IERhdGFMYWJlbGluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17eyBwYXRobmFtZTogXCIvRGF0YUxhYmVsaW5ncy9bRGF0YUxhYmVsaW5nXVwiIH19XG4gICAgICAgICAgICBhcz17YC9EYXRhTGFiZWxpbmdzLyR7RGF0YUxhYmVsaW5nfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+VmlldyBEYXRhTGFiZWxpbmc8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApLFxuICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk9wZW4gRGF0YUxhYmVsaW5nczwvaDM+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYW1wYWlnbnMvbmV3XCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgRGF0YUxhYmVsaW5nXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRhdGFMYWJlbGluZ3MoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMYWJlbGluZ0luZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})