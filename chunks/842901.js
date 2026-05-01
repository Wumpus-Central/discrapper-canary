n.d(t, { E: () => a, T: () => r }), n(801541);
var i = n(889137),
    l = n(966974),
    s = n(617754);
function a(e, t) {
    let n = (0, i.YW)(t)
        .with(l.Z.IMAGE_ONLY_ANSWERS, () => s.EK)
        .otherwise(() => s.fD);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: s.pq,
            victorSelected: s.iu,
            victorNotSelected: s.iu,
            normalVote: n,
        },
    };
}
function r(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
