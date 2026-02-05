"use strict";
var t = "Function.prototype.bind called on incompatible ",
    n = Object.prototype.toString,
    r = Math.max,
    i = "[object Function]",
    a = function (e, t) {
        for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
        for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
        return n;
    },
    s = function (e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
        return n;
    },
    o = function (e, t) {
        for (var n = "", r = 0; r < e.length; r += 1) (n += e[r]), r + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var l,
        u = this;
    if ("function" != typeof u || n.apply(u) !== i) throw TypeError(t + u);
    for (
        var c = s(arguments, 1),
            d = function () {
                if (this instanceof l) {
                    var t = u.apply(this, a(c, arguments));
                    return Object(t) === t ? t : this;
                }
                return u.apply(e, a(c, arguments));
            },
            _ = r(0, u.length - c.length),
            f = [],
            p = 0;
        p < _;
        p++
    )
        f[p] = "$" + p;
    if (
        ((l = Function("binder", "return function (" + o(f, ",") + "){ return binder.apply(this,arguments); }")(d)),
        u.prototype)
    ) {
        var h = function () {};
        (h.prototype = u.prototype), (l.prototype = new h()), (h.prototype = null);
    }
    return l;
};
