"use strict";
var i = n(257943),
    r = n(503628),
    s = n(447280);
e.exports =
    !i &&
    !r(function () {
        return (
            7 !==
            Object.defineProperty(s("div"), "a", {
                get: function () {
                    return 7;
                },
            }).a
        );
    });
