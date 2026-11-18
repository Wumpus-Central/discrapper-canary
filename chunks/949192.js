n.d(t, { pM: () => u, hD: () => A, ob: () => c, eS: () => d, gr: () => _, Lt: () => E });
var i = n(620632),
    r = n(178253),
    a = n(184015),
    s = n(856383);
let l = [
    "api_connection_error",
    "api_error",
    "authentication_error",
    "card_error",
    "idempotency_error",
    "invalid_request_error",
    "rate_limit_error",
    "validation_error",
];
var o = n(818348);
function d(e, t) {
    let n = new Date();
    return (n.setMonth(e - 1), n.toLocaleString(t, { month: "short" }));
}
async function c(e) {
    let t = null;
    if (null != e && e.paymentGateway === o.kM.BRAINTREE) {
        let e = await (0, a.Z)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function u(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
function _(e) {
    return (
        (e instanceof i.oh && !!(e.status >= 400) && !!(e.status < 500)) ||
        (e instanceof r.A && null != e.status && !!(e.status >= 400) && !!(e.status < 500))
    );
}
function E(e) {
    return null != e && l.includes(e.type);
}
function A(e, t) {
    s.A.captureMessage(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
