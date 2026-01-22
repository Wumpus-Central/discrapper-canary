n.d(t, {
    JH: () => c,
    RK: () => l,
    ST: () => f,
    Sk: () => u,
    UK: () => d,
    xf: () => p,
});
var r = n(562465),
    i = n(73153),
    a = n(830215),
    s = n(961523),
    o = n(652215);
async function l(e) {
    await r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.ACCEPTED,
        },
        rejectWithError: !1,
    }),
        i.h.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
        });
}

function c(e) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.UNSPECIFIED,
        },
        rejectWithError: !1,
    });
}

function u(e) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.PENDING,
        },
        rejectWithError: !1,
    });
}

function d(e) {
    return r.Bo.del({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1,
    });
}

function f(e) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: e,
        },
        rejectWithError: !1,
    });
}

function p() {
    a.A.getLocationMetadata();
}
