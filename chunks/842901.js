n.d(t, {
    E: () => s,
    T: () => o,
}),
    n(801541);
var r = n(889137),
    i = n(966974),
    a = n(48693);
function s(e, t) {
    let n = (0, r.YW)(t)
        .with(i.Z.IMAGE_ONLY_ANSWERS, () => a.EK)
        .otherwise(() => a.fD);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: a.pq,
            victorSelected: a.iu,
            victorNotSelected: a.iu,
            normalVote: n,
        },
    };
}
function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
