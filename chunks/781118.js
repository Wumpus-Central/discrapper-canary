"use strict";
t(735692);
var a = t(781544),
    l = t(512008),
    o = t(715804),
    s = t(671226),
    i = Array.prototype,
    n = { DOMTokenList: !0, NodeList: !0 };
e.exports = function (e) {
    var r = e.keys;
    return e === i || (o(i, e) && r === i.keys) || l(n, a(e)) ? s : r;
};
