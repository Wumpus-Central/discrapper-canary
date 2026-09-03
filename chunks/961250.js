n.d(t, { Ay: () => c, uM: () => u });
var i = n(636537),
    r = n(228366),
    a = n(532309),
    s = n(26508),
    l = n(150092),
    o = n(652215);
async function d() {
    r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        let e = (await i.Bo.get({ url: o.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function c() {
    (0, l.q)() && (await d());
}
async function u() {
    !(0, s.CZ)("ProgramRewardsActionCreators") || a.A.isFetching() || (await d());
}
