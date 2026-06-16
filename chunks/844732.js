"use strict";
var r = n(486816),
    a = n(426261);
e.exports = !r(function () {
    var e = Error("a");
    return !("stack" in e) || (Object.defineProperty(e, "stack", a(1, 7)), 7 !== e.stack);
});
