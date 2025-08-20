r.d(t, { Z: () => u });
var n,
    i,
    l = r(442837),
    a = r(570140);
let s = {},
    o = {};
class c extends (i = l.ZP.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return o[e];
    }
}
(n = "displayName") in c
    ? Object.defineProperty(c, n, {
          value: "GameProfileStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[n] = "GameProfileStore");
let u = new c(a.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: r } = e;
        s[t] = r;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: r } = e;
        o[t] = r;
    },
});
