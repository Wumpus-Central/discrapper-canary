var e = n(821819),
    o = n(735471),
    i = /#|\.prototype\./,
    u = function (t, r) {
        var n = c[s(t)];
        return n === a || (n !== f && (o(r) ? e(r) : !!r));
    },
    s = (u.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase();
    }),
    c = (u.data = {}),
    f = (u.NATIVE = 'N'),
    a = (u.POLYFILL = 'P');
t.exports = u;
