n.d(t, {
    E: () => l,
    _: () => o
}),
    n(627341);
var r = n(278074),
    i = n(263568),
    a = n(205518);
function o(e, t) {
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
function l(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
