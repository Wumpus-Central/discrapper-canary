var i = r(805100),
    a = r(580897);
function o(e, n, r, o) {
    var s = !r;
    r || (r = {});
    for (var l = -1, u = n.length; ++l < u; ) {
        var c = n[l],
            d = o ? o(r[c], e[c], c, r, e) : void 0;
        void 0 === d && (d = e[c]), s ? a(r, c, d) : i(r, c, d);
    }
    return r;
}
e.exports = o;
