var i = n(730179),
    r = n(474334);
function a(e, t, n, a) {
    var s = e.length;
    for ((n = i(n)) < 0 && (n = -n > s ? 0 : s + n), (a = void 0 === a || a > s ? s : i(a)) < 0 && (a += s), a = n > a ? 0 : r(a); n < a; ) e[n++] = t;
    return e;
}
e.exports = a;
