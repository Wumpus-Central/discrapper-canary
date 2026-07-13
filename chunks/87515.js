e.d(t, { F: () => f });
var n = e(707040),
    o = e.n(n),
    u = e(64700),
    a = e(218436);
function i(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
    return n;
}
function f(r, t, e) {
    var n,
        f =
            (function (r) {
                if (Array.isArray(r)) return r;
            })(
                (n = (0, u.useState)(function () {
                    return t(r);
                })),
            ) ||
            (function (r) {
                var t,
                    e,
                    n = null == r ? null : ("u" > typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
                if (null != n) {
                    var o = [],
                        u = !0,
                        a = !1;
                    try {
                        for (n = n.call(r); !(u = (t = n.next()).done) && (o.push(t.value), 2 !== o.length); u = !0);
                    } catch (r) {
                        (a = !0), (e = r);
                    } finally {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (a) throw e;
                        }
                    }
                    return o;
                }
            })(n) ||
            (function (r) {
                if (r) {
                    if ("string" == typeof r) return i(r, 2);
                    var t = Object.prototype.toString.call(r).slice(8, -1);
                    if (("Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(r);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(r, 2);
                }
            })(n) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        l = f[0],
        c = f[1],
        s = (0, u.useCallback)(
            function () {
                var n = t(r);
                !o()(l, n) && (c(n), e && e());
            },
            [l, r, e],
        );
    return (0, a.E)(s), [l, s];
}
