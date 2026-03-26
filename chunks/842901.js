n.d(t, { E: () => l, T: () => s }), n(801541);
var i = n(889137),
    a = n(966974),
    r = n(108234);
function l(e, t) {
    let n = (0, i.YW)(t)
        .with(a.Z.IMAGE_ONLY_ANSWERS, () => r.EK)
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
