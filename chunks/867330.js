function r(e) {
    var n,
        i,
        a = '';
    if ('string' == typeof e || 'number' == typeof e) a += e;
    else if ('object' == typeof e) {
        if (Array.isArray(e)) {
            var o = e.length;
            for (n = 0; n < o; n++) e[n] && (i = r(e[n])) && (a && (a += ' '), (a += i));
        } else for (i in e) e[i] && (a && (a += ' '), (a += i));
    }
    return a;
}
function i() {
    for (var e, n, i = 0, a = '', o = arguments.length; i < o; i++) (e = arguments[i]) && (n = r(e)) && (a && (a += ' '), (a += n));
    return a;
}
n.Z = i;
