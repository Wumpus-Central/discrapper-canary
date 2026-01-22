var r = n(410323),
    i = n(120394),
    a = n(304880),
    s = n(321727),
    o = r("".charAt),
    l = r("".charCodeAt),
    c = r("".slice),
    u = function (e) {
        return function (t, n) {
            var r,
                u,
                d = a(s(t)),
                f = i(n),
                p = d.length;
            return f < 0 || f >= p
                ? e
                    ? ""
                    : void 0
                : (r = l(d, f)) < 55296 || r > 56319 || f + 1 === p || (u = l(d, f + 1)) < 56320 || u > 57343
                  ? e
                      ? o(d, f)
                      : r
                  : e
                    ? c(d, f, f + 2)
                    : ((r - 55296) << 10) + (u - 56320) + 65536;
        };
    };
e.exports = {
    codeAt: u(!1),
    charAt: u(!0),
};
