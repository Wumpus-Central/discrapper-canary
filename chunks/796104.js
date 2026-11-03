a.d(t, { IB: () => x, K8: () => p, fr: () => w, jA: () => I, l4: () => m, nX: () => g, sm: () => v, yE: () => A });
var s = a(636537),
    i = a(73153),
    r = a(308528),
    n = a(148494),
    c = a(451909),
    d = a(223863),
    l = a(734057),
    o = a(403362),
    u = a(148295),
    h = a(407905),
    f = a(719718),
    _ = a(617390),
    b = a(652215);
function p() {
    return i.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function x(e, t) {
    return i.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
function m(e) {
    return i.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
}
async function g(e) {
    if ((f.A.initializeIfNeeded(), f.A.isFetching)) return f.T.FETCHING;
    i.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
    try {
        let { body: t } = await s.Bo.get({ url: b.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                i.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (0, u.g)(e),
                    globalStats: (0, h._R)(t.global_stats),
                    character: null,
                }),
                f.T.SUCCESS
            );
        return (
            i.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats: null != t.stats ? (0, h.BF)(t.stats) : null,
                globalStats: (0, h._R)(t.global_stats),
                character: t.character,
            }),
            f.T.SUCCESS
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), f.T.ERROR);
    }
}
async function A(e) {
    i.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await s.Bo.post({ url: b.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            i.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            (0, _.$D)(),
            !0
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function v() {
    i.h.dispatch({ type: "CHECKPOINT_RESET_START" });
    try {
        return (
            await s.Bo.del({ url: b.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
            i.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
            !0
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
    }
}
async function w(e, t) {
    let a = await r.A.getOrEnsurePrivateChannel(t),
        s = l.A.getChannel(a);
    if (null == s) throw Error("Failed to open private channel");
    let i = c.Ay.parse(s, e),
        d = await n.A.sendMessage(s.id, i, !1, { location: "checkpoint-sidekick" });
    return ((0, _.S5)(t), d);
}
async function I(e, t, a) {
    let s = (await Promise.all(e.map(d.pk))).filter(o.Vq);
    for (let e of await Promise.allSettled(
        s.map((e) => {
            let s = l.A.getChannel(e);
            if (null != s)
                return n.A.sendMessage(s.id, c.Ay.parse(s, t), !1, { location: "checkpoint", checkpointCardType: a });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
