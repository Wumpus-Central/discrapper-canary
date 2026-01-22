n.d(t, {
    s: () => b,
});
var r = n(12543),
    i = n(384623),
    a = n(564804),
    s = n(327922);

function o(e) {
    return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}

function l(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}

function c(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}

function u(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e;
}

function d(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        t && f(e, t);
}

function f(e, t) {
    return (f =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}

function p(e) {
    var t = m();
    return function () {
        var n,
            r = g(e);
        return (n = t ? Reflect.construct(r, arguments, g(this).constructor) : r.apply(this, arguments)), _(this, n);
    };
}

function _(e, t) {
    return t && ("object" === o(t) || "function" == typeof t) ? t : h(e);
}

function h(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function m() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}

function g(e) {
    return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}

function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var b = (function (e) {
    d(n, e);
    var t = p(n);

    function n() {
        var e;
        l(this, n);
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return (
            E(h((e = t.call.apply(t, [this].concat(i)))), "priority", 130),
            E(h(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]),
            e
        );
    }
    return (
        u(n, [
            {
                key: "parse",
                value: function (e, t, n) {
                    var r = function (e) {
                        return {
                            year: e,
                            isTwoDigitYear: "YY" === t,
                        };
                    };
                    switch (t) {
                        case "Y":
                            return (0, i.IS)((0, i.ym)(4, e), r);
                        case "Yo":
                            return (0, i.IS)(
                                n.ordinalNumber(e, {
                                    unit: "year",
                                }),
                                r,
                            );
                        default:
                            return (0, i.IS)((0, i.ym)(t.length, e), r);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t.isTwoDigitYear || t.year > 0;
                },
            },
            {
                key: "set",
                value: function (e, t, n, r) {
                    var o = (0, a.A)(e, r);
                    if (n.isTwoDigitYear) {
                        var l = (0, i.qB)(n.year, o);
                        return (
                            e.setUTCFullYear(l, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.A)(e, r)
                        );
                    }
                    var c = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
                    return e.setUTCFullYear(c, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.A)(e, r);
                },
            },
        ]),
        n
    );
})(r.i);
