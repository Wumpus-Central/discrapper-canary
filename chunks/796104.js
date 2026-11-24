var i = a(402102),
    r = a(620632),
    n = a(73153),
    s = a(308528),
    c = a(138399),
    d = a(451909),
    l = a(223863),
    o = a(734057),
    u = a(403362),
    h = a(407905),
    f = a(719718),
    b = a(617390),
    p = a(652215);
function _() {
    return n.h.dispatch({ type: "CHECKPOINT_RESET_PROGRESS" });
}
async function m() {
    try {
        return (await r.Bo.del({ url: p.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }), !0);
    } catch {
        return !1;
    }
}
a.d(
    t,
    {},
    {
        BS: _,
        IB: function (e, t) {
            return n.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
        },
        K8: function () {
            (n.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" }), (0, b.d3)(f.A.isMuted));
        },
        Z0: m,
        fr: async function (e, t) {
            let a = await s.A.getOrEnsurePrivateChannel(t),
                i = o.A.getChannel(a);
            if (null == i) throw Error("Failed to open private channel");
            let r = d.Ay.parse(i, e),
                n = await c.A.sendMessage(i.id, r, !1, { location: "checkpoint-sidekick" });
            return ((0, b.S5)(t), n);
        },
        jA: async function (e, t, a) {
            let i = (await Promise.all(e.map(l.pk))).filter(u.Vq);
            for (let e of await Promise.allSettled(
                i.map((e) => {
                    let i = o.A.getChannel(e);
                    if (null != i)
                        return c.A.sendMessage(i.id, d.Ay.parse(i, t), !1, {
                            location: "checkpoint",
                            checkpointCardType: a,
                        });
                }),
            ))
                if ("rejected" === e.status) throw e.reason;
        },
        l4: function (e) {
            return n.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
        },
        ls: function (e) {
            return n.h.dispatch({ type: "CHECKPOINT_SET_VOLUME", volume: e });
        },
        nX: async function (e) {
            if ((f.A.initializeIfNeeded(), f.A.isFetching)) return f.T.FETCHING;
            n.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
            try {
                let { body: t } = await r.Bo.get({ url: p.Rsh.CHECKPOINT, rejectWithError: !0 }),
                    a = {
                        stats: null != t.stats ? (0, h.BF)(t.stats) : null,
                        globalStats: (0, h._R)(t.global_stats),
                        character: t.character,
                        compactAssets: t.compact_assets,
                        availability: i.u.FULL,
                    },
                    s = e?.stats !== void 0 ? e.stats : a.stats,
                    c = e?.character !== void 0 ? e.character : a.character,
                    d = e?.compactAssets ?? a.compactAssets,
                    l = e?.availability ?? a.availability;
                return (
                    n.h.dispatch({
                        type: "CHECKPOINT_FETCH_SUCCESS",
                        stats: s,
                        globalStats: a.globalStats,
                        character: c,
                        compactAssets: d,
                        availability: l,
                    }),
                    f.T.SUCCESS
                );
            } catch {
                return (n.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), f.T.ERROR);
            }
        },
        sm: async function () {
            let e = await m();
            return (e && _(), e);
        },
        yE: async function (e) {
            n.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            try {
                return (
                    await r.Bo.post({ url: p.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
                    n.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
                    (0, b.$D)(),
                    !0
                );
            } catch {
                return (n.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
            }
        },
    },
);
