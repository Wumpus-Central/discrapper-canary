var r = n(98405),
    i = n(507604),
    a = n(127849),
    o = n(46015),
    s = n(77025),
    l = n(880181),
    c = n(568033),
    u = n(382698),
    d = n(573078),
    _ = n(190289),
    f = a.Symbol,
    p = f && f.prototype;
if (i && l(f) && (!('description' in p) || void 0 !== f().description)) {
    var h = {},
        m = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                t = c(p, this) ? new f(e) : void 0 === e ? f() : f(e);
            return '' === e && (h[t] = !0), t;
        };
    _(m, f), (m.prototype = p), (p.constructor = m);
    var g = 'Symbol(description detection)' === String(f('description detection')),
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
