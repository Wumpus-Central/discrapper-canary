"use strict";
n.d(t, { F: () => l });
var i = n(707040),
    r = n.n(i),
    s = n(64700),
    a = n(218436);
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function l(e, t, n) {
    var i,
        l =
            (function (e) {
                if (Array.isArray(e)) return e;
            })(
                (i = (0, s.useState)(function () {
                    return t(e);
                })),
            ) ||
            (function (e) {
                var t,
                    n,
                    i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != i) {
                    var r = [],
                        s = !0,
                        a = !1;
                    try {
                        for (i = i.call(e); !(s = (t = i.next()).done) && (r.push(t.value), 2 !== r.length); s = !0);
                    } catch (e) {
                        (a = !0), (n = e);
                    } finally {
                        try {
                            s || null == i.return || i.return();
                        } finally {
                            if (a) throw n;
                        }
                    }
                    return r;
                }
            })(i) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return o(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, 2);
                }
            })(i) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        u = l[0],
        c = l[1],
        d = (0, s.useCallback)(
            function () {
                var i = t(e);
                !r()(u, i) && (c(i), n && n());
            },
            [u, e, n],
        );
    return (0, a.E)(d), [u, d];
}
