var n,
    o,
    i,
    a = e(993767),
    u = e(860511),
    c = e(598349),
    f = e(706938),
    p = e(210140),
    s = e(121536),
    y = e(583178),
    v = e(239586),
    l = "Object already initialized",
    h = u.TypeError,
    d = u.WeakMap;
if (a || s.state) {
    var g = s.state || (s.state = new d());
    (g.get = g.get),
        (g.has = g.has),
        (g.set = g.set),
        (n = function (r, t) {
            if (g.has(r)) throw new h(l);
            return (t.facade = r), g.set(r, t), t;
        }),
        (o = function (r) {
            return g.get(r) || {};
        }),
        (i = function (r) {
            return g.has(r);
        });
} else {
    var b = y("state");
    (v[b] = !0),
        (n = function (r, t) {
            if (p(r, b)) throw new h(l);
            return (t.facade = r), f(r, b, t), t;
        }),
        (o = function (r) {
            return p(r, b) ? r[b] : {};
        }),
        (i = function (r) {
            return p(r, b);
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
