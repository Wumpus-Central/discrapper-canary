i.d(t, { JH: () => d, RK: () => o, ST: () => m, Sk: () => c, UK: () => u, xf: () => _ });
var n = i(562465),
    a = i(73153),
    l = i(830215),
    r = i(961523),
    s = i(652215);
async function o(e) {
    await n.Bo.put({ url: s.Rsh.CHANNEL_RECIPIENT_ME(e), body: { consent_status: r.w.ACCEPTED }, rejectWithError: !1 }),
        a.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: e });
}
function d(e) {
    return n.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: r.w.UNSPECIFIED },
        rejectWithError: !1,
    });
}
function c(e) {
    return n.Bo.put({ url: s.Rsh.CHANNEL_RECIPIENT_ME(e), body: { consent_status: r.w.PENDING }, rejectWithError: !1 });
}
function u(e) {
    return n.Bo.del({ url: s.Rsh.CHANNEL_RECIPIENT_ME(e), rejectWithError: !1 });
}
function m(e) {
    return n.Bo.put({ url: s.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(), body: { channel_ids: e }, rejectWithError: !1 });
}
function _() {
    l.A.getLocationMetadata();
}
