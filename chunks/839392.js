r.d(t, { Z: () => d });
var n,
    i,
    a,
    l = r(442837),
    s = r(570140);
let o = {},
    c = {};
class u extends (a = l.ZP.Store) {
    getSimilarGames(e) {
        return o[e];
    }
    getSimilarGamesError(e) {
        return c[e];
    }
}
(i = 'GameProfileStore'),
    (n = 'displayName') in u
        ? Object.defineProperty(u, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[n] = i);
let d = new u(s.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: r } = e;
        o[t] = r;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: r } = e;
        c[t] = r;
    }
});
