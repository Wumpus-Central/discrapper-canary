E.d(r, { JH: () => i, RK: () => s, ST: () => h, Sk: () => C, UK: () => _, xf: () => a });
var n = E(636537),
    o = E(228366),
    e = E(830215),
    u = E(961523),
    c = E(652215);
async function s(t) {
    await n.Bo.put({
        url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: u.w.ACCEPTED },
        rejectWithError: (0, n.fT)(),
    }),
        o.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: t });
}
function i(t) {
    return n.Bo.put({
        url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: u.w.UNSPECIFIED },
        rejectWithError: (0, n.fT)(),
    });
}
function C(t) {
    return n.Bo.put({
        url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: u.w.PENDING },
        rejectWithError: (0, n.fT)(),
    });
}
function _(t) {
    return n.Bo.del({ url: c.Rsh.CHANNEL_RECIPIENT_ME(t), rejectWithError: (0, n.fT)() });
}
function h(t) {
    return n.Bo.put({
        url: c.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t },
        rejectWithError: (0, n.fT)(),
    });
}
function a() {
    e.A.getLocationMetadata();
}
