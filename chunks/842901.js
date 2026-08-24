n.d(t, { E: () => r, T: () => o }), n(801541);
var l = n(889137),
    i = n(744593),
    s = n(191567);
function r(e, t) {
    let n = (0, l.YW)(t)
        .with(i.Z.IMAGE_ONLY_ANSWERS, () => s.EK)
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
function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
