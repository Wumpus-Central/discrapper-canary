var e = r(48657),
    o = r(46015),
    i = r(79275),
    u = r(527160),
    c = r(914331),
    a = r(137294),
    f = o([].push),
    s = function (t) {
        var n = 1 === t,
            r = 2 === t,
            o = 3 === t,
            s = 4 === t,
            l = 6 === t,
            p = 7 === t,
            d = 5 === t || l;
        return function (_, h, y, b) {
            for (var g, v, w = u(_), m = i(w), x = c(m), A = e(h, y), O = 0, T = b || a, E = n ? T(_, x) : r || p ? T(_, 0) : void 0; x > O; O++)
                if ((d || O in m) && ((v = A((g = m[O]), O, w)), t))
                    if (n) E[O] = v;
                    else if (v)
                        switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return O;
                            case 2:
                                f(E, g);
                        }
                    else
                        switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                f(E, g);
                        }
            return l ? -1 : o || s ? s : E;
        };
    };
t.exports = {
    forEach: s(0),
    map: s(1),
    filter: s(2),
    some: s(3),
    every: s(4),
    find: s(5),
    findIndex: s(6),
    filterReject: s(7)
};
