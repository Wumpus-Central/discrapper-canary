"use strict";
n.d(t, { MM: () => o, Wi: () => a, X8: () => s });
var i = n(913290),
    r = n(777376);
let s = "1476683556242718862";
function a() {
    return "#";
}
function o(e) {
    if (e.sku_id !== s || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return r.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === i.w.FULFILLED || t === i.w.UNFULFILLMENT_NEEDED || t === i.w.UNFULFILLMENT_NEEDED_MANUAL
        ? r.gR.CANCELLATION_PENDING
        : null;
}
