n.d(t, {
    A: () => l,
    t: () => o,
});
var r = n(562465),
    i = n(73153),
    a = n(895944),
    s = n(652215);
async function o() {
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
async function l() {
    a.A.shouldFetch() && (await o());
}
