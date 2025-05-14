var e = r(98405),
    o = r(507604),
    i = r(127849),
    u = r(46015),
    c = r(77025),
    a = r(880181),
    f = r(568033),
    s = r(382698),
    l = r(573078),
    p = r(190289),
    d = i.Symbol,
    _ = d && d.prototype;
if (o && a(d) && (!('description' in _) || void 0 !== d().description)) {
    var h = {},
        y = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : s(arguments[0]),
                n = f(_, this) ? new d(t) : void 0 === t ? d() : d(t);
            return '' === t && (h[n] = !0), n;
        };
    p(y, d), (y.prototype = _), (_.constructor = y);
    var b = 'Symbol(description detection)' === String(d('description detection')),
        g = u(_.valueOf),
        v = u(_.toString),
        w = /^Symbol\((.*)\)[^)]+$/,
        m = u(''.replace),
        x = u(''.slice);
    l(_, 'description', {
        configurable: !0,
        get: function () {
            var t = g(this);
            if (c(h, t)) return '';
            var n = v(t),
                r = b ? x(n, 7, -1) : m(n, w, '$1');
            return '' === r ? void 0 : r;
        }
    }),
        e(
            {
                global: !0,
                constructor: !0,
                forced: !0
            },
            { Symbol: y }
        );
}
