var n = r(46015),
    i = r(527160),
    o = Math.floor,
    a = n(''.charAt),
    c = n(''.replace),
    u = n(''.slice),
    s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    l = /\$([$&'`]|\d{1,2})/g;
t.exports = function (t, e, r, n, f, p) {
    var v = r + t.length,
        g = n.length,
        d = l;
    return (
        void 0 !== f && ((f = i(f)), (d = s)),
        c(p, d, function (i, c) {
            var s;
            switch (a(c, 0)) {
                case '$':
                    return '$';
                case '&':
                    return t;
                case '`':
                    return u(e, 0, r);
                case "'":
                    return u(e, v);
                case '<':
                    s = f[u(c, 1, -1)];
                    break;
                default:
                    var l = +c;
                    if (0 === l) return i;
                    if (l > g) {
                        var p = o(l / 10);
                        if (0 === p) return i;
                        if (p <= g) return void 0 === n[p - 1] ? a(c, 1) : n[p - 1] + a(c, 1);
                        return i;
                    }
                    s = n[l - 1];
            }
            return void 0 === s ? '' : s;
        })
    );
};
