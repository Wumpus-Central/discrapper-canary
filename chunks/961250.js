"use strict";
n.d(t, { Ay: () => _, uM: () => u });
var i = n(636537),
    r = n(228366),
    s = n(532309),
    a = n(26508),
    o = n(673608),
    l = n(652215);
async function d() {
    r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        let e = (await i.Bo.get({ url: l.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
        r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function _() {
    (0, o.q)() && (await d());
}
async function u() {
    !(0, a.g_)("ProgramRewardsActionCreators") || !(0, a.mY)() || s.A.isFetching() || (await d());
}
