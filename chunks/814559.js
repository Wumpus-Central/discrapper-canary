var r = n(46015),
    i = n(527160),
    o = Math.floor,
    a = r(''.charAt),
    s = r(''.replace),
    l = r(''.slice),
    c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    u = /\$([$&'`]|\d{1,2})/g;
e.exports = function (e, t, n, r, d, f) {
    var _ = n + e.length,
        p = r.length,
        h = u;
    return (
        void 0 !== d && ((d = i(d)), (h = c)),
        s(f, h, function (i, s) {
            var c;
            switch (a(s, 0)) {
                case '$':
                    return '$';
                case '&':
                    return e;
                case '`':
                    return l(t, 0, n);
                case "'":
                    return l(t, _);
                case '<':
                    c = d[l(s, 1, -1)];
                    break;
                default:
                    var u = +s;
                    if (0 === u) return i;
                    if (u > p) {
                        var f = o(u / 10);
                        if (0 === f) return i;
                        if (f <= p) return void 0 === r[f - 1] ? a(s, 1) : r[f - 1] + a(s, 1);
                        return i;
                    }
                    c = r[u - 1];
            }
            return void 0 === c ? '' : c;
        })
    );
};
