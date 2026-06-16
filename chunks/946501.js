"use strict";
var t = Object.prototype.toString,
    n = Math.max,
    i = function (e, t) {
        for (var n = [], i = 0; i < e.length; i += 1) n[i] = e[i];
        for (var r = 0; r < t.length; r += 1) n[r + e.length] = t[r];
        return n;
    },
    r = function (e, t) {
        for (var n = [], i = t || 0, r = 0; i < e.length; i += 1, r += 1) n[r] = e[i];
        return n;
    },
    s = function (e, t) {
        for (var n = "", i = 0; i < e.length; i += 1) (n += e[i]), i + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var a,
        o = this;
    if ("function" != typeof o || "[object Function]" !== t.apply(o))
        throw TypeError("Function.prototype.bind called on incompatible " + o);
    for (var l = r(arguments, 1), u = n(0, o.length - l.length), c = [], d = 0; d < u; d++) c[d] = "$" + d;
    if (
        ((a = Function(
            "binder",
            "return function (" + s(c, ",") + "){ return binder.apply(this,arguments); }",
        )(function () {
            if (this instanceof a) {
                var t = o.apply(this, i(l, arguments));
                return Object(t) === t ? t : this;
            }
            return o.apply(e, i(l, arguments));
        })),
        o.prototype)
    ) {
        var _ = function () {};
        (_.prototype = o.prototype), (a.prototype = new _()), (_.prototype = null);
    }
    return a;
};
