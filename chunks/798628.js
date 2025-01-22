n.d(t, {
    cE: function () {
        return s;
    },
    eu: function () {
        return c;
    },
    fU: function () {
        return u;
    }
});
var i = n(65400),
    r = n(731965),
    l = n(902704);
let a = {},
    o = (0, i.F)((e) => ({
        polls: {},
        updatePollState(t, n, i) {
            (0, r.j)(() => {
                e((e) => {
                    var r;
                    return {
                        polls: {
                            ...e.polls,
                            [t]: {
                                ...e.polls[t],
                                [n]: i(null === (r = e.polls[t]) || void 0 === r ? void 0 : r[n])
                            }
                        }
                    };
                });
            });
        }
    }));
function s(e) {
    return o((t) => {
        var n;
        return null !== (n = t.polls[e]) && void 0 !== n ? n : a;
    }, l.Z);
}
function c(e, t, n) {
    o.getState().updatePollState(e, t, n);
}
function u(e, t) {
    var n;
    return null === (n = o.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}
