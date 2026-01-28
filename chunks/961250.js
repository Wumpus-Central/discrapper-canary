n.d(t, {
    Ay: () => c,
    tT: () => l,
    uM: () => u,
});
var r = n(562465),
    i = n(73153),
    a = n(895944),
    o = n(26508),
    s = n(652215);
async function l() {
    i.h.dispatch({
        type: "PROGRAM_REWARDS_FETCH",
    });
    try {
        var e;
        let t =
            null !=
            (e = (
                await r.Bo.get({
                    url: s.Rsh.PROGRAM_REWARDS,
                    rejectWithError: !0,
                })
            ).body.rewards)
                ? e
                : [];
        i.h.dispatch({
            type: "PROGRAM_REWARDS_FETCH_SUCCESS",
            programRewards: t,
        });
    } catch (e) {
        i.h.dispatch({
            type: "PROGRAM_REWARDS_FETCH_FAILURE",
        });
    }
}
async function c() {
    a.A.shouldFetch() && (await l());
}
async function u() {
    (0, o.T0)("ProgramRewardsActionCreators") && (0, o.mY)() && (await l());
}
