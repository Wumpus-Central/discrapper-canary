n.d(t, {
    E: () => s,
    _: () => r
}),
    n(627341);
var i = n(278074),
    l = n(263568),
    a = n(232828);
function r(e, t) {
    let n = (0, i.EQ)(t)
        .with(l.C.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers)
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
function s(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
