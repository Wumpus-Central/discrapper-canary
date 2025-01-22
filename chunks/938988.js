var i = r(67867),
    a = r(96403),
    o = r(511364),
    s = r(982665),
    l = r(141603),
    u = r(349446).f,
    c = r(937443),
    d = r(777628),
    f = r(497308),
    p = r(348343),
    h = r(718380),
    _ = !1,
    m = p('meta'),
    g = 0,
    E = function (e) {
        u(e, m, {
            value: {
                objectID: 'O' + g++,
                weakData: {}
            }
        });
    },
    v = function (e, n) {
        if (!s(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
        if (!l(e, m)) {
            if (!f(e)) return 'F';
            if (!n) return 'E';
            E(e);
        }
        return e[m].objectID;
    },
    y = function (e, n) {
        if (!l(e, m)) {
            if (!f(e)) return !0;
            if (!n) return !1;
            E(e);
        }
        return e[m].weakData;
    },
    b = function (e) {
        return h && _ && f(e) && !l(e, m) && E(e), e;
    },
    I = function () {
        (T.enable = function () {}), (_ = !0);
        var e = c.f,
            n = a([].splice),
            r = {};
        (r[m] = 1),
            e(r).length &&
                ((c.f = function (r) {
                    for (var i = e(r), a = 0, o = i.length; a < o; a++)
                        if (i[a] === m) {
                            n(i, a, 1);
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
                    { getOwnPropertyNames: d.f }
                ));
    },
    T = (e.exports = {
        enable: I,
        fastKey: v,
        getWeakData: y,
        onFreeze: b
    });
o[m] = !0;
