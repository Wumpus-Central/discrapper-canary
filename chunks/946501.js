"use strict";
var t = Object.prototype.toString,
    n = Math.max,
    r = function (e, t) {
        for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
        for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
        return n;
    },
    i = function (e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
        return n;
    },
    s = function (e, t) {
        for (var n = "", r = 0; r < e.length; r += 1) (n += e[r]), r + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var a,
        o = this;
    if ("function" != typeof o || "[object Function]" !== t.apply(o))
        throw TypeError("Function.prototype.bind called on incompatible " + o);
    for (var l = i(arguments, 1), u = n(0, o.length - l.length), d = [], c = 0; c < u; c++) d[c] = "$" + c;
    if (
        ((a = Function(
            "binder",
            "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }",
        )(function () {
            if (this instanceof a) {
                var t = o.apply(this, r(l, arguments));
                return Object(t) === t ? t : this;
            }
            return o.apply(e, r(l, arguments));
        })),
        o.prototype)
    ) {
        var _ = function () {};
        (_.prototype = o.prototype), (a.prototype = new _()), (_.prototype = null);
    }
    return a;
};
