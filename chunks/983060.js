n.d(t, { MM: () => d, cc: () => a, xA: () => o });
var i = n(913290),
    l = n(297966),
    r = n(975571),
    s = n(652215);
let a = "1476683556242718862";
function o() {
    return r.A.getArticleURL(s.MVz.NITRO_2_POINT_0);
}
function d(e) {
    if (e.sku_id !== a || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return l.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? l.gR.CANCELLATION_PENDING
        : null;
}
