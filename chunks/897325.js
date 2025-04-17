n.d(t, {
    E: () => o,
    _: () => a
}),
    n(314940);
var r = n(278074),
    i = n(263568),
    l = n(228127);
function a(e, t) {
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
            normalVote: n
        }
    };
}
function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
