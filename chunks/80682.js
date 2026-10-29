n.d(t, { Eq: () => c, k6: () => u });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(361610),
    l = n(860071),
    o = n(38405);
let d = !1;
function c(e, t) {
    i.useEffect(
        () => (
            a().forEach(e, (e, n) => {
                (!d &&
                    e.length > 50 &&
                    ((d = !0),
                    o.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: n, reason: t },
                    })),
                    (0, s.un)(n, e));
            }),
            () => {
                a().forEach(e, (e, t) => (0, s.NE)(t, e));
            }
        ),
        [e, t],
    );
}
function u(e, t) {
    let n = i.useMemo(() => (0 === t.length ? {} : { [e]: t }), [e, t]);
    (i.useEffect(() => {
        t.forEach((t) => l.A.requestMember(e, t));
    }, [e, t]),
        c(n, "useEnsureHydratedGuildUsers"));
}
