n.d(t, {
    Xy: () => d,
    e4: () => s,
    gN: () => u,
    hi: () => m,
    qR: () => c,
    r_: () => _
});
var r = n(544891),
    i = n(570140),
    a = n(893776),
    o = n(290323),
    l = n(981631);
async function s(e) {
    await r.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: o.h.ACCEPTED },
        rejectWithError: !1
    }),
        i.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return r.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: o.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function d(e) {
    return r.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: o.h.PENDING },
        rejectWithError: !1
    });
}
function u(e) {
    return r.tn.del({
        url: l.ANM.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    });
}
function _(e) {
    return r.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e },
        rejectWithError: !1
    });
}
function m() {
    a.Z.getLocationMetadata();
}
