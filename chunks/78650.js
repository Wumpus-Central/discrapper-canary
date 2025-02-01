var i = n(314545),
    r = n(757209),
    a = n(373640),
    s = parseFloat,
    o = Math.min,
    l = Math.random;
function u(e, t, n) {
    if ((n && 'boolean' != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ('boolean' == typeof t ? ((n = t), (t = void 0)) : 'boolean' == typeof e && ((n = e), (e = void 0))), void 0 === e && void 0 === t ? ((e = 0), (t = 1)) : ((e = a(e)), void 0 === t ? ((t = e), (e = 0)) : (t = a(t))), e > t)) {
        var u = e;
        (e = t), (t = u);
    }
    if (n || e % 1 || t % 1) {
        var c = l();
        return o(e + c * (t - e + s('1e-' + ((c + '').length - 1))), t);
    }
    return i(e, t);
}
e.exports = u;
