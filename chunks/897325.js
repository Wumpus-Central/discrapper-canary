n.d(t, {
    E: function () {
        return o;
    },
    _: function () {
        return a;
    }
}),
    n(627341);
var i = n(278074),
    r = n(263568),
    l = n(606384);
function a(e, t) {
    let n = (0, i.EQ)(t)
        .with(r.C.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers)
        .otherwise(() => l.normalStylesDefault);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: l.votedStyles,
            victorSelected: l.victorStyles,
            victorNotSelected: l.victorStyles,
            normalVote: n
        }
    };
}
function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
