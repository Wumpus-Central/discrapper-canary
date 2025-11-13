n.d(t, { Z: () => d });
var i,
    l,
    r = n(442837),
    a = n(570140);
let s = {},
    o = {};
class c extends (l = r.ZP.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return o[e];
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "GameProfileStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "GameProfileStore");
let d = new c(a.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        s[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        o[t] = n;
    },
});
