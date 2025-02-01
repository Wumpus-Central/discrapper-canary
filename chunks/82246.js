var i = n(566885),
    r = n(470592),
    a = n(339718),
    s = n(49693),
    o = function (e) {
        var t = 1 === e;
        return function (n, o, l) {
            for (var u, c = a(n), d = r(c), f = i(o, l), _ = s(d); _-- > 0; )
                if (f((u = d[_]), _, c))
                    switch (e) {
                        case 0:
                            return u;
                        case 1:
                            return _;
                    }
            return t ? -1 : void 0;
        };
    };
e.exports = {
    findLast: o(0),
    findLastIndex: o(1)
};
