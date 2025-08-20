r.d(t, { i: () => s });
var n = r(544891),
    i = r(570140),
    l = r(881052),
    a = r(981631);
let s = async (e) => {
    try {
        var t;
        let r = (
            null !=
            (t = (
                await n.tn.get({
                    url: a.ANM.SIMILAR_GAMES(e),
                    rejectWithError: !1,
                })
            ).body.similar_games)
                ? t
                : []
        ).filter((t) => t !== e);
        i.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: r,
        });
    } catch (e) {
        throw new l.Hx(e);
    }
};
