r.d(t, { Z: () => i });
var a = r(619825);
function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function o(e, t, r) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
    if ("Object" === e) {
        var s = Object.getOwnPropertyNames(t);
        r && s.sort(!0 === r ? void 0 : r),
            (i = {
                entries: (s = s.slice(a, o + 1)).map(function (e) {
                    return {
                        key: e,
                        value: t[e],
                    };
                }),
            });
    } else if ("Array" === e)
        i = {
            entries: t.slice(a, o + 1).map(function (e, t) {
                return {
                    key: t + a,
                    value: e,
                };
            }),
        };
    else {
        var i,
            c,
            u = 0,
            l = [],
            f = !0,
            b = "function" == typeof t.set,
            d = (function (e, t) {
                var r = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!r) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return n(e, void 0);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === r && e.constructor && (r = e.constructor.name),
                                    "Map" === r || "Set" === r)
                                )
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return n(e, t);
                            }
                        })(e))
                    ) {
                        r && (e = r);
                        var a = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return a >= e.length
                                    ? { done: !0 }
                                    : {
                                          done: !1,
                                          value: e[a++],
                                      };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var s,
                    i = !0,
                    c = !1;
                return {
                    s: function () {
                        r = r.call(e);
                    },
                    n: function () {
                        var e = r.next();
                        return (i = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (s = e);
                    },
                    f: function () {
                        try {
                            i || null == r.return || r.return();
                        } finally {
                            if (c) throw s;
                        }
                    },
                };
            })(t);
        try {
            for (d.s(); !(c = d.n()).done; ) {
                var h = c.value;
                if (u > o) {
                    f = !1;
                    break;
                }
                a <= u &&
                    (b && Array.isArray(h)
                        ? "string" == typeof h[0] || "number" == typeof h[0]
                            ? l.push({
                                  key: h[0],
                                  value: h[1],
                              })
                            : l.push({
                                  key: "[entry ".concat(u, "]"),
                                  value: {
                                      "[key]": h[0],
                                      "[value]": h[1],
                                  },
                              })
                        : l.push({
                              key: u,
                              value: h,
                          })),
                    u++;
            }
        } catch (e) {
            d.e(e);
        } finally {
            d.f();
        }
        i = {
            hasMore: !f,
            entries: l,
        };
    }
    return i;
}
function s(e, t, r) {
    for (var a = []; t - e > r * r; ) r *= r;
    for (var n = e; n <= t; n += r)
        a.push({
            from: n,
            to: Math.min(t, n + r - 1),
        });
    return a;
}
function i(e, t, r, n) {
    var i,
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
        l = o.bind(null, e, t, r);
    if (!n) return l().entries;
    var f = u < 1 / 0,
        b = Math.min(u - c, "Object" === e ? Object.keys(t).length : "Array" === e ? t.length : 1 / 0);
    if ("Iterable" !== e) {
        if (b <= n || n < 7) return l(c, u).entries;
    } else if (b <= n && !f) return l(c, u).entries;
    if ("Iterable" === e) {
        var d = l(c, c + n - 1),
            h = d.hasMore,
            p = d.entries;
        i = h ? [].concat((0, a.Z)(p), (0, a.Z)(s(c + n, c + 2 * n - 1, n))) : p;
    } else
        i = f
            ? s(c, u, n)
            : [].concat((0, a.Z)(l(0, n - 5).entries), (0, a.Z)(s(n - 4, b - 5, n)), (0, a.Z)(l(b - 4, b - 1).entries));
    return i;
}
