var n = r(473560),
    i = r(969001),
    o = n.hasArrayLengthDefineBug(),
    a = o && r(677480),
    s = r(906046)("Object.prototype.propertyIsEnumerable");
e.exports = function (e, t, r, n, l, u) {
    if (!i) {
        if (!e(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || (l in n && s(n, l) !== !!u["[[Enumerable]]"]))
            return !1;
        var c = u["[[Value]]"];
        return (n[l] = c), t(n[l], c);
    }
    return o && "length" === l && "[[Value]]" in u && a(n) && n.length !== u["[[Value]]"]
        ? ((n.length = u["[[Value]]"]), n.length === u["[[Value]]"])
        : (i(n, l, r(u)), !0);
};
