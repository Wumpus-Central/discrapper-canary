"use strict";
var r = n(473560),
    i = n(969001),
    a = r.hasArrayLengthDefineBug(),
    s = a && n(677480),
    o = n(906046)("Object.prototype.propertyIsEnumerable");
e.exports = function (e, t, n, r, l, u) {
    if (!i) {
        if (!e(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || (l in r && o(r, l) !== !!u["[[Enumerable]]"]))
            return !1;
        var c = u["[[Value]]"];
        return (r[l] = c), t(r[l], c);
    }
    return a && "length" === l && "[[Value]]" in u && s(r) && r.length !== u["[[Value]]"]
        ? ((r.length = u["[[Value]]"]), r.length === u["[[Value]]"])
        : (i(r, l, n(u)), !0);
};
