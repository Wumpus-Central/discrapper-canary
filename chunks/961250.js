"use strict";
n.d(t, { Ay: () => u, uM: () => c });
var r = n(562465),
    i = n(73153),
    a = n(895944),
    s = n(26508),
    o = n(652215);
async function l() {
    i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        let e = (await r.Bo.get({ url: o.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
        i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
        i.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function u() {
    a.A.shouldFetch() && (await l());
}
async function c() {
    (0, s.T0)("ProgramRewardsActionCreators") && (0, s.mY)() && (await l());
}
