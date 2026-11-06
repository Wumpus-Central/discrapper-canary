var i = n(435558),
    r = n.n(i),
    a = n(620632),
    s = n(451988),
    l = n(73153),
    o = n(311043),
    d = n(652215);
async function c(e) {
    try {
        let t = (await a.Bo.get({ url: d.Rsh.GAMES, query: { game_ids: e }, rejectWithError: !0 })).body;
        l.h.dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: e, games: t });
    } catch {
        l.h.dispatch({ type: "GAME_FETCH_FAILURE", gameIds: e });
    }
}
let u = new s.OC(
    async (e) => {
        await Promise.all(r().chunk(e, 20).map(c));
    },
    {
        predicate: (e) => !o.A.hasNoData(e),
        onQueued: (e) => l.h.dispatch({ type: "GAME_FETCH", gameIds: e }),
        onCancelled: (e) => l.h.dispatch({ type: "GAME_FETCH_CANCELLED", gameIds: e }),
    },
);
n.d(
    t,
    {},
    {
        E: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            0 !== e.length && (t && l.h.dispatch({ type: "GAME_FETCH", gameIds: e, force: t }), await u.queue(e));
        },
    },
);
