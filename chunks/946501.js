"use strict";
var t = Object.prototype.toString,
    r = Math.max,
    n = function (e, t) {
        for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
        for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
        return r;
    },
    o = function (e, t) {
        for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
        return r;
    },
    i = function (e, t) {
        for (var r = "", n = 0; n < e.length; n += 1) (r += e[n]), n + 1 < e.length && (r += t);
        return r;
    };
e.exports = function (e) {
    var a,
        s = this;
    if ("function" != typeof s || "[object Function]" !== t.apply(s))
        throw TypeError("Function.prototype.bind called on incompatible " + s);
    for (var l = o(arguments, 1), u = r(0, s.length - l.length), c = [], f = 0; f < u; f++) c[f] = "$" + f;
    if (
        ((a = Function(
            "binder",
            "return function (" + i(c, ",") + "){ return binder.apply(this,arguments); }",
        )(function () {
            if (this instanceof a) {
                var t = s.apply(this, n(l, arguments));
                return Object(t) === t ? t : this;
            }
            return s.apply(e, n(l, arguments));
        })),
        s.prototype)
    ) {
        var p = function () {};
        (p.prototype = s.prototype), (a.prototype = new p()), (p.prototype = null);
    }
    return a;
};
