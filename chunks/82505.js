"use strict";
n.d(t, { z: () => d });
var r = n(12543),
    i = n(438767),
    s = n(384623);
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
function c(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var d = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (d.prototype = Object.create(e && e.prototype, { constructor: { value: d, writable: !0, configurable: !0 } })),
        e && o(d, e);
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
                    i = u(d);
                return (
                    (r = t ? Reflect.construct(i, arguments, u(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === a(n) || "function" == typeof n) ? n : l(e)
                );
            });
    function d() {
        var e;
        if (!(this instanceof d)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            c(l((e = r.call.apply(r, [this].concat(n)))), "priority", 110),
            c(l(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n) {
                    var r = function (e) {
                        return e - 1;
                    };
                    switch (t) {
                        case "L":
                            return (0, s.IS)((0, s.P2)(i.h.month, e), r);
                        case "LL":
                            return (0, s.IS)((0, s.ym)(2, e), r);
                        case "Lo":
                            return (0, s.IS)(n.ordinalNumber(e, { unit: "month" }), r);
                        case "LLL":
                            return (
                                n.month(e, { width: "abbreviated", context: "standalone" }) ||
                                n.month(e, { width: "narrow", context: "standalone" })
                            );
                        case "LLLLL":
                            return n.month(e, { width: "narrow", context: "standalone" });
                        default:
                            return (
                                n.month(e, { width: "wide", context: "standalone" }) ||
                                n.month(e, { width: "abbreviated", context: "standalone" }) ||
                                n.month(e, { width: "narrow", context: "standalone" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 11;
                },
            },
            {
                key: "set",
                value: function (e, t, n) {
                    return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
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
        })(d.prototype, n),
        d
    );
})(r.i);
