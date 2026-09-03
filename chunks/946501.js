var t = Object.prototype.toString,
    r = Math.max,
    n = function (e, t) {
        for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
        for (var i = 0; i < t.length; i += 1) r[i + e.length] = t[i];
        return r;
    },
    i = function (e, t) {
        for (var r = [], n = t || 0, i = 0; n < e.length; n += 1, i += 1) r[i] = e[n];
        return r;
    },
    o = function (e, t) {
        for (var r = "", n = 0; n < e.length; n += 1) (r += e[n]), n + 1 < e.length && (r += t);
        return r;
    };
e.exports = function (e) {
    var a,
        s = this;
    if ("function" != typeof s || "[object Function]" !== t.apply(s))
        throw TypeError("Function.prototype.bind called on incompatible " + s);
    for (var l = i(arguments, 1), u = r(0, s.length - l.length), c = [], f = 0; f < u; f++) c[f] = "$" + f;
    if (
        ((a = Function(
            "binder",
            "return function (" + o(c, ",") + "){ return binder.apply(this,arguments); }",
        )(function () {
            if (this instanceof a) {
                var t = s.apply(this, n(l, arguments));
                return Object(t) === t ? t : this;
            }
            return s.apply(e, n(l, arguments));
        })),
        s.prototype)
    ) {
        var d = function () {};
        (d.prototype = s.prototype), (a.prototype = new d()), (d.prototype = null);
    }
    return a;
};
