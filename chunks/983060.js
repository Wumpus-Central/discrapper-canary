"use strict";
n.d(t, { MM: () => u, cc: () => o, xA: () => l });
var i = n(913290),
    r = n(297966),
    s = n(975571),
    a = n(652215);
let o = "1476683556242718862";
function l() {
    return s.A.getArticleURL(a.MVz.NITRO_2_POINT_0);
}
function u(e) {
    if (e.sku_id !== o || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return r.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? r.gR.CANCELLATION_PENDING
        : null;
}
