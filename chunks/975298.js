n.d(t, { Z: () => b }), n(388685), n(642613), n(583741), n(415506);
var r = n(73800),
    i = n(512722),
    a = n.n(i),
    o = n(392711),
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
    let { forceFetch: e, excludeReverseTrial: t } =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      forceFetch: !1,
                      excludeReverseTrial: !1
                  },
        n = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        i = (0, c.Wu)([p.Z], () => p.Z.getFractionalPremium({ excludeReverseTrial: t })),
        s = (0, c.e7)([p.Z], () => p.Z.fetchedAllEntitlements),
        b = (0, c.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        y = (0, c.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        [O, v] = r.useState({
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
            (null != n || e) && (p.Z.fetchingAllEntitlements || (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION }));
        }),
        r.useEffect(() => {
            if (null == n || (0 === i.length && 0 === b.length)) {
                let e = {
                    isFractionalPremiumActive: !1,
                    fractionalState: E.a$.NONE,
                    startsAt: l()(0),
                    endsAt: l()(0),
                    currentEntitlementId: '',
                    unactivatedUnits: [],
                    fetched: s
                };
                v((t) => ((0, o.isEqual)(t, e) ? t : e));
                return;
            }
            let e = i.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : +(e.endsAt > t.endsAt)));
            if ((e.reverse(), e.length > 0 && (e.length !== i.length || null == e[0].startsAt || null == e[0].endsAt))) {
                let e = Array.from(i.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, h.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            let t = e.length > 0,
                r = E.a$.NONE;
            t && (r = null != y && y.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY),
                v({
                    isFractionalPremiumActive: t,
                    fractionalState: r,
                    startsAt: t ? l()(e[0].startsAt) : l()(0),
                    endsAt: t ? l()((0, m.N1)(e[0].endsAt, b)) : l()(0),
                    currentEntitlementId: e.length > 0 ? e[0].id : '',
                    unactivatedUnits: b,
                    fetched: s
                });
        }, [n, i, y, b, s]),
        O
    );
}
