n.d(t, { Z: () => u });
var i,
    r,
    a,
    l = n(442837),
    o = n(570140);
let s = {},
    c = {};
class d extends (a = l.ZP.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return c[e];
    }
}
(r = 'GameProfileStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = r);
let u = new d(o.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        s[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        c[t] = n;
    }
});
