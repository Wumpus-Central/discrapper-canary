n.d(t, {
    E: () => a,
    _: () => o,
}),
    n(314940);
var r = n(278074),
    i = n(263568),
    l = n(807554);
function o(e, t) {
    let n = (0, r.EQ)(t)
        .with(i.C.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers)
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
            normalVote: n,
        },
    };
}
function a(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
