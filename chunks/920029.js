var r = n(48657),
    i = n(46015),
    o = n(79275),
    a = n(527160),
    s = n(914331),
    l = n(137294),
    c = i([].push),
    u = function (e) {
        var t = 1 === e,
            n = 2 === e,
            i = 3 === e,
            u = 4 === e,
            d = 6 === e,
            f = 7 === e,
            _ = 5 === e || d;
        return function (p, h, m, g) {
            for (var E, b, y = a(p), v = o(y), O = s(v), I = r(h, m), S = 0, T = g || l, N = t ? T(p, O) : n || f ? T(p, 0) : void 0; O > S; S++)
                if ((_ || S in v) && ((b = I((E = v[S]), S, y)), e))
                    if (t) N[S] = b;
                    else if (b)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return S;
                            case 2:
                                c(N, E);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(N, E);
                        }
            return d ? -1 : i || u ? u : N;
        };
    };
e.exports = {
    forEach: u(0),
    map: u(1),
    filter: u(2),
    some: u(3),
    every: u(4),
    find: u(5),
    findIndex: u(6),
    filterReject: u(7)
};
