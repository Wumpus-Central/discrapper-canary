var i = a(620632),
    r = a(73153),
    s = a(308528),
    n = a(138399),
    c = a(451909),
    d = a(223863),
    l = a(734057),
    o = a(403362),
    u = a(148295),
    h = a(407905),
    f = a(719718),
    b = a(617390),
    _ = a(652215);
a.d(
    t,
    {},
    {
        IB: function (e, t) {
            return r.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
        },
        K8: function () {
            (r.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" }), (0, b.d3)(f.A.isMuted));
        },
        fr: async function (e, t) {
            let a = await s.A.getOrEnsurePrivateChannel(t),
                i = l.A.getChannel(a);
            if (null == i) throw Error("Failed to open private channel");
            let r = c.Ay.parse(i, e),
                d = await n.A.sendMessage(i.id, r, !1, { location: "checkpoint-sidekick" });
            return ((0, b.S5)(t), d);
        },
        jA: async function (e, t, a) {
            let i = (await Promise.all(e.map(d.pk))).filter(o.Vq);
            for (let e of await Promise.allSettled(
                i.map((e) => {
                    let i = l.A.getChannel(e);
                    if (null != i)
                        return n.A.sendMessage(i.id, c.Ay.parse(i, t), !1, {
                            location: "checkpoint",
                            checkpointCardType: a,
                        });
                }),
            ))
                if ("rejected" === e.status) throw e.reason;
        },
        l4: function (e) {
            return r.h.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: e });
        },
        ls: function (e) {
            return r.h.dispatch({ type: "CHECKPOINT_SET_VOLUME", volume: e });
        },
        nX: async function (e) {
            if ((f.A.initializeIfNeeded(), f.A.isFetching)) return f.T.FETCHING;
            r.h.dispatch({ type: "CHECKPOINT_FETCH_START" });
            try {
                let { body: t } = await i.Bo.get({ url: _.Rsh.CHECKPOINT, rejectWithError: !0 });
                if (null != e)
                    return (
                        r.h.dispatch({
                            type: "CHECKPOINT_FETCH_SUCCESS",
                            stats: (0, u.g)(e),
                            globalStats: (0, h._R)(t.global_stats),
                            character: null,
                        }),
                        f.T.SUCCESS
                    );
                return (
                    r.h.dispatch({
                        type: "CHECKPOINT_FETCH_SUCCESS",
                        stats: null != t.stats ? (0, h.BF)(t.stats) : null,
                        globalStats: (0, h._R)(t.global_stats),
                        character: t.character,
                    }),
                    f.T.SUCCESS
                );
            } catch {
                return (r.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), f.T.ERROR);
            }
        },
        sm: async function () {
            r.h.dispatch({ type: "CHECKPOINT_RESET_START" });
            try {
                return (
                    await i.Bo.del({ url: _.Rsh.CHECKPOINT_RESET, rejectWithError: !0 }),
                    r.h.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" }),
                    !0
                );
            } catch {
                return (r.h.dispatch({ type: "CHECKPOINT_RESET_FAILED" }), !1);
            }
        },
        yE: async function (e) {
            r.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            try {
                return (
                    await i.Bo.post({ url: _.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
                    r.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
                    (0, b.$D)(),
                    !0
                );
            } catch {
                return (r.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
            }
        },
    },
);
