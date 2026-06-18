n.d(t, { E: () => s, T: () => a }), n(801541);
var l = n(889137),
    i = n(744593),
    r = n(617754);
function s(e, t) {
    let n = (0, l.YW)(t)
        .with(i.Z.IMAGE_ONLY_ANSWERS, () => r.EK)
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
