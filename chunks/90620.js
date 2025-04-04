r.d(e, { Z: () => n });
let n = function () {
    for (var t, e, r = 0, n = '', i = arguments.length; r < i; r++)
        (t = arguments[r]) &&
            (e = (function t(e) {
                var r,
                    n,
                    i = '';
                if ('string' == typeof e || 'number' == typeof e) i += e;
                else if ('object' == typeof e)
                    if (Array.isArray(e)) {
                        var o = e.length;
                        for (r = 0; r < o; r++) e[r] && (n = t(e[r])) && (i && (i += ' '), (i += n));
                    } else for (n in e) e[n] && (i && (i += ' '), (i += n));
                return i;
            })(t)) &&
            (n && (n += ' '), (n += e));
    return n;
};
