var n,
    o,
    i,
    u = e(993767),
    a = e(860511),
    c = e(598349),
    f = e(706938),
    s = e(210140),
    p = e(121536),
    l = e(583178),
    v = e(239586),
    y = "Object already initialized",
    h = a.TypeError,
    b = a.WeakMap;
if (u || p.state) {
    var g = p.state || (p.state = new b());
    (g.get = g.get),
        (g.has = g.has),
        (g.set = g.set),
        (n = function (r, t) {
            if (g.has(r)) throw new h(y);
            return (t.facade = r), g.set(r, t), t;
        }),
        (o = function (r) {
            return g.get(r) || {};
        }),
        (i = function (r) {
            return g.has(r);
        });
} else {
    var x = l("state");
    (v[x] = !0),
        (n = function (r, t) {
            if (s(r, x)) throw new h(y);
            return (t.facade = r), f(r, x, t), t;
        }),
        (o = function (r) {
            return s(r, x) ? r[x] : {};
        }),
        (i = function (r) {
            return s(r, x);
        });
}
r.exports = {
    set: n,
    get: o,
    has: i,
    enforce: function (r) {
        return i(r) ? o(r) : n(r, {});
    },
    getterFor: function (r) {
        return function (t) {
            var e;
            if (!c(t) || (e = o(t)).type !== r) throw new h("Incompatible receiver, " + r + " required");
            return e;
        };
    },
};
