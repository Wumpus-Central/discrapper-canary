"use strict";
n.d(t, { F: () => l });
var r = n(707040),
    i = n.n(r),
    s = n(64700),
    a = n(218436);
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function l(e, t, n) {
    var r,
        l =
            (function (e) {
                if (Array.isArray(e)) return e;
            })(
                (r = (0, s.useState)(function () {
                    return t(e);
                })),
            ) ||
            (function (e) {
                var t,
                    n,
                    r = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != r) {
                    var i = [],
                        s = !0,
                        a = !1;
                    try {
                        for (r = r.call(e); !(s = (t = r.next()).done) && (i.push(t.value), 2 !== i.length); s = !0);
                    } catch (e) {
                        (a = !0), (n = e);
                    } finally {
                        try {
                            s || null == r.return || r.return();
                        } finally {
                            if (a) throw n;
                        }
                    }
                    return i;
                }
            })(r) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return o(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, 2);
                }
            })(r) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        u = l[0],
        d = l[1],
        c = (0, s.useCallback)(
            function () {
                var r = t(e);
                !i()(u, r) && (d(r), n && n());
            },
            [u, e, n],
        );
    return (0, a.E)(c), [u, c];
}
