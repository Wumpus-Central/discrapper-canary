n.d(t, {
    cE: () => o,
    eu: () => c,
    fU: () => d
});
var i = n(65400),
    l = n(731965),
    a = n(902704);
let r = {},
    s = (0, i.F)((e) => ({
        polls: {},
        updatePollState(t, n, i) {
            (0, l.j)(() => {
                e((e) => {
                    var l;
                    return {
                        polls: {
                            ...e.polls,
                            [t]: {
                                ...e.polls[t],
                                [n]: i(null === (l = e.polls[t]) || void 0 === l ? void 0 : l[n])
                            }
                        }
                    };
                });
            });
        }
    }));
function o(e) {
    return s((t) => {
        var n;
        return null !== (n = t.polls[e]) && void 0 !== n ? n : r;
    }, a.Z);
}
function c(e, t, n) {
    s.getState().updatePollState(e, t, n);
}
function d(e, t) {
    var n;
    return null === (n = s.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}
