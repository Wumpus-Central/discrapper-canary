n.d(t, { Z: () => E }), n(47120), n(230036), n(978209), n(411104);
var r = n(192379),
    i = n(512722),
    o = n.n(i),
    a = n(913527),
    s = n.n(a),
    l = n(442837),
    c = n(496929),
    u = n(493773),
    d = n(594174),
    f = n(78839),
    p = n(580130),
    _ = n(122289),
    h = n(74538),
    m = n(981631),
    g = n(474936);
function E() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        n = (0, l.Wu)([p.Z], () => p.Z.getFractionalPremium(!1)),
        i = (0, l.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        a = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        [E, v] = r.useState({
            fractionalState: g.a$.NONE,
            startsAt: s()(0),
            endsAt: s()(0),
            currentEntitlementId: '',
            unactivatedUnits: []
        });
    return (
        (0, u.ZP)(() => {
            (null != t || e) && (p.Z.fetchingAllEntitlements || (0, c.p0)({ entitlementType: m.qc2.FRACTIONAL_REDEMPTION }));
        }),
        r.useEffect(() => {
            if (null == t || (0 === n.length && 0 === i.length)) {
                v((e) =>
                    e.endsAt.isSame(s()(0)) && e.fractionalState === g.a$.NONE
                        ? e
                        : {
                              fractionalState: g.a$.NONE,
                              startsAt: s()(0),
                              endsAt: s()(0),
                              currentEntitlementId: '',
                              unactivatedUnits: []
                          }
                );
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((o()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : +(e.endsAt > t.endsAt)));
            if ((e.reverse(), e.length > 0 && (e.length !== n.length || null == e[0].startsAt || null == e[0].endsAt))) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, _.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            let r = e.length > 0,
                l = r ? g.a$.FP_ONLY : g.a$.NONE;
            null != a && a.status === m.O0b.PAUSED && (l = g.a$.FP_SUB_PAUSED),
                v({
                    fractionalState: l,
                    startsAt: r ? s()(e[0].startsAt) : s()(0),
                    endsAt: r ? s()((0, h.N1)(e[0].endsAt, i)) : s()(0),
                    currentEntitlementId: e.length > 0 ? e[0].id : '',
                    unactivatedUnits: i
                });
        }, [t, n, a, i]),
        E
    );
}
