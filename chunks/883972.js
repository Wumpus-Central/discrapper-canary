"use strict";
var i,
    r,
    s,
    a = n(993767),
    o = n(860511),
    l = n(598349),
    u = n(706938),
    c = n(210140),
    d = n(121536),
    _ = n(583178),
    f = n(239586),
    h = "Object already initialized",
    p = o.TypeError,
    E = o.WeakMap;
if (a || d.state) {
    var m = d.state || (d.state = new E());
    (m.get = m.get),
        (m.has = m.has),
        (m.set = m.set),
        (i = function (e, t) {
            if (m.has(e)) throw new p(h);
            return (t.facade = e), m.set(e, t), t;
        }),
        (r = function (e) {
            return m.get(e) || {};
        }),
        (s = function (e) {
            return m.has(e);
        });
} else {
    var g = _("state");
    (f[g] = !0),
        (i = function (e, t) {
            if (c(e, g)) throw new p(h);
            return (t.facade = e), u(e, g, t), t;
        }),
        (r = function (e) {
            return c(e, g) ? e[g] : {};
        }),
        (s = function (e) {
            return c(e, g);
        });
}
e.exports = {
    set: i,
    get: r,
    has: s,
    enforce: function (e) {
        return s(e) ? r(e) : i(e, {});
    },
    getterFor: function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = r(t)).type !== e) throw new p("Incompatible receiver, " + e + " required");
            return n;
        };
    },
};
