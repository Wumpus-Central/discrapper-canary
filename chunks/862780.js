var l = n(882035),
    i = n(121894),
    s = n(52133);
n(811091);
let r = {},
    o = (0, l.h)((e) => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, l) {
            (0, i.r)(() => {
                e((e) => {
                    let i = l(e.pollsByChannelId[t]?.[n]);
                    return {
                        pollsByChannelId: { ...e.pollsByChannelId, [t]: { ...e.pollsByChannelId[t], [n]: i } },
                        pollsByMessageId: { ...e.pollsByMessageId, [n]: i },
                    };
                });
            });
        },
    }));
n.d(
    t,
    {},
    {
        A2: function (e, t, n) {
            o.getState().updatePollState(e, t, n);
        },
        d$: function (e) {
            return o((t) => t.pollsByChannelId[e] ?? r, s.A);
        },
        xt: function (e, t) {
            return o.getState().pollsByChannelId[e]?.[t];
        },
    },
);
