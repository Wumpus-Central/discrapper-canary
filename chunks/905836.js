"use strict";
n.d(t, { s: () => _ });
var r = n(12543),
    i = n(384623),
    s = n(564804),
    a = n(327922);
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
    return (l =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function u(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function c(e) {
    return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function d(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var _ = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (_.prototype = Object.create(e && e.prototype, { constructor: { value: _, writable: !0, configurable: !0 } })),
        e && l(_, e);
    var t,
        n,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    n,
                    r,
                    i = c(_);
                return (
                    (r = t ? Reflect.construct(i, arguments, c(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === o(n) || "function" == typeof n) ? n : u(e)
                );
            });
    function _() {
        var e;
        if (!(this instanceof _)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            d(u((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
            d(u(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n) {
                    var r = function (e) {
                        return { year: e, isTwoDigitYear: "YY" === t };
                    };
                    switch (t) {
                        case "Y":
                            return (0, i.IS)((0, i.ym)(4, e), r);
                        case "Yo":
                            return (0, i.IS)(n.ordinalNumber(e, { unit: "year" }), r);
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
                    var o = (0, s.A)(e, r);
                    if (n.isTwoDigitYear) {
                        var l = (0, i.qB)(n.year, o);
                        return (
                            e.setUTCFullYear(l, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, a.A)(e, r)
                        );
                    }
                    var u = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
                    return e.setUTCFullYear(u, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, a.A)(e, r);
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(_.prototype, n),
        _
    );
})(r.i);
