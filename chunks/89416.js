var e,
    o,
    i,
    u = n(921546),
    s = n(424353),
    c = n(829575),
    f = n(285007),
    a = n(185698),
    p = n(723217),
    l = n(459079),
    v = n(270498),
    y = 'Object already initialized',
    h = s.TypeError,
    x = s.WeakMap;
if (u || p.state) {
    var d = p.state || (p.state = new x());
    (d.get = d.get),
        (d.has = d.has),
        (d.set = d.set),
        (e = function (t, r) {
            if (d.has(t)) throw new h(y);
            return (r.facade = t), d.set(t, r), r;
        }),
        (o = function (t) {
            return d.get(t) || {};
        }),
        (i = function (t) {
            return d.has(t);
        });
} else {
    var g = l('state');
    (v[g] = !0),
        (e = function (t, r) {
            if (a(t, g)) throw new h(y);
            return (r.facade = t), f(t, g, r), r;
        }),
        (o = function (t) {
            return a(t, g) ? t[g] : {};
        }),
        (i = function (t) {
            return a(t, g);
        });
}
t.exports = {
    set: e,
    get: o,
    has: i,
    enforce: function (t) {
        return i(t) ? o(t) : e(t, {});
    },
    getterFor: function (t) {
        return function (r) {
            var n;
            if (!c(r) || (n = o(r)).type !== t) throw new h('Incompatible receiver, ' + t + ' required');
            return n;
        };
    }
};
