"use strict";
var i = n(473560),
    r = n(969001),
    s = i.hasArrayLengthDefineBug(),
    a = s && n(677480),
    o = n(906046)("Object.prototype.propertyIsEnumerable");
e.exports = function (e, t, n, i, l, u) {
    if (!r) {
        if (!e(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || (l in i && o(i, l) !== !!u["[[Enumerable]]"]))
            return !1;
        var c = u["[[Value]]"];
        return (i[l] = c), t(i[l], c);
    }
    return s && "length" === l && "[[Value]]" in u && a(i) && i.length !== u["[[Value]]"]
        ? ((i.length = u["[[Value]]"]), i.length === u["[[Value]]"])
        : (r(i, l, n(u)), !0);
};
