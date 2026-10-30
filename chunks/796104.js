n.d(t, { IB: () => j, K8: () => g, fr: () => N, jA: () => S, kP: () => v, nX: () => A, sm: () => p, yE: () => E });
var r = n(636537),
    a = n(73153),
    s = n(308528),
    l = n(148494),
    i = n(451909),
    c = n(223863),
    o = n(734057),
    d = n(174459),
    u = n(403362),
    m = n(148295),
    h = n(407905),
    x = n(719718),
    f = n(652215);
function g() {
    return a.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function j(e, t) {
    return a.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
function v() {
    return a.h.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
}
async function A(e) {
    (x.A.initializeIfNeeded(), a.h.dispatch({ type: "CHECKPOINT_FETCH_START" }));
    try {
        let { body: t } = await r.Bo.get({ url: f.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                a.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (0, m.g)(e),
                    globalStats: (0, h._R)(t.global_stats),
                    character: null,
                }),
                !0
            );
        return (
            a.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats: null != t.stats ? (0, h.BF)(t.stats) : null,
                globalStats: (0, h._R)(t.global_stats),
                character: t.character,
            }),
            !0
        );
    } catch {
        return (a.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), !1);
    }
}
async function E(e) {
    a.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await r.Bo.post({ url: f.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            a.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            !0
        );
    } catch {
        return (a.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function p() {
    a.h.dispatch({ type: "CHECKPOINT_RESET_START" });
    try {
        return (
            await r.Bo.del({ url: f.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
            a.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
            !0
        );
    } catch {
        return (a.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
    }
}
async function N(e, t) {
    let n = await s.A.getOrEnsurePrivateChannel(t),
        r = o.A.getChannel(n);
    if (null == r) throw Error("Failed to open private channel");
    d.default.track(f.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let a = i.Ay.parse(r, e);
    return l.A.sendMessage(r.id, a, !1, { location: "checkpoint-sidekick" });
}
async function S(e, t, n) {
    let r = (await Promise.all(e.map(c.pk))).filter(u.Vq);
    for (let e of await Promise.allSettled(
        r.map((e) => {
            let r = o.A.getChannel(e);
            if (null != r)
                return l.A.sendMessage(r.id, i.Ay.parse(r, t), !1, { location: "checkpoint", checkpointCardType: n });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
