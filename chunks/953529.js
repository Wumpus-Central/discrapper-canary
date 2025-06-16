var r = n(98405),
    i = n(507604),
    a = n(127849),
    o = n(46015),
    s = n(77025),
    l = n(880181),
    c = n(568033),
    u = n(382698),
    d = n(573078),
    f = n(190289),
    _ = a.Symbol,
    p = _ && _.prototype;
if (i && l(_) && (!('description' in p) || void 0 !== _().description)) {
    var h = {},
        m = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                t = c(p, this) ? new _(e) : void 0 === e ? _() : _(e);
            return '' === e && (h[t] = !0), t;
        };
    f(m, _), (m.prototype = p), (p.constructor = m);
    var g = 'Symbol(description detection)' === String(_('description detection')),
        E = o(p.valueOf),
        b = o(p.toString),
        y = /^Symbol\((.*)\)[^)]+$/,
        O = o(''.replace),
        v = o(''.slice);
    d(p, 'description', {
        configurable: !0,
        get: function () {
            var e = E(this);
            if (s(h, e)) return '';
            var t = b(e),
                n = g ? v(t, 7, -1) : O(t, y, '$1');
            return '' === n ? void 0 : n;
        }
    }),
        r(
            {
                global: !0,
                constructor: !0,
                forced: !0
            },
            { Symbol: m }
        );
}
