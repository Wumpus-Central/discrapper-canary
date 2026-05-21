"use strict";
n.d(t, { MM: () => u, X8: () => o, xA: () => l });
var i = n(913290),
    r = n(975571),
    s = n(777376),
    a = n(652215);
let o = "1476683556242718862";
function l() {
    return r.A.getArticleURL(a.MVz.NITRO_2_POINT_0);
}
function u(e) {
    if (e.sku_id !== o || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return s.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? s.gR.CANCELLATION_PENDING
        : null;
}
