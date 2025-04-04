var e = n(220159),
    o = n(424353),
    i = n(54978),
    u = n(779688),
    s = n(285007),
    c = n(795462),
    f = n(588383),
    a = n(971428),
    p = n(829575),
    l = n(372978),
    v = n(770050),
    y = n(85328).f,
    h = n(958288).forEach,
    x = n(181794),
    d = n(89416),
    g = d.set,
    b = d.getterFor;
t.exports = function (t, r, n) {
    var d,
        m = -1 !== t.indexOf('Map'),
        S = -1 !== t.indexOf('Weak'),
        w = m ? 'set' : 'add',
        O = o[t],
        j = O && O.prototype,
        A = {};
    if (
        x &&
        a(O) &&
        (S ||
            (j.forEach &&
                !u(function () {
                    new O().entries().next();
                })))
    ) {
        var E = (d = r(function (r, n) {
                g(f(r, E), {
                    type: t,
                    collection: new O()
                }),
                    l(n) ||
                        c(n, r[w], {
                            that: r,
                            AS_ENTRIES: m
                        });
            })).prototype,
            T = b(t);
        h(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (t) {
            var r = 'add' === t || 'set' === t;
            t in j &&
                !(S && 'clear' === t) &&
                s(E, t, function (n, e) {
                    var o = T(this).collection;
                    if (!r && S && !p(n)) return 'get' === t && void 0;
                    var i = o[t](0 === n ? 0 : n, e);
                    return r ? this : i;
                });
        }),
            S ||
                y(E, 'size', {
                    configurable: !0,
                    get: function () {
                        return T(this).collection.size;
                    }
                });
    } else (d = n.getConstructor(r, t, m, w)), i.enable();
    return (
        v(d, t, !1, !0),
        (A[t] = d),
        e(
            {
                global: !0,
                forced: !0
            },
            A
        ),
        S || n.setStrong(d, t, m),
        d
    );
};
