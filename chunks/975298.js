n.d(t, { Z: () => b }), n(47120), n(230036), n(978209), n(411104);
var r = n(192379),
    i = n(512722),
    o = n.n(i),
    a = n(392711),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(496929),
    d = n(493773),
    f = n(594174),
    _ = n(78839),
    p = n(580130),
    h = n(122289),
    m = n(74538),
    g = n(981631),
    E = n(474936);
function b() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        n = (0, c.Wu)([p.Z], () => p.Z.getFractionalPremium(!1)),
        i = (0, c.e7)([p.Z], () => p.Z.fetchedAllEntitlements),
        s = (0, c.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        b = (0, c.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        [y, v] = r.useState({
            isFractionalPremiumActive: !1,
            fractionalState: E.a$.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: '',
            unactivatedUnits: [],
            fetched: !1
        });
    return (
        (0, d.ZP)(() => {
            (null != t || e) && (p.Z.fetchingAllEntitlements || (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION }));
        }),
        r.useEffect(() => {
            if (null == t || (0 === n.length && 0 === s.length)) {
                let e = {
                    isFractionalPremiumActive: !1,
                    fractionalState: E.a$.NONE,
                    startsAt: l()(0),
                    endsAt: l()(0),
                    currentEntitlementId: '',
                    unactivatedUnits: [],
                    fetched: i
                };
                v((t) => ((0, a.isEqual)(t, e) ? t : e));
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((o()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : +(e.endsAt > t.endsAt)));
            if ((e.reverse(), e.length > 0 && (e.length !== n.length || null == e[0].startsAt || null == e[0].endsAt))) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, h.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            let r = e.length > 0,
                c = E.a$.NONE;
            r && (c = null != b && b.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY),
                v({
                    isFractionalPremiumActive: r,
                    fractionalState: c,
                    startsAt: r ? l()(e[0].startsAt) : l()(0),
                    endsAt: r ? l()((0, m.N1)(e[0].endsAt, s)) : l()(0),
                    currentEntitlementId: e.length > 0 ? e[0].id : '',
                    unactivatedUnits: s,
                    fetched: i
                });
        }, [t, n, b, s, i]),
        y
    );
}
