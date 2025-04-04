var e = n(764908),
    o = n(505072),
    i = n(565130),
    u = n(717130),
    s = e(''.charAt),
    c = e(''.charCodeAt),
    f = e(''.slice),
    a = function (t) {
        return function (r, n) {
            var e,
                a,
                p = i(u(r)),
                l = o(n),
                v = p.length;
            return l < 0 || l >= v ? (t ? '' : void 0) : (e = c(p, l)) < 55296 || e > 56319 || l + 1 === v || (a = c(p, l + 1)) < 56320 || a > 57343 ? (t ? s(p, l) : e) : t ? f(p, l, l + 2) : ((e - 55296) << 10) + (a - 56320) + 65536;
        };
    };
t.exports = {
    codeAt: a(!1),
    charAt: a(!0)
};
