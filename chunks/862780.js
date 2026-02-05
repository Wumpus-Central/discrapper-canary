n.d(t, { A2: () => d, d$: () => o, xt: () => c });
var i = n(265690),
    l = n(121894),
    a = n(52133);
n(661191);
let r = {},
    s = (0, i.h)((e) => ({
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
    return s((t) => t.pollsByChannelId[e] ?? r, a.A);
}
function d(e, t, n) {
    s.getState().updatePollState(e, t, n);
}
function c(e, t) {
    return s.getState().pollsByChannelId[e]?.[t];
}
