r.d(t, { i: () => s });
var n = r(544891),
    a = r(570140),
    o = r(881052),
    i = r(981631);
let s = async (e) => {
    try {
        var t;
        let r = await n.tn.get({
                url: i.ANM.SIMILAR_GAMES(e),
                rejectWithError: !1
            }),
            o = (null !== (t = r.body.similar_games) && void 0 !== t ? t : []).filter((t) => t !== e);
        a.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: o
        });
    } catch (e) {
        throw new o.Hx(e);
    }
};
