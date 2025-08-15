r.d(t, { Z: () => u });
var n,
    a,
    i = r(442837),
    l = r(570140);
let o = {},
    s = {};
class c extends (a = i.ZP.Store) {
    getSimilarGames(e) {
        return o[e];
    }
    getSimilarGamesError(e) {
        return s[e];
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
let u = new c(l.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: r } = e;
        o[t] = r;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: r } = e;
        s[t] = r;
    },
});
