n.d(t, { Eq: () => c, JM: () => o }), n(627968);
var i = n(64700),
    l = n(735438),
    a = n.n(l);
n(52133);
var s = n(361610),
    r = n(728458);
let o = 50,
    d = !1;
function c(e, t) {
    i.useEffect(
        () => (
            a().forEach(e, (e, n) => {
                !d &&
                    e.length > o &&
                    ((d = !0),
                    r.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
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
