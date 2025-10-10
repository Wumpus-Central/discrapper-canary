n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140);
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
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "GameProfileStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "GameProfileStore");
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
