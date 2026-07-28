"use strict";
r.d(t, { F: () => u });
var n = r(707040),
    i = r.n(n),
    o = r(582128),
    a = r(914707);
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function u(e, t, r) {
    var n,
        u =
            (function (e) {
                if (Array.isArray(e)) return e;
            })(
                (n = (0, o.useState)(function () {
                    return t(e);
                })),
            ) ||
            (function (e) {
                var t,
                    r,
                    n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var i = [],
                        o = !0,
                        a = !1;
                    try {
                        for (n = n.call(e); !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length); o = !0);
                    } catch (e) {
                        (a = !0), (r = e);
                    } finally {
                        try {
                            o || null == n.return || n.return();
                        } finally {
                            if (a) throw r;
                        }
                    }
                    return i;
                }
            })(n) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return s(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, 2);
                }
            })(n) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        c = u[0],
        l = u[1],
        d = (0, o.useCallback)(
            function () {
                var n = t(e);
                !i()(c, n) && (l(n), r && r());
            },
            [c, e, r],
        );
    return (0, a.E)(d), [c, d];
}
