'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/**
 * Defines the useDebounce hook
 */
var useDebounce = function () {
    /**
     * Initializes the interval
     */
    var _a = react.useState(), intervalId = _a[0], setIntervalId = _a[1];
    return function (func, wait) {
        if (intervalId)
            clearTimeout(intervalId);
        setIntervalId(setTimeout(func, wait));
    };
};

exports.useDebounce = useDebounce;
//# sourceMappingURL=index.js.map
