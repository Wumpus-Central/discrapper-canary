n.d(t, { i: () => o });
var i = n(544891),
    r = n(570140),
    a = n(881052),
    l = n(981631);
let o = async (e) => {
    try {
        var t;
        let n = await i.tn.get({
                url: l.ANM.SIMILAR_GAMES(e),
                rejectWithError: !1
            }),
            a = (null !== (t = n.body.similar_games) && void 0 !== t ? t : []).filter((t) => t !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: a
        });
    } catch (e) {
        throw new a.Hx(e);
    }
};
