n.d(t, { i: () => l });
var r = n(544891),
    a = n(570140),
    i = n(881052),
    o = n(981631);
let l = async (e) => {
    try {
        var t;
        let n = await r.tn.get({
                url: o.ANM.SIMILAR_GAMES(e),
                rejectWithError: !1
            }),
            i = (null !== (t = n.body.similar_games) && void 0 !== t ? t : []).filter((t) => t !== e);
        a.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: i
        });
    } catch (e) {
        throw new i.Hx(e);
    }
};
