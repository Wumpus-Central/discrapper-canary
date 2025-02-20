var r = n(67867),
    i = n(96403),
    o = n(511364),
    a = n(982665),
    s = n(141603),
    l = n(349446).f,
    c = n(937443),
    u = n(777628),
    d = n(497308),
    f = n(348343),
    p = n(718380),
    _ = !1,
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
        if (!a(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
        if (!s(e, h)) {
            if (!d(e)) return 'F';
            if (!t) return 'E';
            g(e);
        }
        return e[h].objectID;
    },
    v = function (e, t) {
        if (!s(e, h)) {
            if (!d(e)) return !0;
            if (!t) return !1;
            g(e);
        }
        return e[h].weakData;
    },
    b = function (e) {
        return p && _ && d(e) && !s(e, h) && g(e), e;
    },
    y = function () {
        (O.enable = function () {}), (_ = !0);
        var e = c.f,
            t = i([].splice),
            n = {};
        (n[h] = 1),
            e(n).length &&
                ((c.f = function (n) {
                    for (var r = e(n), i = 0, o = r.length; i < o; i++)
                        if (r[i] === h) {
                            t(r, i, 1);
                            break;
                        }
                    return r;
                }),
                r(
                    {
                        target: 'Object',
                        stat: !0,
                        forced: !0
                    },
                    { getOwnPropertyNames: u.f }
                ));
    },
    O = (e.exports = {
        enable: y,
        fastKey: E,
        getWeakData: v,
        onFreeze: b
    });
o[h] = !0;
