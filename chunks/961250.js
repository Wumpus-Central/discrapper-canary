"use strict";
n.d(t, { Ay: () => c, uM: () => d });
var i = n(636537),
    r = n(228366),
    s = n(532309),
    a = n(51935),
    o = n(150092),
    l = n(652215);
async function u() {
    r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        let e = (await i.Bo.get({ url: l.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function c() {
    (0, o.q)() && (await u());
}
async function d() {
    !(0, a.CZ)("ProgramRewardsActionCreators") || s.A.isFetching() || (await u());
}
