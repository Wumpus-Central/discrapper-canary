n.d(t, { Z: () => s });
var r = n(70956),
    i = n(564990),
    a = n(353647);
let o = r.Z.Millis.MINUTE;
function s(e, t) {
    var n, r;
    if (a.Z.isFetchingUserOutbox(e)) return;
    let s = null != (r = null == (n = a.Z.getUserOutbox(e)) ? void 0 : n.lastFetched) ? r : 0;
    if (!(Date.now() - s < o)) return (0, i.JX)(e, t);
}
