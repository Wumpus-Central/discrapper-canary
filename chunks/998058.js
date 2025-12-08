n.d(t, { i: () => o });
var a = n(544891),
    i = n(570140),
    r = n(881052),
    l = n(981631);
let o = async (e) => {
    try {
        var t;
        let n = (
            null !=
            (t = (
                await a.tn.get({
                    url: l.ANM.SIMILAR_GAMES(e),
                    rejectWithError: !1,
                })
            ).body.similar_games)
                ? t
                : []
        ).filter((t) => t !== e);
        i.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: n,
        });
    } catch (e) {
        throw new r.Hx(e);
    }
};
