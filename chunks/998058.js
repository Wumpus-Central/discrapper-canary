r.d(t, { i: () => l });
var n = r(544891),
    a = r(570140),
    o = r(881052),
    i = r(981631);
let l = async (e) => {
    try {
        var t;
        let r = (
            null !=
            (t = (
                await n.tn.get({
                    url: i.ANM.SIMILAR_GAMES(e),
                    rejectWithError: !1
                })
            ).body.similar_games)
                ? t
                : []
        ).filter((t) => t !== e);
        a.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: r
        });
    } catch (e) {
        throw new o.Hx(e);
    }
};
