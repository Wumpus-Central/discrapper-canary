n.d(t, { Eq: () => d }), n(477900);
var i = n(582128),
    r = n(435558),
    a = n.n(r);
n(52133);
var s = n(361610),
    l = n(38405);
let o = !1;
function d(e, t) {
    i.useEffect(
        () => (
            a().forEach(e, (e, n) => {
                !o &&
                    e.length > 50 &&
                    ((o = !0),
                    l.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: n, reason: t },
                    })),
                    (0, s.un)(n, e);
            }),
            () => {
                a().forEach(e, (e, t) => (0, s.NE)(t, e));
            }
        ),
        [e, t],
    );
}
