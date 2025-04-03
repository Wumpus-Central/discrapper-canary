var e = n(67867),
    o = n(96403),
    i = n(511364),
    u = n(982665),
    s = n(141603),
    c = n(349446).f,
    f = n(937443),
    a = n(777628),
    p = n(497308),
    v = n(348343),
    l = n(718380),
    y = !1,
    h = v('meta'),
    x = 0,
    d = function (t) {
        c(t, h, {
            value: {
                objectID: 'O' + x++,
                weakData: {}
            }
        });
    },
    g = (t.exports = {
        enable: function () {
            (g.enable = function () {}), (y = !0);
            var t = f.f,
                r = o([].splice),
                n = {};
            (n[h] = 1),
                t(n).length &&
                    ((f.f = function (n) {
                        for (var e = t(n), o = 0, i = e.length; o < i; o++)
                            if (e[o] === h) {
                                r(e, o, 1);
                                break;
                            }
                        return e;
                    }),
                    e(
                        {
                            target: 'Object',
                            stat: !0,
                            forced: !0
                        },
                        { getOwnPropertyNames: a.f }
                    ));
        },
        fastKey: function (t, r) {
            if (!u(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!s(t, h)) {
                if (!p(t)) return 'F';
                if (!r) return 'E';
                d(t);
            }
            return t[h].objectID;
        },
        getWeakData: function (t, r) {
            if (!s(t, h)) {
                if (!p(t)) return !0;
                if (!r) return !1;
                d(t);
            }
            return t[h].weakData;
        },
        onFreeze: function (t) {
            return l && y && p(t) && !s(t, h) && d(t), t;
        }
    });
i[h] = !0;
