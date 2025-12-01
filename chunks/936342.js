var r = n(815329),
    i = n(243647),
    a = n(13863),
    o = n(699367),
    s = n(744145),
    l = n(425194),
    c = n(883367),
    u = n(711902),
    d = n(163567),
    f = n(414235),
    p = n(71256),
    _ = n(951575);
e.exports = function (e, t, n, m, h) {
    var g,
        E,
        b = p(e);
    if (void 0 !== e && !_(e)) throw new r("Assertion failed: O must be undefined or an Object");
    if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
    if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
    if (!o(m)) throw new r("Assertion failed: Desc must be a Property Descriptor");
    if (void 0 !== h && !o(h)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
    if (void 0 === h)
        return (
            !!n &&
            ("Undefined" === b ||
                (l(m)
                    ? i(c, f, s, e, t, m)
                    : i(c, f, s, e, t, {
                          "[[Configurable]]": !!m["[[Configurable]]"],
                          "[[Enumerable]]": !!m["[[Enumerable]]"],
                          "[[Value]]": m["[[Value]]"],
                          "[[Writable]]": !!m["[[Writable]]"],
                      })))
        );
    if (
        !a(
            {
                IsAccessorDescriptor: l,
                IsDataDescriptor: c,
            },
            h,
        )
    )
        throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!h["[[Configurable]]"]) {
        if (
            ("[[Configurable]]" in m && m["[[Configurable]]"]) ||
            ("[[Enumerable]]" in m && !f(m["[[Enumerable]]"], h["[[Enumerable]]"])) ||
            (!u(m) && !f(l(m), l(h)))
        )
            return !1;
        if (l(h)) {
            if (
                ("[[Get]]" in m && !f(m["[[Get]]"], h["[[Get]]"])) ||
                ("[[Set]]" in m && !f(m["[[Set]]"], h["[[Set]]"]))
            )
                return !1;
        } else if (
            !h["[[Writable]]"] &&
            (("[[Writable]]" in m && m["[[Writable]]"]) || ("[[Value]]" in m && !f(m["[[Value]]"], h["[[Value]]"])))
        )
            return !1;
    }
    return (
        "Undefined" === b ||
        (c(h) && l(m)
            ? i(c, f, s, e, t, {
                  "[[Configurable]]": !!(g = ("[[Configurable]]" in m ? m : h)["[[Configurable]]"]),
                  "[[Enumerable]]": !!(E = ("[[Enumerable]]" in m ? m : h)["[[Enumerable]]"]),
                  "[[Get]]": ("[[Get]]" in m ? m : h)["[[Get]]"],
                  "[[Set]]": ("[[Set]]" in m ? m : h)["[[Set]]"],
              })
            : l(h) && c(m)
              ? i(c, f, s, e, t, {
                    "[[Configurable]]": !!(g = ("[[Configurable]]" in m ? m : h)["[[Configurable]]"]),
                    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in m ? m : h)["[[Enumerable]]"]),
                    "[[Value]]": ("[[Value]]" in m ? m : h)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in m ? m : h)["[[Writable]]"],
                })
              : i(c, f, s, e, t, m))
    );
};
