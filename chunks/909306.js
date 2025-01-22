var i = r(730179),
    a = r(474334);
function o(e, n, r, o) {
    var s = e.length;
    for ((r = i(r)) < 0 && (r = -r > s ? 0 : s + r), (o = void 0 === o || o > s ? s : i(o)) < 0 && (o += s), o = r > o ? 0 : a(o); r < o; ) e[r++] = n;
    return e;
}
e.exports = o;
