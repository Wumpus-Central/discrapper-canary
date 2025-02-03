var i = n(476508),
    r = n(96403),
    a = n(186973),
    s = n(611345),
    o = n(474883),
    l = n(15507),
    u = r([].push),
    c = function (e) {
        var t = 1 === e,
            n = 2 === e,
            r = 3 === e,
            c = 4 === e,
            d = 6 === e,
            f = 7 === e,
            _ = 5 === e || d;
        return function (p, h, m, g) {
            for (var E, v, y = s(p), I = a(y), b = o(I), T = i(h, m), S = 0, A = g || l, N = t ? A(p, b) : n || f ? A(p, 0) : void 0; b > S; S++)
                if ((_ || S in I) && ((v = T((E = I[S]), S, y)), e)) {
                    if (t) N[S] = v;
                    else if (v)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return S;
                            case 2:
                                u(N, E);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                u(N, E);
                        }
                }
            return d ? -1 : r || c ? c : N;
        };
    };
e.exports = {
    forEach: c(0),
    map: c(1),
    filter: c(2),
    some: c(3),
    every: c(4),
    find: c(5),
    findIndex: c(6),
    filterReject: c(7)
};
