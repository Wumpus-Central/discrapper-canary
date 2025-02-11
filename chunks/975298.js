n.d(t, { Z: () => E }), n(47120), n(411104);
var i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(496929),
    c = n(493773),
    d = n(594174),
    f = n(78839),
    _ = n(580130),
    p = n(122289),
    h = n(74538),
    m = n(981631),
    g = n(474936);
function E() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        n = (0, l.Wu)([_.Z], () => _.Z.getFractionalPremium(!1)),
        r = (0, l.Wu)([_.Z], () => _.Z.getUnactivatedFractionalPremiumUnits()),
        s = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        [E, v] = i.useState({
            fractionalState: g.a$.NONE,
            startsAt: o()(0),
            endsAt: o()(0),
            currentEntitlementId: '',
            unactivatedUnits: []
        });
    return (
        (0, c.ZP)(() => {
            (null != t || e) && (_.Z.fetchingAllEntitlements || (0, u.p0)({ entitlementType: m.qc2.FRACTIONAL_REDEMPTION }));
        }),
        i.useEffect(() => {
            if (null == t || (0 === n.length && 0 === r.length)) {
                v((e) =>
                    e.endsAt.isSame(o()(0)) && e.fractionalState === g.a$.NONE
                        ? e
                        : {
                              fractionalState: g.a$.NONE,
                              startsAt: o()(0),
                              endsAt: o()(0),
                              currentEntitlementId: '',
                              unactivatedUnits: []
                          }
                );
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : e.endsAt > t.endsAt ? 1 : 0));
            if ((e.reverse(), e.length > 0 && (e.length !== n.length || null == e[0].startsAt || null == e[0].endsAt))) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, p.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            let i = e.length > 0,
                l = i ? g.a$.FP_ONLY : g.a$.NONE;
            null != s && s.status === m.O0b.PAUSED && (l = g.a$.FP_SUB_PAUSED),
                v({
                    fractionalState: l,
                    startsAt: i ? o()(e[0].startsAt) : o()(0),
                    endsAt: i ? o()((0, h.N1)(e[0].endsAt, r)) : o()(0),
                    currentEntitlementId: e.length > 0 ? e[0].id : '',
                    unactivatedUnits: r
                });
        }, [t, n, s, r]),
        E
    );
}
