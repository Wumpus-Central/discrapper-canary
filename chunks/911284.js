n.d(t, { Z: () => s });
var r = n(70956),
    i = n(564990),
    o = n(353647);
let a = r.Z.Millis.MINUTE;
function s(e, t) {
    var n, r;
    if (o.Z.isFetchingUserOutbox(e)) return;
    let s = null != (r = null == (n = o.Z.getUserOutbox(e)) ? void 0 : n.lastFetched) ? r : 0;
    if (!(Date.now() - s < a)) return (0, i.JX)(e, t);
}
