n.d(t, { A2: () => u, d$: () => o, xt: () => d });
var l = n(882035),
    i = n(121894),
    r = n(52133);
n(935208);
let s = {},
    a = (0, l.h)((e) => ({
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
function o(e) {
    return a((t) => t.pollsByChannelId[e] ?? s, r.A);
}
function u(e, t, n) {
    a.getState().updatePollState(e, t, n);
}
function d(e, t) {
    return a.getState().pollsByChannelId[e]?.[t];
}
