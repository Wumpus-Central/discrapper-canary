"use strict";
n.d(t, { E: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(451988),
    o = n(73153),
    l = n(311043),
    u = n(652215);
async function d(e) {
    try {
        let t = (
            await s.Bo.get({
                url: u.Rsh.GAMES,
                query: { game_ids: e, with_supplemental_data: !0 },
                rejectWithError: !0,
            })
        ).body;
        o.h.dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: e, games: t });
    } catch {
        o.h.dispatch({ type: "GAME_FETCH_FAILURE", gameIds: e });
    }
}
let c = new a.OC(
    async (e) => {
        o.h.dispatch({ type: "GAME_FETCH", gameIds: e }), await Promise.all(i().chunk(e, 20).map(d));
    },
    (e) => !l.A.hasNoData(e),
);
async function _(e) {
    0 !== e.length && (await c.queue(e));
}
