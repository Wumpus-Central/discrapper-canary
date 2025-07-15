n.d(t, { Z: () => i });
let i = function () {
    for (var e, t, n = 0, i = '', r = arguments.length; n < r; n++)
        (e = arguments[n]) &&
            (t = (function e(t) {
                var n,
                    i,
                    r = '';
                if ('string' == typeof t || 'number' == typeof t) r += t;
                else if ('object' == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (n = 0; n < o; n++) t[n] && (i = e(t[n])) && (r && (r += ' '), (r += i));
                    } else for (i in t) t[i] && (r && (r += ' '), (r += i));
                return r;
            })(e)) &&
            (i && (i += ' '), (i += t));
    return i;
};
