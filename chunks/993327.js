n.d(t, {
    A: () => o,
});
var r = n(927813),
    i = n(86070),
    a = n(517164);
let s = r.A.Millis.MINUTE;

function o(e, t) {
    var n, r;
    if (a.A.isFetchingUserOutbox(e)) return;
    let o = null != (n = null == (r = a.A.getUserOutbox(e)) ? void 0 : r.lastFetched) ? n : 0;
    if (!(Date.now() - o < s)) return (0, i.r7)(e, t);
}
