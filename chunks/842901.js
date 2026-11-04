n(801541);
var l = n(889137),
    i = n(744593),
    s = n(191567);
n.d(
    t,
    {},
    {
        E: function (e, t) {
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
        },
        T: function (e, t) {
            return e.getAvatarURL(t, 20, !1);
        },
    },
);
