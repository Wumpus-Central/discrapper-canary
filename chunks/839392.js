r.d(t, { Z: () => d });
var n,
    a,
    o,
    i = r(442837),
    s = r(570140);
let l = {},
    c = {};
class u extends (o = i.ZP.Store) {
    getSimilarGames(e) {
        return l[e];
    }
    getSimilarGamesError(e) {
        return c[e];
    }
}
(a = 'GameProfileStore'),
    (n = 'displayName') in u
        ? Object.defineProperty(u, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[n] = a);
let d = new u(s.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: r } = e;
        l[t] = r;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: r } = e;
        c[t] = r;
    }
});
