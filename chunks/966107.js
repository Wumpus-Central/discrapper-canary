n.d(t, { JH: () => c, RK: () => o, ST: () => h, Sk: () => d, UK: () => u, xf: () => m });
var i = n(562465),
    l = n(73153),
    a = n(830215),
    s = n(961523),
    r = n(652215);
async function o(e) {
    await i.Bo.put({ url: r.Rsh.CHANNEL_RECIPIENT_ME(e), body: { consent_status: s.w.ACCEPTED }, rejectWithError: !1 }),
        l.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: e });
}
function c(e) {
    return i.Bo.put({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: s.w.UNSPECIFIED },
        rejectWithError: !1,
    });
}
function d(e) {
    return i.Bo.put({ url: r.Rsh.CHANNEL_RECIPIENT_ME(e), body: { consent_status: s.w.PENDING }, rejectWithError: !1 });
}
function u(e) {
    return i.Bo.del({ url: r.Rsh.CHANNEL_RECIPIENT_ME(e), rejectWithError: !1 });
}
function h(e) {
    return i.Bo.put({ url: r.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(), body: { channel_ids: e }, rejectWithError: !1 });
}
function m() {
    a.A.getLocationMetadata();
}
