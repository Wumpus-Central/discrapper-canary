"use strict";
var r,
    i,
    a,
    s = n(993767),
    o = n(860511),
    l = n(598349),
    u = n(706938),
    c = n(210140),
    d = n(121536),
    _ = n(583178),
    f = n(239586),
    p = "Object already initialized",
    h = o.TypeError,
    m = o.WeakMap,
    g = function (e) {
        return a(e) ? i(e) : r(e, {});
    },
    E = function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new h("Incompatible receiver, " + e + " required");
            return n;
        };
    };
if (s || d.state) {
    var A = d.state || (d.state = new m());
    (A.get = A.get),
        (A.has = A.has),
        (A.set = A.set),
        (r = function (e, t) {
            if (A.has(e)) throw new h(p);
            return (t.facade = e), A.set(e, t), t;
        }),
        (i = function (e) {
            return A.get(e) || {};
        }),
        (a = function (e) {
            return A.has(e);
        });
} else {
    var I = _("state");
    (f[I] = !0),
        (r = function (e, t) {
            if (c(e, I)) throw new h(p);
            return (t.facade = e), u(e, I, t), t;
        }),
        (i = function (e) {
            return c(e, I) ? e[I] : {};
        }),
        (a = function (e) {
            return c(e, I);
        });
}
e.exports = { set: r, get: i, has: a, enforce: g, getterFor: E };
