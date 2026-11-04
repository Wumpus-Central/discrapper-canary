var i = n(620632),
    r = n(73153),
    a = n(627784),
    s = n(424994),
    l = n(652215),
    o = n(792996);
n.d(
    t,
    {},
    {
        FO: async function (e, t, n) {
            try {
                (r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" }),
                    await i.Bo.del({
                        url: l.Rsh.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                        rejectWithError: (0, i.fT)(),
                    }),
                    r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId: t, entry: e }),
                    n?.());
            } catch (t) {
                let e = t?.body?.message ?? o.intl.string(o.t.FMbL3s);
                r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error: e });
            }
        },
        Q1: async function (e, t) {
            try {
                await i.Bo.post({
                    url: l.Rsh.MY_SPOTIFY_CONTENT_INVENTORY,
                    body: { connection_id: e, tracks: [t] },
                    rejectWithError: (0, i.fT)(),
                });
            } catch (e) {
                throw new a.LG(e);
            }
        },
        r7: async function (e, t) {
            try {
                r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId: e });
                let n = (
                    await i.Bo.get({ url: l.Rsh.CONTENT_INVENTORY_OUTBOX(e), signal: t, rejectWithError: (0, i.fT)() })
                ).body;
                return (r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: n, userId: e }), n);
            } catch (t) {
                throw (r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId: e }), new a.LG(t));
            }
        },
        sy: async function (e) {
            let { token: t, feedId: n, feature: r } = e;
            try {
                let e = (
                        await i.Bo.get({
                            url: l.Rsh.MY_CONTENT_INVENTORY(t),
                            query: { for_game_profile: n === s.X1.GAME_PROFILE_FEED, feature: r },
                            rejectWithError: (0, i.fT)(),
                        })
                    ).body,
                    a = e.wait_ms_until_next_fetch;
                return (null != a && (e.expired_at = new Date(Date.now() + a).toISOString()), e);
            } catch (e) {
                throw new a.LG(e);
            }
        },
    },
);
