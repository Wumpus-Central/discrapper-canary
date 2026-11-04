var n = E(620632),
    o = E(73153),
    e = E(830215),
    u = E(961523),
    c = E(652215);
E.d(
    r,
    {},
    {
        JH: function (t) {
            return n.Bo.put({
                url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
                body: { consent_status: u.w.UNSPECIFIED },
                rejectWithError: (0, n.fT)(),
            });
        },
        RK: async function (t) {
            (await n.Bo.put({
                url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
                body: { consent_status: u.w.ACCEPTED },
                rejectWithError: (0, n.fT)(),
            }),
                o.h.dispatch({ type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: t }));
        },
        ST: function (t) {
            return n.Bo.put({
                url: c.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
                body: { channel_ids: t },
                rejectWithError: (0, n.fT)(),
            });
        },
        Sk: function (t) {
            return n.Bo.put({
                url: c.Rsh.CHANNEL_RECIPIENT_ME(t),
                body: { consent_status: u.w.PENDING },
                rejectWithError: (0, n.fT)(),
            });
        },
        UK: function (t) {
            return n.Bo.del({ url: c.Rsh.CHANNEL_RECIPIENT_ME(t), rejectWithError: (0, n.fT)() });
        },
        xf: function () {
            e.A.getLocationMetadata();
        },
    },
);
