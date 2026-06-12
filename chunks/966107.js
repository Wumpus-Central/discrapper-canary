E.d(r, { JH: () => i, RK: () => s, ST: () => h, Sk: () => C, UK: () => _, xf: () => a });
var n = E(636537),
    o = E(228366),
    e = E(830215),
    u = E(961523),
    c = E(652215);
async function s(t) {
    await n.Bo.put({ url: c.Rsh.CHANNEL_RECIPIENT_ME(t), body: { consent_status: u.w.ACCEPTED }, rejectWithError: !1 }),
        o.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: t });
}
function i(t) {
    return n.Bo.put({
        url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: u.w.UNSPECIFIED },
        rejectWithError: !1,
    });
}
function C(t) {
    return n.Bo.put({ url: c.Rsh.CHANNEL_RECIPIENT_ME(t), body: { consent_status: u.w.PENDING }, rejectWithError: !1 });
}
function _(t) {
    return n.Bo.del({ url: c.Rsh.CHANNEL_RECIPIENT_ME(t), rejectWithError: !1 });
}
function h(t) {
    return n.Bo.put({ url: c.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(), body: { channel_ids: t }, rejectWithError: !1 });
}
function a() {
    e.A.getLocationMetadata();
}
