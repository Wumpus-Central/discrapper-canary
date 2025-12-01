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
    p = a.Symbol,
    _ = p && p.prototype;
if (i && l(p) && (!("description" in _) || void 0 !== p().description)) {
    var m = {},
        h = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                t = c(_, this) ? new p(e) : void 0 === e ? p() : p(e);
            return "" === e && (m[t] = !0), t;
        };
    f(h, p), (h.prototype = _), (_.constructor = h);
    var g = "Symbol(description detection)" === String(p("description detection")),
        E = o(_.valueOf),
        b = o(_.toString),
        y = /^Symbol\((.*)\)[^)]+$/,
        O = o("".replace),
        v = o("".slice);
    d(_, "description", {
        configurable: !0,
        get: function () {
            var e = E(this);
            if (s(m, e)) return "";
            var t = b(e),
                n = g ? v(t, 7, -1) : O(t, y, "$1");
            return "" === n ? void 0 : n;
        },
    }),
        r(
            {
                global: !0,
                constructor: !0,
                forced: !0,
            },
            { Symbol: h },
        );
}
