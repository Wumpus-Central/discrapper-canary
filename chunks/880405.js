n.d(t, { N: () => s });
var a = n(562465),
    l = n(73153),
    i = n(198982),
    r = n(652215);
let s = async (e) => {
    try {
        let t = (
            (await a.Bo.get({ url: r.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
        ).filter((t) => t !== e);
        l.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
    } catch (e) {
        throw new i.LG(e);
    }
};
