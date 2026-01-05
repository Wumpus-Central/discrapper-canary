e.d(n, { U: () => a });
var r = e(772567),
    o = e(440126);
function i(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
    return r;
}
function a(t, n, e) {
    var a,
        u =
            (function (t) {
                if (Array.isArray(t)) return t;
            })((a = (0, o.r)(t, n, e))) ||
            (function (t, n) {
                var e,
                    r,
                    o = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(t); !(a = (e = o.next()).done) && (i.push(e.value), i.length !== n); a = !0);
                    } catch (t) {
                        (u = !0), (r = t);
                    } finally {
                        try {
                            a || null == o.return || o.return();
                        } finally {
                            if (u) throw r;
                        }
                    }
                    return i;
                }
            })(a, 2) ||
            (function (t, n) {
                if (t) {
                    if ("string" == typeof t) return i(t, 2);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    if (("Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e))
                        return Array.from(t);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(t, n);
                }
            })(a, 2) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        c = u[0],
        l = u[1];
    return (
        (0, r.L)(
            function () {
                var n = t.getHandlerId();
                if (null != n) return t.subscribeToStateChange(l, { handlerIds: [n] });
            },
            [t, l],
        ),
        c
    );
}
