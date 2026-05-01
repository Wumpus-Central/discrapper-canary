s.d(n, { MM: () => i, Wi: () => a, X8: () => r });
var l = s(913290),
    t = s(777376);
let r = "1476683556242718862";
function a() {
    return "#";
}
function i(e) {
    if (e.sku_id !== r || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return t.gR.ACTIVATED;
    let n = e.fulfillment_status;
    return n === l.w.FULFILLED || n === l.w.UNFULFILLMENT_NEEDED || n === l.w.UNFULFILLMENT_NEEDED_MANUAL
        ? t.gR.CANCELLATION_PENDING
        : null;
}
