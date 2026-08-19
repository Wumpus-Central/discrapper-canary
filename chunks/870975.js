s.d(t, { MM: () => o, cc: () => r, xA: () => c });
var i = s(913290),
    n = s(975571),
    a = s(297966),
    l = s(652215);
let r = "1476683556242718862";
function c() {
    return n.A.getArticleURL(l.MVz.NITRO_2_POINT_0);
}
function o(e) {
    if (e.sku_id !== r || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return a.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? a.gR.CANCELLATION_PENDING
        : null;
}
