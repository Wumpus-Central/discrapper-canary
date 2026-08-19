"use strict";
var n = r(741623),
    o = r(680135),
    i = r(227106),
    a = r(732937);
e.exports = function (e, t, r) {
    if (!i(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!a(t)) throw new n("Assertion failed: P is not a Property Key");
    if (!o(e, t, r)) throw new n("unable to create data property");
};
