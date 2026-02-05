"use strict";
var r = n(257943),
    i = n(503628),
    a = n(447280);
e.exports =
    !r &&
    !i(function () {
        return (
            7 !==
            Object.defineProperty(a("div"), "a", {
                get: function () {
                    return 7;
                },
            }).a
        );
    });
