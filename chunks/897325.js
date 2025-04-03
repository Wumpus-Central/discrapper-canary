n.d(t, {
    E: () => o,
    _: () => l
}),
    n(627341);
var r = n(278074),
    i = n(263568),
    a = n(228127);
function l(e, t) {
    let n = (0, r.EQ)(t)
        .with(i.C.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers)
        .otherwise(() => a.normalStylesDefault);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: a.votedStyles,
            victorSelected: a.victorStyles,
            victorNotSelected: a.victorStyles,
            normalVote: n
        }
    };
}
function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
