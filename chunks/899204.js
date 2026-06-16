"use strict";
var i = n(741623),
    r = n(353841),
    s = n(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!s(e)) throw new i("Assertion failed: `Desc` must be a Property Descriptor");
    return !!r(e, "[[Get]]") || !!r(e, "[[Set]]");
};
