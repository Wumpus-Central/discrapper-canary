n.d(t, {
    N: () => s,
});
var l = n(562465),
    r = n(73153),
    i = n(198982),
    a = n(652215);
let s = async (e) => {
    try {
        var t;
        let n = (
            null !=
            (t = (
                await l.Bo.get({
                    url: a.Rsh.SIMILAR_GAMES(e),
                    rejectWithError: !1,
                })
            ).body.similar_games)
                ? t
                : []
        ).filter((t) => t !== e);
        r.h.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: n,
        });
    } catch (e) {
        throw new i.LG(e);
    }
};
