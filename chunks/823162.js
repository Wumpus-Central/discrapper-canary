n.d(e, {
    Xy: () => d,
    e4: () => c,
    gN: () => u,
    hi: () => _,
    qR: () => l,
    r_: () => E
});
var s = n(544891),
    i = n(570140),
    r = n(893776),
    o = n(290323),
    a = n(981631);
async function c(t) {
    await s.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.ACCEPTED },
        rejectWithError: !1
    }),
        i.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function l(t) {
    return s.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function d(t) {
    return s.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: o.h.PENDING },
        rejectWithError: !1
    });
}
function u(t) {
    return s.tn.del({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    });
}
function E(t) {
    return s.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t },
        rejectWithError: !1
    });
}
function _() {
    r.Z.getLocationMetadata();
}
