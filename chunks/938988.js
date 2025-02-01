var i = n(67867),
    r = n(96403),
    a = n(511364),
    s = n(982665),
    o = n(141603),
    l = n(349446).f,
    u = n(937443),
    c = n(777628),
    d = n(497308),
    f = n(348343),
    _ = n(718380),
    p = !1,
    h = f('meta'),
    m = 0,
    g = function (e) {
        l(e, h, {
            value: {
                objectID: 'O' + m++,
                weakData: {}
            }
        });
    },
    E = function (e, t) {
        if (!s(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
        if (!o(e, h)) {
            if (!d(e)) return 'F';
            if (!t) return 'E';
            g(e);
        }
        return e[h].objectID;
    },
    v = function (e, t) {
        if (!o(e, h)) {
            if (!d(e)) return !0;
            if (!t) return !1;
            g(e);
        }
        return e[h].weakData;
    },
    y = function (e) {
        return _ && p && d(e) && !o(e, h) && g(e), e;
    },
    I = function () {
        (T.enable = function () {}), (p = !0);
        var e = u.f,
            t = r([].splice),
            n = {};
        (n[h] = 1),
            e(n).length &&
                ((u.f = function (n) {
                    for (var i = e(n), r = 0, a = i.length; r < a; r++)
                        if (i[r] === h) {
                            t(i, r, 1);
                            break;
                        }
                    return i;
                }),
                i(
                    {
                        target: 'Object',
                        stat: !0,
                        forced: !0
                    },
                    { getOwnPropertyNames: c.f }
                ));
    },
    T = (e.exports = {
        enable: I,
        fastKey: E,
        getWeakData: v,
        onFreeze: y
    });
a[h] = !0;
