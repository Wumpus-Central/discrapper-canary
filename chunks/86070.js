"use strict";
n.d(t, { FO: () => u, Q1: () => c, r7: () => _, sy: () => d });
var i = n(636537),
    r = n(228366),
    s = n(845584),
    a = n(424994),
    o = n(652215),
    l = n(985018);
let d = async (e) => {
        let { token: t, feedId: n, feature: r } = e;
        try {
            let e = (
                    await i.Bo.get({
                        url: o.Rsh.MY_CONTENT_INVENTORY(t),
                        query: { for_game_profile: n === a.X1.GAME_PROFILE_FEED, feature: r },
                        rejectWithError: !1,
                    })
                ).body,
                s = e.wait_ms_until_next_fetch;
            return null != s && (e.expired_at = new Date(Date.now() + s).toISOString()), e;
        } catch (e) {
            throw new s.LG(e);
        }
    },
    _ = async (e, t) => {
        try {
            r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId: e });
            let n = (await i.Bo.get({ url: o.Rsh.CONTENT_INVENTORY_OUTBOX(e), signal: t, rejectWithError: !1 })).body;
            return r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: n, userId: e }), n;
        } catch (t) {
            throw (r.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId: e }), new s.LG(t));
        }
    },
    u = async (e, t, n) => {
        try {
            r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" }),
                await i.Bo.del({
                    url: o.Rsh.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                    rejectWithError: !1,
                }),
                r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId: t, entry: e }),
                n?.();
        } catch (t) {
            let e = t?.body?.message ?? l.intl.string(l.t.FMbL3s);
            r.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error: e });
        }
    };
async function c(e, t) {
    try {
        await i.Bo.post({
            url: o.Rsh.MY_SPOTIFY_CONTENT_INVENTORY,
            body: { connection_id: e, tracks: [t] },
            rejectWithError: !1,
        });
    } catch (e) {
        throw new s.LG(e);
    }
}
