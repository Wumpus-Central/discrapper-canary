n.d(e, {
    Xy: () => u,
    e4: () => a,
    gN: () => d,
    hi: () => h,
    qR: () => l,
    r_: () => E
});
var r = n(544891),
    s = n(570140),
    i = n(893776),
    o = n(290323),
    c = n(981631);
async function a(t) {
    await r.tn.put({
        url: c.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.ACCEPTED },
        rejectWithError: !1
    }),
        s.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function l(t) {
    return r.tn.put({
        url: c.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function u(t) {
    return r.tn.put({
        url: c.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.PENDING },
        rejectWithError: !1
    });
}
function d(t) {
    return r.tn.del({
        url: c.ANM.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    });
}
function E(t) {
    return r.tn.put({
        url: c.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t },
        rejectWithError: !1
    });
}
function h() {
    i.Z.getLocationMetadata();
}
