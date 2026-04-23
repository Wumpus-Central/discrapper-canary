n.d(e, { JH: () => u, RK: () => s, ST: () => A, Sk: () => c, UK: () => d, xf: () => _ });
var r = n(636537),
    i = n(228366),
    a = n(830215),
    o = n(961523),
    l = n(652215);
async function s(t) {
    await r.Bo.put({ url: l.Rsh.CHANNEL_RECIPIENT_ME(t), body: { consent_status: o.w.ACCEPTED }, rejectWithError: !1 }),
        i.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: t });
}
function u(t) {
    return r.Bo.put({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.w.UNSPECIFIED },
        rejectWithError: !1,
    });
}
function c(t) {
    return r.Bo.put({ url: l.Rsh.CHANNEL_RECIPIENT_ME(t), body: { consent_status: o.w.PENDING }, rejectWithError: !1 });
}
function d(t) {
    return r.Bo.del({ url: l.Rsh.CHANNEL_RECIPIENT_ME(t), rejectWithError: !1 });
}
function A(t) {
    return r.Bo.put({ url: l.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(), body: { channel_ids: t }, rejectWithError: !1 });
}
function _() {
    a.A.getLocationMetadata();
}
