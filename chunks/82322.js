"use strict";
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
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
            i(e, null, [
                {
                    key: "create",
                    value: function (e) {
                        if (e.outputRange && "string" == typeof e.outputRange[0]) {
                            var t, n, i, s, _;
                            return (
                                a((n = (t = e).outputRange).length >= 2, "Bad output range"),
                                (function (e) {
                                    for (var t = e[0].replace(d, ""), n = 1; n < e.length; ++n)
                                        a(t === e[n].replace(d, ""), "invalid pattern " + e[0] + " and " + e[n]);
                                })((n = n.map(u))),
                                (i = n[0].match(d).map(function () {
                                    return [];
                                })),
                                n.forEach(function (e) {
                                    e.match(d).forEach(function (e, t) {
                                        i[t].push(+e);
                                    });
                                }),
                                (s = n[0].match(d).map(function (e, n) {
                                    return l.create(r({}, t, { outputRange: i[n] }));
                                })),
                                (_ = /^rgb/.test(n[0])),
                                function (e) {
                                    var t = 0;
                                    return n[0].replace(d, function () {
                                        var n = s[t++](e);
                                        return String(_ && t < 4 ? Math.round(n) : n);
                                    });
                                }
                            );
                        }
                        var f = e.outputRange;
                        c("outputRange", f);
                        var E = e.inputRange;
                        c("inputRange", E),
                            (function (e) {
                                a(e.length >= 2, "inputRange must have at least 2 elements");
                                for (var t = 1; t < e.length; ++t)
                                    a(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e);
                            })(E),
                            a(
                                E.length === f.length,
                                "inputRange (" +
                                    E.length +
                                    ") and outputRange (" +
                                    f.length +
                                    ") must have the same length",
                            );
                        var h = e.easing || o,
                            p = "extend";
                        void 0 !== e.extrapolateLeft
                            ? (p = e.extrapolateLeft)
                            : void 0 !== e.extrapolate && (p = e.extrapolate);
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
                                })(e, E);
                                return (function (e, t, n, r, i, s, a, o) {
                                    var l = e;
                                    if (l < t)
                                        if ("identity" === a) return l;
                                        else "clamp" === a && (l = t);
                                    if (l > n)
                                        if ("identity" === o) return l;
                                        else "clamp" === o && (l = n);
                                    return r === i
                                        ? r
                                        : t === n
                                          ? e <= t
                                              ? r
                                              : i
                                          : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)),
                                            (l = s(l)),
                                            r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r),
                                            l);
                                })(e, E[t], E[t + 1], f[t], f[t + 1], h, p, m);
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
var d = /[0-9\.-]+/g;
function c(e, t) {
    a(t.length >= 2, e + " must have at least 2 elements"),
        a(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t);
}
e.exports = l;
