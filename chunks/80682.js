n.d(t, { Eq: () => u, JM: () => o }), n(627968);
var s = n(64700),
    i = n(735438),
    l = n.n(i);
n(52133);
var r = n(361610),
    a = n(38405);
let o = 50,
    d = !1;
function u(e, t) {
    s.useEffect(
        () => (
            l().forEach(e, (e, n) => {
                !d &&
                    e.length > o &&
                    ((d = !0),
                    a.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: n, reason: t },
                    })),
                    (0, r.un)(n, e);
            }),
            () => {
                l().forEach(e, (e, t) => (0, r.NE)(t, e));
            }
        ),
        [e, t],
    );
}
