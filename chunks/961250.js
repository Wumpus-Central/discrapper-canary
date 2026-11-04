var i = n(620632),
    r = n(73153),
    a = n(895944),
    s = n(26508),
    l = n(544978),
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
n.d(
    t,
    {},
    {
        Ay: async function () {
            (0, l.q)() && (await d());
        },
        uM: async function () {
            !(0, s.CZ)() || a.A.isFetching() || (await d());
        },
    },
);
