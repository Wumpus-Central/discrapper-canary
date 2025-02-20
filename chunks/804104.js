var r = n(476508),
    i = n(96403),
    o = n(186973),
    a = n(611345),
    s = n(474883),
    l = n(15507),
    c = i([].push),
    u = function (e) {
        var t = 1 === e,
            n = 2 === e,
            i = 3 === e,
            u = 4 === e,
            d = 6 === e,
            f = 7 === e,
            p = 5 === e || d;
        return function (_, h, m, g) {
            for (var E, v, b = a(_), y = o(b), O = s(y), S = r(h, m), I = 0, T = g || l, N = t ? T(_, O) : n || f ? T(_, 0) : void 0; O > I; I++)
                if ((p || I in y) && ((v = S((E = y[I]), I, b)), e)) {
                    if (t) N[I] = v;
                    else if (v)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return I;
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
