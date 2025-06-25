n.d(e, {
    Xy: () => s,
    e4: () => u,
    gN: () => d,
    hi: () => _,
    qR: () => c,
    r_: () => f
});
var r = n(544891),
    i = n(570140),
    l = n(893776),
    a = n(290323),
    o = n(981631);
async function u(t) {
    await r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.ACCEPTED },
        rejectWithError: !1
    }),
        i.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function c(t) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function s(t) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.PENDING },
        rejectWithError: !1
    });
}
function d(t) {
    return r.tn.del({
        url: o.ANM.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    });
}
function f(t) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t },
        rejectWithError: !1
    });
}
function _() {
    l.Z.getLocationMetadata();
}
