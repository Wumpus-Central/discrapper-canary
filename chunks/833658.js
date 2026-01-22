var r = n(267768),
    i = n(870064),
    a = n(741623),
    s = n(14665),
    o = n(899204),
    l = n(904283),
    c = n(732937),
    u = n(228047),
    d = n(94535),
    f = n(444139),
    p = n(227106);
e.exports = function (e, t, n) {
    if (!p(e)) throw new a("Assertion failed: O must be an Object");
    if (!c(t)) throw new a("Assertion failed: P must be a Property Key");
    if (!s(n)) throw new a("Assertion failed: Desc must be a Property Descriptor");
    if (!r) {
        if (o(n)) throw new i("This environment does not support accessor property descriptors.");
        var _ = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
            h =
                t in e &&
                (!("[[Configurable]]" in n) || n["[[Configurable]]"]) &&
                (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) &&
                (!("[[Writable]]" in n) || n["[[Writable]]"]) &&
                "[[Value]]" in n;
        if (_ || h) return (e[t] = n["[[Value]]"]), d(e[t], n["[[Value]]"]);
        throw new i(
            "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
        );
    }
    var m = r(e, t),
        g = m && u(m),
        E = l(e);
    return f(e, t, E, n, g);
};
