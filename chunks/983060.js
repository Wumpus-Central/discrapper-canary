i.d(t, { MM: () => l, Wi: () => r, X8: () => n });
var a = i(913290),
    s = i(777376);
let n = "1476683556242718862";
function r() {
    return "#";
}
function l(e) {
    if (e.sku_id !== n || e.deleted) return null;
    if (null == e.ends_at || new Date(e.ends_at) > new Date()) return s.gR.ACTIVATED;
    let t = e.fulfillment_status;
    return t === a.w.FULFILLED || t === a.w.UNFULFILLMENT_NEEDED || t === a.w.UNFULFILLMENT_NEEDED_MANUAL
        ? s.gR.CANCELLATION_PENDING
        : null;
}
