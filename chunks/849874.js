n.d(t, { nX: () => p, kP: () => A, yE: () => E, IB: () => v, jA: () => S, fr: () => N, K8: () => j });
var r = n(636537),
    a = n(73153),
    s = n(308528),
    l = n(148494),
    i = n(451909),
    c = n(223863),
    o = n(734057),
    u = n(174459),
    d = n(403362);
let m = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } },
    h = {
        voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
        messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
        guilds: { guilds: [] },
        emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
        games: {
            totalGamesPlayed: 0,
            totalGamesPlayedPercentile: 0,
            games: [],
            totalDaysPlayed: 0,
            totalDaysPlayedPercentile: 0,
        },
        sidekick: null,
        users: [],
        power: { powerLevel: 0, powerLevelPercentile: 0 },
    };
var x = n(407905),
    g = n(719718),
    f = n(652215);
function j() {
    return a.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function v(e, t) {
    return a.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
function A() {
    return a.h.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
}
async function p(e) {
    (g.A.initializeIfNeeded(), a.h.dispatch({ type: "CHECKPOINT_FETCH_START" }));
    try {
        let { body: t } = await r.Bo.get({ url: f.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                a.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (function (e) {
                        switch (e) {
                            case 0:
                                return m;
                            case 1:
                                return null;
                            case 2:
                                return h;
                        }
                    })(e),
                    globalStats: (0, x._R)(t.global_stats),
                    character: null,
                }),
                !0
            );
        return (
            a.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats: null != t.stats ? (0, x.BF)(t.stats) : null,
                globalStats: (0, x._R)(t.global_stats),
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
async function N(e, t) {
    let n = await s.A.getOrEnsurePrivateChannel(t),
        r = o.A.getChannel(n);
    if (null == r) throw Error("Failed to open private channel");
    u.default.track(f.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let a = i.Ay.parse(r, e);
    return l.A.sendMessage(r.id, a, !1, { location: "checkpoint-sidekick" });
}
async function S(e, t, n) {
    let r = (await Promise.all(e.map(c.pk))).filter(d.Vq);
    for (let e of await Promise.allSettled(
        r.map((e) => {
            let r = o.A.getChannel(e);
            if (null != r)
                return l.A.sendMessage(r.id, i.Ay.parse(r, t), !1, { location: "checkpoint", checkpointCardType: n });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
