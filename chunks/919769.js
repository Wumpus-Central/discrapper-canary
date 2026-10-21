n.d(t, { f3: () => l, ds: () => o, CJ: () => s });
var i,
    r = (((i = {}).WISHLIST = "wishlist"), i);
function a(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function s(e) {
    if (null == e) return;
    let t = {};
    for (let n of Object.values(r)) {
        let i = a(e.sections[n]?.acked_at);
        null != i && (t[n] = i);
    }
    return t;
}
function l(e, t) {
    let n = a(e);
    return null != n && null != t && n > t;
}
function o(e, t) {
    if (null == t) return !1;
    let n = a(e?.updated_at);
    return null != n && n > t.lastViewedAt;
}
