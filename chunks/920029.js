var r = n(48657),
    i = n(46015),
    a = n(79275),
    o = n(527160),
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
            p = 5 === e || d;
        return function (_, m, h, g) {
            for (
                var E,
                    b,
                    y = o(_),
                    O = a(y),
                    v = s(O),
                    S = r(m, h),
                    I = 0,
                    T = g || l,
                    C = t ? T(_, v) : n || f ? T(_, 0) : void 0;
                v > I;
                I++
            )
                if ((p || I in O) && ((b = S((E = O[I]), I, y)), e))
                    if (t) C[I] = b;
                    else if (b)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return I;
                            case 2:
                                c(C, E);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(C, E);
                        }
            return d ? -1 : i || u ? u : C;
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
    filterReject: u(7),
};
