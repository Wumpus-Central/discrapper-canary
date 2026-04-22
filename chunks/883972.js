"use strict";
var r,
    i,
    s,
    a = n(993767),
    o = n(860511),
    l = n(598349),
    u = n(706938),
    d = n(210140),
    c = n(121536),
    _ = n(583178),
    f = n(239586),
    E = "Object already initialized",
    h = o.TypeError,
    p = o.WeakMap;
if (a || c.state) {
    var m = c.state || (c.state = new p());
    (m.get = m.get),
        (m.has = m.has),
        (m.set = m.set),
        (r = function (e, t) {
            if (m.has(e)) throw new h(E);
            return (t.facade = e), m.set(e, t), t;
        }),
        (i = function (e) {
            return m.get(e) || {};
        }),
        (s = function (e) {
            return m.has(e);
        });
} else {
    var g = _("state");
    (f[g] = !0),
        (r = function (e, t) {
            if (d(e, g)) throw new h(E);
            return (t.facade = e), u(e, g, t), t;
        }),
        (i = function (e) {
            return d(e, g) ? e[g] : {};
        }),
        (s = function (e) {
            return d(e, g);
        });
}
e.exports = {
    set: r,
    get: i,
    has: s,
    enforce: function (e) {
        return s(e) ? i(e) : r(e, {});
    },
    getterFor: function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new h("Incompatible receiver, " + e + " required");
            return n;
        };
    },
};
