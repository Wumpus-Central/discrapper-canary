n.d(t, {
    Xy: () => d,
    e4: () => o,
    gN: () => u,
    hi: () => _,
    qR: () => c,
    r_: () => m
});
var i = n(544891),
    l = n(570140),
    a = n(893776),
    r = n(290323),
    s = n(981631);
async function o(e) {
    await i.tn.put({
        url: s.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: r.h.ACCEPTED },
        rejectWithError: !1
    }),
        l.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return i.tn.put({
        url: s.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: r.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function d(e) {
    return i.tn.put({
        url: s.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: r.h.PENDING },
        rejectWithError: !1
    });
}
function u(e) {
    return i.tn.del({
        url: s.ANM.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    });
}
function m(e) {
    return i.tn.put({
        url: s.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e },
        rejectWithError: !1
    });
}
function _() {
    a.Z.getLocationMetadata();
}
