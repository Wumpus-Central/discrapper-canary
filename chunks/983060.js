n.d(t, { MM: () => o, X8: () => a, xA: () => c });
var i = n(913290),
    l = n(975571),
    r = n(777376),
    s = n(652215);
let a = "1476683556242718862";
function c() {
    return l.A.getArticleURL(s.MVz.NITRO_2_POINT_0);
}
function o(e) {
    if (e.sku_id !== a || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return r.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? r.gR.CANCELLATION_PENDING
        : null;
}
