var n = r(98405),
    i = r(507604),
    s = r(127849),
    a = r(46015),
    o = r(77025),
    u = r(880181),
    h = r(568033),
    c = r(382698),
    f = r(573078),
    l = r(190289),
    p = s.Symbol,
    v = p && p.prototype;
if (i && u(p) && (!('description' in v) || void 0 !== p().description)) {
    var g = {},
        d = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : c(arguments[0]),
                e = h(v, this) ? new p(t) : void 0 === t ? p() : p(t);
            return '' === t && (g[e] = !0), e;
        };
    l(d, p), (d.prototype = v), (v.constructor = d);
    var m = 'Symbol(description detection)' === String(p('description detection')),
        y = a(v.valueOf),
        b = a(v.toString),
        w = /^Symbol\((.*)\)[^)]+$/,
        x = a(''.replace),
        S = a(''.slice);
    f(v, 'description', {
        configurable: !0,
        get: function () {
            var t = y(this);
            if (o(g, t)) return '';
            var e = b(t),
                r = m ? S(e, 7, -1) : x(e, w, '$1');
            return '' === r ? void 0 : r;
        }
    }),
        n(
            {
                global: !0,
                constructor: !0,
                forced: !0
            },
            { Symbol: d }
        );
}
