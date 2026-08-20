n.d(t, { E: () => s, T: () => a }), n(801541);
var i = n(889137),
    l = n(744593),
    r = n(191567);
function s(e, t) {
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
function a(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
