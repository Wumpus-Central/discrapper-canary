"use strict";
var n = r(267768),
    o = r(870064),
    i = r(741623),
    a = r(14665),
    s = r(899204),
    l = r(904283),
    u = r(732937),
    c = r(228047),
    f = r(94535),
    p = r(444139),
    d = r(227106);
e.exports = function (e, t, r) {
    if (!d(e)) throw new i("Assertion failed: O must be an Object");
    if (!u(t)) throw new i("Assertion failed: P must be a Property Key");
    if (!a(r)) throw new i("Assertion failed: Desc must be a Property Descriptor");
    if (!n) {
        if (s(r)) throw new o("This environment does not support accessor property descriptors.");
        var h = !(t in e) && r["[[Writable]]"] && r["[[Enumerable]]"] && r["[[Configurable]]"] && "[[Value]]" in r,
            m =
                t in e &&
                (!("[[Configurable]]" in r) || r["[[Configurable]]"]) &&
                (!("[[Enumerable]]" in r) || r["[[Enumerable]]"]) &&
                (!("[[Writable]]" in r) || r["[[Writable]]"]) &&
                "[[Value]]" in r;
        if (h || m) return (e[t] = r["[[Value]]"]), f(e[t], r["[[Value]]"]);
        throw new o(
            "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
        );
    }
    var v = n(e, t),
        y = v && c(v),
        g = l(e);
    return p(e, t, g, r, y);
};
