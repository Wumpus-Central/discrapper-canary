var e = n(324474),
    o = n(764908),
    i = n(562690),
    u = n(475424),
    s = n(174344),
    c = n(84186),
    f = o([].push),
    a = function (t) {
        var r = 1 === t,
            n = 2 === t,
            o = 3 === t,
            a = 4 === t,
            p = 6 === t,
            l = 7 === t,
            v = 5 === t || p;
        return function (y, h, x, d) {
            for (var g, b, m = u(y), S = i(m), w = s(S), O = e(h, x), j = 0, A = d || c, E = r ? A(y, w) : n || l ? A(y, 0) : void 0; w > j; j++)
                if ((v || j in S) && ((b = O((g = S[j]), j, m)), t))
                    if (r) E[j] = b;
                    else if (b)
                        switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return j;
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
            return p ? -1 : o || a ? a : E;
        };
    };
t.exports = {
    forEach: a(0),
    map: a(1),
    filter: a(2),
    some: a(3),
    every: a(4),
    find: a(5),
    findIndex: a(6),
    filterReject: a(7)
};
