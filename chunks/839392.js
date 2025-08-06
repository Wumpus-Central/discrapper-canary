r.d(t, { Z: () => u });
var n,
    a,
    i,
    l = r(442837),
    o = r(570140);
let s = {},
    c = {};
class d extends (i = l.ZP.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return c[e];
    }
}
(a = "GameProfileStore"),
    (n = "displayName") in d
        ? Object.defineProperty(d, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (d[n] = a);
let u = new d(o.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: r } = e;
        s[t] = r;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: r } = e;
        c[t] = r;
    },
});
