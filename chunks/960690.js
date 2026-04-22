"use strict";
n.d(t, { g: () => c });
var r = n(12543),
    i = n(384623),
    s = n(54265);
function a(e) {
    return (a =
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
function o(e, t) {
    return (o =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function u(e) {
    return (u = Object.setPrototypeOf
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
var c = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (c.prototype = Object.create(e && e.prototype, { constructor: { value: c, writable: !0, configurable: !0 } })),
        e && o(c, e);
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
                    i = u(c);
                return (
                    (r = t ? Reflect.construct(i, arguments, u(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === a(n) || "function" == typeof n) ? n : l(e)
                );
            });
    function c() {
        var e;
        if (!(this instanceof c)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            d(l((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
            d(l(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n, r) {
                    var s = function (e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return ((e + r.weekStartsOn + 6) % 7) + t;
                    };
                    switch (t) {
                        case "c":
                        case "cc":
                            return (0, i.IS)((0, i.ym)(t.length, e), s);
                        case "co":
                            return (0, i.IS)(n.ordinalNumber(e, { unit: "day" }), s);
                        case "ccc":
                            return (
                                n.day(e, { width: "abbreviated", context: "standalone" }) ||
                                n.day(e, { width: "short", context: "standalone" }) ||
                                n.day(e, { width: "narrow", context: "standalone" })
                            );
                        case "ccccc":
                            return n.day(e, { width: "narrow", context: "standalone" });
                        case "cccccc":
                            return (
                                n.day(e, { width: "short", context: "standalone" }) ||
                                n.day(e, { width: "narrow", context: "standalone" })
                            );
                        default:
                            return (
                                n.day(e, { width: "wide", context: "standalone" }) ||
                                n.day(e, { width: "abbreviated", context: "standalone" }) ||
                                n.day(e, { width: "short", context: "standalone" }) ||
                                n.day(e, { width: "narrow", context: "standalone" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 6;
                },
            },
            {
                key: "set",
                value: function (e, t, n, r) {
                    return (e = (0, s.A)(e, n, r)).setUTCHours(0, 0, 0, 0), e;
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
        })(c.prototype, n),
        c
    );
})(r.i);
