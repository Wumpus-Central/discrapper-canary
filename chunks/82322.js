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
    })();
function a(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
var s = n(297920),
    o = n(284009),
    l = function (e) {
        return e;
    },
    u = (function () {
        function e() {
            a(this, e);
        }
        return (
            i(e, null, [
                {
                    key: "create",
                    value: function (e) {
                        if (e.outputRange && "string" == typeof e.outputRange[0]) return f(e);
                        var t = e.outputRange;
                        g("outputRange", t);
                        var n = e.inputRange;
                        g("inputRange", n),
                            m(n),
                            o(
                                n.length === t.length,
                                "inputRange (" +
                                    n.length +
                                    ") and outputRange (" +
                                    t.length +
                                    ") must have the same length",
                            );
                        var r = e.easing || l,
                            i = "extend";
                        void 0 !== e.extrapolateLeft
                            ? (i = e.extrapolateLeft)
                            : void 0 !== e.extrapolate && (i = e.extrapolate);
                        var a = "extend";
                        return (
                            void 0 !== e.extrapolateRight
                                ? (a = e.extrapolateRight)
                                : void 0 !== e.extrapolate && (a = e.extrapolate),
                            function (e) {
                                o("number" == typeof e, "Cannot interpolation an input which is not a number");
                                var s = h(e, n);
                                return c(e, n[s], n[s + 1], t[s], t[s + 1], r, i, a);
                            }
                        );
                    },
                },
            ]),
            e
        );
    })();
function c(e, t, n, r, i, a, s, o) {
    var l = e;
    if (l < t)
        if ("identity" === s) return l;
        else "clamp" === s && (l = t);
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
            (l = a(l)),
            r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r),
            l);
}
function d(e) {
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
var _ = /[0-9\.-]+/g;
function f(e) {
    var t = e.outputRange;
    o(t.length >= 2, "Bad output range"), p((t = t.map(d)));
    var n = t[0].match(_).map(function () {
        return [];
    });
    t.forEach(function (e) {
        e.match(_).forEach(function (e, t) {
            n[t].push(+e);
        });
    });
    var i = t[0].match(_).map(function (t, i) {
            return u.create(r({}, e, { outputRange: n[i] }));
        }),
        a = /^rgb/.test(t[0]);
    return function (e) {
        var n = 0;
        return t[0].replace(_, function () {
            var t = i[n++](e);
            return String(a && n < 4 ? Math.round(t) : t);
        });
    };
}
function p(e) {
    for (var t = e[0].replace(_, ""), n = 1; n < e.length; ++n)
        o(t === e[n].replace(_, ""), "invalid pattern " + e[0] + " and " + e[n]);
}
function h(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
}
function m(e) {
    o(e.length >= 2, "inputRange must have at least 2 elements");
    for (var t = 1; t < e.length; ++t) o(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e);
}
function g(e, t) {
    o(t.length >= 2, e + " must have at least 2 elements"),
        o(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t);
}
e.exports = u;
