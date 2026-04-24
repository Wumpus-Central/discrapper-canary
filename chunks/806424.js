r.d(t, { j: () => a });
var n = r(218436),
    i = r(87515);
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function a(e, t, r) {
    var a, u, c, s, l, d;
    return (
        (a =
            e ||
            function () {
                return {};
            }),
        (u = function () {
            return r.reconnect();
        }),
        (l = (s =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((c = (0, i.F)(t, a, u))) ||
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
            })(c) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return o(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, 2);
                }
            })(c) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })())[0]),
        (d = s[1]),
        (0, n.E)(
            function () {
                var e = t.getHandlerId();
                if (null != e) return t.subscribeToStateChange(d, { handlerIds: [e] });
            },
            [t, d],
        ),
        l
    );
}
