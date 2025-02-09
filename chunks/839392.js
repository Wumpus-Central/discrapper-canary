n.d(t, { Z: () => u });
var r,
    a,
    i,
    o = n(442837),
    l = n(570140);
let s = {},
    c = {};
class d extends (i = o.ZP.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return c[e];
    }
}
(a = 'GameProfileStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = a);
let u = new d(l.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        s[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        c[t] = n;
    }
});
