var r,
    i,
    a,
    s = n(993767),
    o = n(860511),
    l = n(598349),
    c = n(706938),
    u = n(210140),
    d = n(121536),
    f = n(583178),
    p = n(239586),
    _ = "Object already initialized",
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
    var b = d.state || (d.state = new m());
    (b.get = b.get),
        (b.has = b.has),
        (b.set = b.set),
        (r = function (e, t) {
            if (b.has(e)) throw new h(_);
            return (t.facade = e), b.set(e, t), t;
        }),
        (i = function (e) {
            return b.get(e) || {};
        }),
        (a = function (e) {
            return b.has(e);
        });
} else {
    var y = f("state");
    (p[y] = !0),
        (r = function (e, t) {
            if (u(e, y)) throw new h(_);
            return (t.facade = e), c(e, y, t), t;
        }),
        (i = function (e) {
            return u(e, y) ? e[y] : {};
        }),
        (a = function (e) {
            return u(e, y);
        });
}
e.exports = {
    set: r,
    get: i,
    has: a,
    enforce: g,
    getterFor: E,
};
