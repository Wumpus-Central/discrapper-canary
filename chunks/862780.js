n.d(t, { A2: () => u, d$: () => a, xt: () => d });
var l = n(882035),
    i = n(121894),
    s = n(52133);
n(935208);
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
function a(e) {
    return o((t) => t.pollsByChannelId[e] ?? r, s.A);
}
function u(e, t, n) {
    o.getState().updatePollState(e, t, n);
}
function d(e, t) {
    return o.getState().pollsByChannelId[e]?.[t];
}
