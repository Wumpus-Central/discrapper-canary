var n = r(46015),
    i = r(527160),
    s = Math.floor,
    a = n(''.charAt),
    o = n(''.replace),
    u = n(''.slice),
    h = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    c = /\$([$&'`]|\d{1,2})/g;
t.exports = function (t, e, r, n, f, l) {
    var p = r + t.length,
        v = n.length,
        g = c;
    return (
        void 0 !== f && ((f = i(f)), (g = h)),
        o(l, g, function (i, o) {
            var h;
            switch (a(o, 0)) {
                case '$':
                    return '$';
                case '&':
                    return t;
                case '`':
                    return u(e, 0, r);
                case "'":
                    return u(e, p);
                case '<':
                    h = f[u(o, 1, -1)];
                    break;
                default:
                    var c = +o;
                    if (0 === c) return i;
                    if (c > v) {
                        var l = s(c / 10);
                        if (0 === l) return i;
                        if (l <= v) return void 0 === n[l - 1] ? a(o, 1) : n[l - 1] + a(o, 1);
                        return i;
                    }
                    h = n[c - 1];
            }
            return void 0 === h ? '' : h;
        })
    );
};
