n.d(t, {
    Xy: function () {
        return u;
    },
    e4: function () {
        return s;
    },
    gN: function () {
        return d;
    },
    hi: function () {
        return h;
    },
    qR: function () {
        return c;
    },
    r_: function () {
        return m;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(893776),
    a = n(290323),
    o = n(981631);
async function s(e) {
    await i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.ACCEPTED },
        rejectWithError: !1
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function u(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.PENDING },
        rejectWithError: !1
    });
}
function d(e) {
    return i.tn.del({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    });
}
function m(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e },
        rejectWithError: !1
    });
}
function h() {
    l.Z.getLocationMetadata();
}
