/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v24.1.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("../../context/context");
var beanStub_1 = require("../../context/beanStub");
var dom_1 = require("../../utils/dom");
var AgComponentUtils = /** @class */ (function (_super) {
    __extends(AgComponentUtils, _super);
    function AgComponentUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgComponentUtils.prototype.adaptFunction = function (propertyName, hardcodedJsFunction, componentFromFramework, source) {
        if (hardcodedJsFunction == null) {
            return {
                component: null,
                componentFromFramework: componentFromFramework,
                source: source,
                paramsFromSelector: null
            };
        }
        var metadata = this.componentMetadataProvider.retrieve(propertyName);
        if (metadata && metadata.functionAdapter) {
            return {
                componentFromFramework: componentFromFramework,
                component: metadata.functionAdapter(hardcodedJsFunction),
                source: source,
                paramsFromSelector: null
            };
        }
        return null;
    };
    AgComponentUtils.prototype.adaptCellRendererFunction = function (callback) {
        var Adapter = /** @class */ (function () {
            function Adapter() {
            }
            Adapter.prototype.refresh = function (params) {
                return false;
            };
            Adapter.prototype.getGui = function () {
                var callbackResult = callback(this.params);
                var type = typeof callbackResult;
                if (type === 'string' || type === 'number' || type === 'boolean') {
                    return dom_1.loadTemplate('<span>' + callbackResult + '</span>');
                }
                return callbackResult;
            };
            Adapter.prototype.init = function (params) {
                this.params = params;
            };
            return Adapter;
        }());
        return Adapter;
    };
    AgComponentUtils.prototype.doesImplementIComponent = function (candidate) {
        if (!candidate) {
            return false;
        }
        return candidate.prototype && 'getGui' in candidate.prototype;
    };
    __decorate([
        context_1.Autowired("componentMetadataProvider")
    ], AgComponentUtils.prototype, "componentMetadataProvider", void 0);
    AgComponentUtils = __decorate([
        context_1.Bean("agComponentUtils")
    ], AgComponentUtils);
    return AgComponentUtils;
}(beanStub_1.BeanStub));
exports.AgComponentUtils = AgComponentUtils;

//# sourceMappingURL=agComponentUtils.js.map
