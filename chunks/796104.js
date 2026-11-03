a.d(t, { IB: () => m, K8: () => x, fr: () => I, jA: () => E, l4: () => g, nX: () => A, sm: () => w, yE: () => v });
var s = a(636537),
    i = a(73153),
    r = a(308528),
    n = a(148494),
    c = a(451909),
    d = a(223863),
    l = a(734057),
    o = a(174459),
    u = a(403362),
    h = a(148295),
    f = a(407905),
    _ = a(719718),
    b = a(617390),
    p = a(652215);
function x() {
    return i.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function m(e, t) {
    return i.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
function g(e) {
    return i.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
}
async function A(e) {
    if ((_.A.initializeIfNeeded(), _.A.isFetching)) return _.T.FETCHING;
    i.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
    try {
        let { body: t } = await s.Bo.get({ url: p.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                i.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (0, h.g)(e),
                    globalStats: (0, f._R)(t.global_stats),
                    character: null,
                }),
                _.T.SUCCESS
            );
        return (
            i.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats: null != t.stats ? (0, f.BF)(t.stats) : null,
                globalStats: (0, f._R)(t.global_stats),
                character: t.character,
            }),
            _.T.SUCCESS
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), _.T.ERROR);
    }
}
async function v(e) {
    i.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await s.Bo.post({ url: p.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            i.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            (0, b.$D)(),
            !0
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function w() {
    i.h.dispatch({ type: "CHECKPOINT_RESET_START" });
    try {
        return (
            await s.Bo.del({ url: p.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
            i.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
            !0
        );
    } catch {
        return (i.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
    }
}
async function I(e, t) {
    let a = await r.A.getOrEnsurePrivateChannel(t),
        s = l.A.getChannel(a);
    if (null == s) throw Error("Failed to open private channel");
    o.default.track(p.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let i = c.Ay.parse(s, e);
    return n.A.sendMessage(s.id, i, !1, { location: "checkpoint-sidekick" });
}
async function E(e, t, a) {
    let s = (await Promise.all(e.map(d.pk))).filter(u.Vq);
    for (let e of await Promise.allSettled(
        s.map((e) => {
            let s = l.A.getChannel(e);
            if (null != s)
                return n.A.sendMessage(s.id, c.Ay.parse(s, t), !1, { location: "checkpoint", checkpointCardType: a });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
