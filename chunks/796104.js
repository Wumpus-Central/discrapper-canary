a.d(t, { IB: () => x, K8: () => p, fr: () => w, jA: () => I, l4: () => m, nX: () => g, sm: () => v, yE: () => A });
var r = a(636537),
    s = a(73153),
    i = a(308528),
    c = a(148494),
    n = a(451909),
    d = a(223863),
    l = a(734057),
    o = a(174459),
    u = a(403362),
    h = a(148295),
    f = a(407905),
    _ = a(719718),
    b = a(652215);
function p() {
    return s.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function x(e, t) {
    return s.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
function m(e) {
    return s.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
}
async function g(e) {
    if ((_.A.initializeIfNeeded(), _.A.isFetching)) return _.T.FETCHING;
    s.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
    try {
        let { body: t } = await r.Bo.get({ url: b.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                s.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (0, h.g)(e),
                    globalStats: (0, f._R)(t.global_stats),
                    character: null,
                }),
                _.T.SUCCESS
            );
        return (
            s.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats: null != t.stats ? (0, f.BF)(t.stats) : null,
                globalStats: (0, f._R)(t.global_stats),
                character: t.character,
            }),
            _.T.SUCCESS
        );
    } catch {
        return (s.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), _.T.ERROR);
    }
}
async function A(e) {
    s.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await r.Bo.post({ url: b.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            s.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            !0
        );
    } catch {
        return (s.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function v() {
    s.h.dispatch({ type: "CHECKPOINT_RESET_START" });
    try {
        return (
            await r.Bo.del({ url: b.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
            s.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
            !0
        );
    } catch {
        return (s.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
    }
}
async function w(e, t) {
    let a = await i.A.getOrEnsurePrivateChannel(t),
        r = l.A.getChannel(a);
    if (null == r) throw Error("Failed to open private channel");
    o.default.track(b.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let s = n.Ay.parse(r, e);
    return c.A.sendMessage(r.id, s, !1, { location: "checkpoint-sidekick" });
}
async function I(e, t, a) {
    let r = (await Promise.all(e.map(d.pk))).filter(u.Vq);
    for (let e of await Promise.allSettled(
        r.map((e) => {
            let r = l.A.getChannel(e);
            if (null != r)
                return c.A.sendMessage(r.id, n.Ay.parse(r, t), !1, { location: "checkpoint", checkpointCardType: a });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
