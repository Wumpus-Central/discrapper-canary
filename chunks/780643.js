var n = 4,
    r = 0.001,
    i = 1e-7,
    a = 10,
    o = 11,
    s = 0.1,
    l = 'function' == typeof Float32Array;
function u(e, n) {
    return 1 - 3 * n + 3 * e;
}
function c(e, n) {
    return 3 * n - 6 * e;
}
function d(e) {
    return 3 * e;
}
function f(e, n, r) {
    return ((u(n, r) * e + c(n, r)) * e + d(n)) * e;
}
function p(e, n, r) {
    return 3 * u(n, r) * e * e + 2 * c(n, r) * e + d(n);
}
function h(e, n, r, o, s) {
    var l,
        u,
        c = 0;
    do (l = f((u = n + (r - n) / 2), o, s) - e) > 0 ? (r = u) : (n = u);
    while (Math.abs(l) > i && ++c < a);
    return u;
}
function _(e, r, i, a) {
    for (var o = 0; o < n; ++o) {
        var s = p(r, i, a);
        if (0 === s) break;
        var l = f(r, i, a) - e;
        r -= l / s;
    }
    return r;
}
e.exports = function (e, n, i, a) {
    if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var u = l ? new Float32Array(o) : Array(o);
    if (e !== n || i !== a) for (var c = 0; c < o; ++c) u[c] = f(c * s, e, i);
    function d(n) {
        for (var a = 0, l = 1, c = o - 1; l !== c && u[l] <= n; ++l) a += s;
        var d = a + ((n - u[--l]) / (u[l + 1] - u[l])) * s,
            f = p(d, e, i);
        return f >= r ? _(n, d, e, i) : 0 === f ? d : h(n, a, a + s, e, i);
    }
    return function (r) {
        return e === n && i === a ? r : 0 === r ? 0 : 1 === r ? 1 : f(d(r), n, a);
    };
};
