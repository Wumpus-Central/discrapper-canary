var r = n(805100),
    i = n(580897);
function o(e, t, n, o) {
    var a = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l; ) {
        var c = t[s],
            u = o ? o(n[c], e[c], c, n, e) : void 0;
        void 0 === u && (u = e[c]), a ? i(n, c, u) : r(n, c, u);
    }
    return n;
}
e.exports = o;
