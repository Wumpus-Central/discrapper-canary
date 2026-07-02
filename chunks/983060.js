n.d(t, { MM: () => o, cc: () => l, xA: () => c });
var i = n(913290),
    a = n(297966),
    s = n(975571),
    r = n(652215);
let l = "1476683556242718862";
function c() {
    return s.A.getArticleURL(r.MVz.NITRO_2_POINT_0);
}
function o(e) {
    if (e.sku_id !== l || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return a.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? a.gR.CANCELLATION_PENDING
        : null;
}
