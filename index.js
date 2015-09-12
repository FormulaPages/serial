(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.SERIAL = mod.exports;
    }
})(this, function (exports, module) {
    "use strict";

    module.exports = function (date) {
        return Math.ceil((date - d1900) / MilliSecondsInDay) + (date > -2203891200000) ? 2 : 1;
    };
});
