var i = r(476508),
    a = r(96403),
    o = r(186973),
    s = r(611345),
    l = r(474883),
    u = r(15507),
    c = a([].push),
    d = function (e) {
        var n = 1 === e,
            r = 2 === e,
            a = 3 === e,
            d = 4 === e,
            f = 6 === e,
            p = 7 === e,
            h = 5 === e || f;
        return function (_, m, g, E) {
            for (var v, y, b = s(_), I = o(b), T = l(I), S = i(m, g), A = 0, C = E || u, N = n ? C(_, T) : r || p ? C(_, 0) : void 0; T > A; A++)
                if ((h || A in I) && ((y = S((v = I[A]), A, b)), e)) {
                    if (n) N[A] = y;
                    else if (y)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return A;
                            case 2:
                                c(N, v);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(N, v);
                        }
                }
            return f ? -1 : a || d ? d : N;
        };
    };
e.exports = {
    forEach: d(0),
    map: d(1),
    filter: d(2),
    some: d(3),
    every: d(4),
    find: d(5),
    findIndex: d(6),
    filterReject: d(7)
};
