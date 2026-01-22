var t = 4,
    n = 0.001,
    r = 1e-7,
    i = 10,
    a = 11,
    s = 0.1,
    o = "function" == typeof Float32Array;

function l(e, t) {
    return 1 - 3 * t + 3 * e;
}

function c(e, t) {
    return 3 * t - 6 * e;
}

function u(e) {
    return 3 * e;
}

function d(e, t, n) {
    return ((l(t, n) * e + c(t, n)) * e + u(t)) * e;
}

function f(e, t, n) {
    return 3 * l(t, n) * e * e + 2 * c(t, n) * e + u(t);
}

function p(e, t, n, a, s) {
    var o,
        l,
        c = 0;
    do (o = d((l = t + (n - t) / 2), a, s) - e) > 0 ? (n = l) : (t = l);
    while (Math.abs(o) > r && ++c < i);
    return l;
}

function _(e, n, r, i) {
    for (var a = 0; a < t; ++a) {
        var s = f(n, r, i);
        if (0 === s) break;
        var o = d(n, r, i) - e;
        n -= o / s;
    }
    return n;
}
e.exports = function (e, t, r, i) {
    if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw Error("bezier x values must be in [0, 1] range");
    var l = o ? new Float32Array(a) : Array(a);
    if (e !== t || r !== i) for (var c = 0; c < a; ++c) l[c] = d(c * s, e, r);

    function u(t) {
        for (var i = 0, o = 1, c = a - 1; o !== c && l[o] <= t; ++o) i += s;
        var u = i + ((t - l[--o]) / (l[o + 1] - l[o])) * s,
            d = f(u, e, r);
        return d >= n ? _(t, u, e, r) : 0 === d ? u : p(t, i, i + s, e, r);
    }
    return function (n) {
        return e === t && r === i ? n : 0 === n ? 0 : 1 === n ? 1 : d(u(n), t, i);
    };
};
