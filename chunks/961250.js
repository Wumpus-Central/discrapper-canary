"use strict";
n.d(t, { Ay: () => c, uM: () => d });
var r = n(562465),
    i = n(73153),
    s = n(895944),
    a = n(26508),
    o = n(673608),
    l = n(652215);
async function u() {
    i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        let e = (await r.Bo.get({ url: l.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
        i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
        i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function c() {
    (0, o.q)() && (await u());
}
async function d() {
    !(0, a.g_)("ProgramRewardsActionCreators") || !(0, a.mY)() || s.A.isFetching() || (await u());
}
