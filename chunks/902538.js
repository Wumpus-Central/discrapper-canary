var i = n(821819),
    r = n(735471),
    a = /#|\.prototype\./,
    s = function (e, t) {
        var n = l[o(e)];
        return n === c || (n !== u && (r(t) ? i(t) : !!t));
    },
    o = (s.normalize = function (e) {
        return String(e).replace(a, '.').toLowerCase();
    }),
    l = (s.data = {}),
    u = (s.NATIVE = 'N'),
    c = (s.POLYFILL = 'P');
e.exports = s;
