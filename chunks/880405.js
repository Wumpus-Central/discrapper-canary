i.d(t, { N: () => r });
var l = i(562465),
    a = i(73153),
    n = i(198982),
    s = i(652215);
let r = async (e) => {
    try {
        let t = (
            (await l.Bo.get({ url: s.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
        ).filter((t) => t !== e);
        a.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
    } catch (e) {
        throw new n.LG(e);
    }
};
