t.d(s, { Eq: () => d, JM: () => n }), t(627968);
var a = t(64700),
    c = t(735438),
    r = t.n(c);
t(52133);
var u = t(361610),
    h = t(38405);
let n = 50,
    i = !1;
function d(e, s) {
    a.useEffect(
        () => (
            r().forEach(e, (e, t) => {
                !i &&
                    e.length > n &&
                    ((i = !0),
                    h.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: t, reason: s },
                    })),
                    (0, u.un)(t, e);
            }),
            () => {
                r().forEach(e, (e, s) => (0, u.NE)(s, e));
            }
        ),
        [e, s],
    );
}
