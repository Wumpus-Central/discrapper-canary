function r(e) {
    var t,
        n,
        i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = r(e[t])) && (i && (i += ' '), (i += n));
        } else for (n in e) e[n] && (i && (i += ' '), (i += n));
    return i;
}
n.d(t, { Z: () => i });
let i = function () {
    for (var e, t, n = 0, i = '', o = arguments.length; n < o; n++) (e = arguments[n]) && (t = r(e)) && (i && (i += ' '), (i += t));
    return i;
};
