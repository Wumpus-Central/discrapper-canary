n.d(t, { Z: () => r });
let r = function () {
    for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
        (e = arguments[n]) &&
            (t = (function e(t) {
                var n,
                    r,
                    i = '';
                if ('string' == typeof t || 'number' == typeof t) i += t;
                else if ('object' == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                    } else for (r in t) t[r] && (i && (i += ' '), (i += r));
                return i;
            })(e)) &&
            (r && (r += ' '), (r += t));
    return r;
};
