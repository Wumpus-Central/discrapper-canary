"use strict";
n.d(t, { j: () => a });
var i = n(218436),
    r = n(87515);
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function a(e, t, n) {
    var a, o, l, u, c, d;
    return (
        (a =
            e ||
            function () {
                return {};
            }),
        (o = function () {
            return n.reconnect();
        }),
        (c = (u =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((l = (0, r.F)(t, a, o))) ||
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
            })(l) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return s(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, 2);
                }
            })(l) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })())[0]),
        (d = u[1]),
        (0, i.E)(
            function () {
                var e = t.getHandlerId();
                if (null != e) return t.subscribeToStateChange(d, { handlerIds: [e] });
            },
            [t, d],
        ),
        c
    );
}
