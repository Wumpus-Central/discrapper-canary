t.d(n, { j: () => u });
var a = t(218436),
    r = t(87515);
function i(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
    return a;
}
function u(e, n, t) {
    var u, s, o, l, d, c;
    return (
        (u =
            e ||
            function () {
                return {};
            }),
        (s = function () {
            return t.reconnect();
        }),
        (d = (l =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((o = (0, r.F)(n, u, s))) ||
            (function (e) {
                var n,
                    t,
                    a = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != a) {
                    var r = [],
                        i = !0,
                        u = !1;
                    try {
                        for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), 2 !== r.length); i = !0);
                    } catch (e) {
                        (u = !0), (t = e);
                    } finally {
                        try {
                            i || null == a.return || a.return();
                        } finally {
                            if (u) throw t;
                        }
                    }
                    return r;
                }
            })(o) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return i(e, 2);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, 2);
                }
            })(o) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })())[0]),
        (c = l[1]),
        (0, a.E)(
            function () {
                var e = n.getHandlerId();
                if (null != e) return n.subscribeToStateChange(c, { handlerIds: [e] });
            },
            [n, c],
        ),
        d
    );
}
