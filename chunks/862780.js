n.d(t, { A2: () => d, d$: () => o, xt: () => c });
var i = n(265690),
    l = n(121894),
    s = n(52133);
n(935208);
let r = {},
    a = (0, i.h)((e) => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, i) {
            (0, l.r)(() => {
                e((e) => {
                    let l = i(e.pollsByChannelId[t]?.[n]);
                    return {
                        pollsByChannelId: { ...e.pollsByChannelId, [t]: { ...e.pollsByChannelId[t], [n]: l } },
                        pollsByMessageId: { ...e.pollsByMessageId, [n]: l },
                    };
                });
            });
        },
    }));
function o(e) {
    return a((t) => t.pollsByChannelId[e] ?? r, s.A);
}
function d(e, t, n) {
    a.getState().updatePollState(e, t, n);
}
function c(e, t) {
    return a.getState().pollsByChannelId[e]?.[t];
}
