var r = n(730179),
    i = n(474334);
function o(e, t, n, o) {
    var a = e.length;
    for ((n = r(n)) < 0 && (n = -n > a ? 0 : a + n), (o = void 0 === o || o > a ? a : r(o)) < 0 && (o += a), o = n > o ? 0 : i(o); n < o; ) e[n++] = t;
    return e;
}
e.exports = o;
