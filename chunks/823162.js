e.d(t, {
    Xy: function () {
        return c;
    },
    e4: function () {
        return o;
    },
    gN: function () {
        return s;
    },
    hi: function () {
        return E;
    },
    qR: function () {
        return d;
    },
    r_: function () {
        return f;
    }
});
var r = e(544891),
    i = e(570140),
    u = e(893776),
    l = e(290323),
    a = e(981631);
async function o(n) {
    await r.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.ACCEPTED },
        rejectWithError: !1
    }),
        i.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: n
        });
}
function d(n) {
    return r.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function c(n) {
    return r.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.PENDING },
        rejectWithError: !1
    });
}
function s(n) {
    return r.tn.del({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        rejectWithError: !1
    });
}
function f(n) {
    return r.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: n },
        rejectWithError: !1
    });
}
function E() {
    u.Z.getLocationMetadata();
}
