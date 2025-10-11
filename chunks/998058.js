n.d(t, { i: () => s });
var i = n(544891),
    r = n(570140),
    l = n(881052),
    a = n(981631);
let s = async (e) => {
    try {
        var t;
        let n = (
            null !=
            (t = (
                await i.tn.get({
                    url: a.ANM.SIMILAR_GAMES(e),
                    rejectWithError: !1,
                })
            ).body.similar_games)
                ? t
                : []
        ).filter((t) => t !== e);
        r.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: n,
        });
    } catch (e) {
        throw new l.Hx(e);
    }
};
