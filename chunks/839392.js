n.d(t, { Z: () => d });
var a,
    i,
    r = n(442837),
    l = n(570140);
let o = {},
    s = {};
class c extends (i = r.ZP.Store) {
    getSimilarGames(e) {
        return o[e];
    }
    getSimilarGamesError(e) {
        return s[e];
    }
}
(a = "displayName") in c
    ? Object.defineProperty(c, a, {
          value: "GameProfileStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[a] = "GameProfileStore");
let d = new c(l.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        o[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        s[t] = n;
    },
});
