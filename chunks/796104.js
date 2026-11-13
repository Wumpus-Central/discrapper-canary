var r = a(402102),
    i = a(620632),
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
a.d(
    t,
    {},
    {
        IB: function (e, t) {
            return n.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
        },
        K8: function () {
            (n.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" }), (0, b.d3)(f.A.isMuted));
        },
        fr: async function (e, t) {
            let a = await s.A.getOrEnsurePrivateChannel(t),
                r = o.A.getChannel(a);
            if (null == r) throw Error("Failed to open private channel");
            let i = d.Ay.parse(r, e),
                n = await c.A.sendMessage(r.id, i, !1, { location: "checkpoint-sidekick" });
            return ((0, b.S5)(t), n);
        },
        jA: async function (e, t, a) {
            let r = (await Promise.all(e.map(l.pk))).filter(u.Vq);
            for (let e of await Promise.allSettled(
                r.map((e) => {
                    let r = o.A.getChannel(e);
                    if (null != r)
                        return c.A.sendMessage(r.id, d.Ay.parse(r, t), !1, {
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
                let { body: t } = await i.Bo.get({ url: p.Rsh.CHECKPOINT, rejectWithError: !0 }),
                    a = {
                        stats: null != t.stats ? (0, h.BF)(t.stats) : null,
                        globalStats: (0, h._R)(t.global_stats),
                        character: t.character,
                        compactAssets: t.compact_assets,
                        availability: r.u.FULL,
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
            n.h.dispatch({ type: "CHECKPOINT_RESET_START" });
            try {
                return (
                    await i.Bo.del({ url: p.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
                    n.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
                    !0
                );
            } catch {
                return (n.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
            }
        },
        yE: async function (e) {
            n.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            try {
                return (
                    await i.Bo.post({ url: p.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
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
