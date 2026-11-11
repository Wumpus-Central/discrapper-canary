var r = a(402102),
    i = a(620632),
    s = a(73153),
    n = a(308528),
    c = a(138399),
    d = a(451909),
    l = a(223863),
    o = a(734057),
    u = a(403362),
    h = a(148295),
    f = a(407905),
    b = a(719718),
    _ = a(617390),
    p = a(652215);
a.d(
    t,
    {},
    {
        IB: function (e, t) {
            return s.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
        },
        K8: function () {
            (s.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" }), (0, _.d3)(b.A.isMuted));
        },
        fr: async function (e, t) {
            let a = await n.A.getOrEnsurePrivateChannel(t),
                r = o.A.getChannel(a);
            if (null == r) throw Error("Failed to open private channel");
            let i = d.Ay.parse(r, e),
                s = await c.A.sendMessage(r.id, i, !1, { location: "checkpoint-sidekick" });
            return ((0, _.S5)(t), s);
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
            return s.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
        },
        ls: function (e) {
            return s.h.dispatch({ type: "CHECKPOINT_SET_VOLUME", volume: e });
        },
        nX: async function (e) {
            if ((b.A.initializeIfNeeded(), b.A.isFetching)) return b.T.FETCHING;
            s.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
            try {
                let { body: t } = await i.Bo.get({ url: p.Rsh.CHECKPOINT, rejectWithError: !0 }),
                    a = t.compact_assets,
                    n = r.u.FULL,
                    c = n === r.u.FULL ? t.character : null;
                if (null != e)
                    return (
                        s.h.dispatch({
                            type: "CHECKPOINT_FETCH_SUCCESS",
                            stats: (0, h.g)(e),
                            globalStats: (0, f._R)(t.global_stats),
                            character: null,
                            compactAssets: a,
                            availability: n,
                        }),
                        b.T.SUCCESS
                    );
                return (
                    s.h.dispatch({
                        type: "CHECKPOINT_FETCH_SUCCESS",
                        stats: null != t.stats ? (0, f.BF)(t.stats) : null,
                        globalStats: (0, f._R)(t.global_stats),
                        character: c,
                        compactAssets: a,
                        availability: n,
                    }),
                    b.T.SUCCESS
                );
            } catch {
                return (s.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), b.T.ERROR);
            }
        },
        sm: async function () {
            s.h.dispatch({ type: "CHECKPOINT_RESET_START" });
            try {
                return (
                    await i.Bo.del({ url: p.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
                    s.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
                    !0
                );
            } catch {
                return (s.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
            }
        },
        yE: async function (e) {
            s.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            try {
                return (
                    await i.Bo.post({ url: p.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
                    s.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
                    (0, _.$D)(),
                    !0
                );
            } catch {
                return (s.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
            }
        },
    },
);
