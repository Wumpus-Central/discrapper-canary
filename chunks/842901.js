n.d(t, { E: () => a, T: () => s }), n(801541);
var i = n(889137),
    r = n(966974),
    l = n(48693);
function a(e, t) {
    let n = (0, i.YW)(t)
        .with(r.Z.IMAGE_ONLY_ANSWERS, () => l.EK)
        .otherwise(() => l.fD);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: l.pq,
            victorSelected: l.iu,
            victorNotSelected: l.iu,
            normalVote: n,
        },
    };
}
function s(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
