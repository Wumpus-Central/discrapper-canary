var i = r(821819),
    a = r(735471),
    o = /#|\.prototype\./,
    s = function (e, n) {
        var r = u[l(e)];
        return r === d || (r !== c && (a(n) ? i(n) : !!n));
    },
    l = (s.normalize = function (e) {
        return String(e).replace(o, '.').toLowerCase();
    }),
    u = (s.data = {}),
    c = (s.NATIVE = 'N'),
    d = (s.POLYFILL = 'P');
e.exports = s;
