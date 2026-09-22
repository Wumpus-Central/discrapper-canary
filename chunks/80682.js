(n.d(t, { Eq: () => u, k6: () => _ }), n(477900));
var i = n(582128),
    r = n(435558),
    a = n.n(r);
n(52133);
var s = n(361610),
    l = n(860071),
    o = n(287809),
    d = n(38405);
let c = !1;
function u(e, t) {
    i.useEffect(
        () => (
            a().forEach(e, (e, n) => {
                (!c &&
                    e.length > 50 &&
                    ((c = !0),
                    d.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
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
function _(e, t) {
    let n = i.useMemo(() => (0 === t.length ? {} : { [e]: t }), [e, t]);
    (i.useEffect(() => {
        t.forEach((t) => {
            null == o.default.getUser(t) && l.A.requestMember(e, t);
        });
    }, [e, t]),
        u(n, "useEnsureHydratedGuildUsers"));
}
