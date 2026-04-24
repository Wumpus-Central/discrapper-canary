n.d(t, { E: () => r, T: () => s }), n(801541);
var i = n(889137),
    l = n(966974),
    a = n(617754);
function r(e, t) {
    let n = (0, i.YW)(t)
        .with(l.Z.IMAGE_ONLY_ANSWERS, () => a.EK)
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
function s(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
