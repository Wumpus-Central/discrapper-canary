"use strict";
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
    s = n(297920),
    a = n(284009),
    o = function (e) {
        return e;
    },
    l = (function () {
        function e() {
            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        }
        return (
            r(e, null, [
                {
                    key: "create",
                    value: function (e) {
                        if (e.outputRange && "string" == typeof e.outputRange[0]) {
                            var t, n, r, s, _;
                            return (
                                a((n = (t = e).outputRange).length >= 2, "Bad output range"),
                                (function (e) {
                                    for (var t = e[0].replace(c, ""), n = 1; n < e.length; ++n)
                                        a(t === e[n].replace(c, ""), "invalid pattern " + e[0] + " and " + e[n]);
                                })((n = n.map(u))),
                                (r = n[0].match(c).map(function () {
                                    return [];
                                })),
                                n.forEach(function (e) {
                                    e.match(c).forEach(function (e, t) {
                                        r[t].push(+e);
                                    });
                                }),
                                (s = n[0].match(c).map(function (e, n) {
                                    return l.create(i({}, t, { outputRange: r[n] }));
                                })),
                                (_ = /^rgb/.test(n[0])),
                                function (e) {
                                    var t = 0;
                                    return n[0].replace(c, function () {
                                        var n = s[t++](e);
                                        return String(_ && t < 4 ? Math.round(n) : n);
                                    });
                                }
                            );
                        }
                        var h = e.outputRange;
                        d("outputRange", h);
                        var f = e.inputRange;
                        d("inputRange", f),
                            (function (e) {
                                a(e.length >= 2, "inputRange must have at least 2 elements");
                                for (var t = 1; t < e.length; ++t)
                                    a(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e);
                            })(f),
                            a(
                                f.length === h.length,
                                "inputRange (" +
                                    f.length +
                                    ") and outputRange (" +
                                    h.length +
                                    ") must have the same length",
                            );
                        var p = e.easing || o,
                            E = "extend";
                        void 0 !== e.extrapolateLeft
                            ? (E = e.extrapolateLeft)
                            : void 0 !== e.extrapolate && (E = e.extrapolate);
                        var m = "extend";
                        return (
                            void 0 !== e.extrapolateRight
                                ? (m = e.extrapolateRight)
                                : void 0 !== e.extrapolate && (m = e.extrapolate),
                            function (e) {
                                a("number" == typeof e, "Cannot interpolation an input which is not a number");
                                var t = (function (e, t) {
                                    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                                    return n - 1;
                                })(e, f);
                                return (function (e, t, n, i, r, s, a, o) {
                                    var l = e;
                                    if (l < t)
                                        if ("identity" === a) return l;
                                        else "clamp" === a && (l = t);
                                    if (l > n)
                                        if ("identity" === o) return l;
                                        else "clamp" === o && (l = n);
                                    return i === r
                                        ? i
                                        : t === n
                                          ? e <= t
                                              ? i
                                              : r
                                          : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)),
                                            (l = s(l)),
                                            i === -1 / 0 ? (l = -l) : r === 1 / 0 ? (l += i) : (l = l * (r - i) + i),
                                            l);
                                })(e, f[t], f[t + 1], h[t], h[t + 1], p, E, m);
                            }
                        );
                    },
                },
            ]),
            e
        );
    })();
function u(e) {
    var t = s(e);
    return null === t
        ? e
        : "rgba(" +
              ((0xff000000 & (t = t || 0)) >>> 24) +
              ", " +
              ((0xff0000 & t) >>> 16) +
              ", " +
              ((65280 & t) >>> 8) +
              ", " +
              (255 & t) / 255 +
              ")";
}
var c = /[0-9\.-]+/g;
function d(e, t) {
    a(t.length >= 2, e + " must have at least 2 elements"),
        a(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t);
}
e.exports = l;
