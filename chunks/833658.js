"use strict";
var r = n(267768),
    i = n(870064),
    a = n(741623),
    s = n(14665),
    o = n(899204),
    l = n(904283),
    u = n(732937),
    c = n(228047),
    d = n(94535),
    _ = n(444139),
    f = n(227106);
e.exports = function (e, t, n) {
    if (!f(e)) throw new a("Assertion failed: O must be an Object");
    if (!u(t)) throw new a("Assertion failed: P must be a Property Key");
    if (!s(n)) throw new a("Assertion failed: Desc must be a Property Descriptor");
    if (!r) {
        if (o(n)) throw new i("This environment does not support accessor property descriptors.");
        var p = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
            h =
                t in e &&
                (!("[[Configurable]]" in n) || n["[[Configurable]]"]) &&
                (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) &&
                (!("[[Writable]]" in n) || n["[[Writable]]"]) &&
                "[[Value]]" in n;
        if (p || h) return (e[t] = n["[[Value]]"]), d(e[t], n["[[Value]]"]);
        throw new i(
            "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
        );
    }
    var m = r(e, t),
        g = m && c(m),
        E = l(e);
    return _(e, t, E, n, g);
};
