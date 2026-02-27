n.d(t, { E: () => a, T: () => s }), n(801541);
var i = n(889137),
    l = n(966974),
    r = n(48693);
function a(e, t) {
    let n = (0, i.YW)(t)
        .with(l.Z.IMAGE_ONLY_ANSWERS, () => r.EK)
        .otherwise(() => r.fD);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: r.pq,
            victorSelected: r.iu,
            victorNotSelected: r.iu,
            normalVote: n,
        },
    };
}
function s(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
