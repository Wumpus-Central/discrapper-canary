"use strict";
n.d(t, { FO: () => d, Q1: () => _, r7: () => c, sy: () => u });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(424994),
    o = n(652215),
    l = n(985018);
let u = async (e) => {
        let { token: t, feedId: n, feature: i } = e;
        try {
            let e = (
                    await r.Bo.get({
                        url: o.Rsh.MY_CONTENT_INVENTORY(t),
                        query: { for_game_profile: n === a.X1.GAME_PROFILE_FEED, feature: i },
                        rejectWithError: !1,
                    })
                ).body,
                s = e.wait_ms_until_next_fetch;
            return null != s && (e.expired_at = new Date(Date.now() + s).toISOString()), e;
        } catch (e) {
            throw new s.LG(e);
        }
    },
    c = async (e, t) => {
        try {
            i.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId: e });
            let n = (await r.Bo.get({ url: o.Rsh.CONTENT_INVENTORY_OUTBOX(e), signal: t, rejectWithError: !1 })).body;
            return i.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: n, userId: e }), n;
        } catch (t) {
            throw (i.h.dispatch({ type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId: e }), new s.LG(t));
        }
    },
    d = async (e, t, n) => {
        try {
            i.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" }),
                await r.Bo.del({
                    url: o.Rsh.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                    rejectWithError: !1,
                }),
                i.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId: t, entry: e }),
                n?.();
        } catch (t) {
            let e = t?.body?.message ?? l.intl.string(l.t.FMbL3s);
            i.h.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error: e });
        }
    };
async function _(e, t) {
    try {
        await r.Bo.post({
            url: o.Rsh.MY_SPOTIFY_CONTENT_INVENTORY,
            body: { connection_id: e, tracks: [t] },
            rejectWithError: !1,
        });
    } catch (e) {
        throw new s.LG(e);
    }
}
