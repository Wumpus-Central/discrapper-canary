n.d(t, {
    Xy: () => u,
    e4: () => s,
    gN: () => d,
    hi: () => p,
    qR: () => c,
    r_: () => m
});
var r = n(544891),
    i = n(570140),
    l = n(893776),
    a = n(290323),
    o = n(981631);
async function s(e) {
    await r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.ACCEPTED },
        rejectWithError: !1
    }),
        i.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function u(e) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.PENDING },
        rejectWithError: !1
    });
}
function d(e) {
    return r.tn.del({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    });
}
function m(e) {
    return r.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e },
        rejectWithError: !1
    });
}
function p() {
    l.Z.getLocationMetadata();
}
