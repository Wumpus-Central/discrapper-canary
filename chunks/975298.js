n.d(t, { Z: () => v }), n(47120), n(411104);
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
    h = n(111361),
    m = n(74538),
    g = n(981631),
    E = n(474936);
function v() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        n = (0, l.Wu)([_.Z], () => _.Z.getFractionalPremium(!1)),
        r = (0, l.Wu)([_.Z], () => _.Z.getUnactivatedFractionalPremiumUnits()),
        s = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        [v, y] = i.useState({
            fractionalState: E.a$.NONE,
            startsAt: o()(0),
            endsAt: o()(0),
            currentEntitlementId: '',
            unactivatedUnits: []
        });
    return (
        (0, c.Z)(() => {
            ((null != t && (0, h.I5)(t)) || e) && (_.Z.fetchingAllEntitlements || (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION }));
        }),
        i.useEffect(() => {
            if (null == t || !(0, h.I5)(t) || 0 === n.length) {
                y((e) =>
                    e.endsAt.isSame(o()(0)) && e.fractionalState === E.a$.NONE
                        ? e
                        : {
                              fractionalState: E.a$.NONE,
                              startsAt: o()(0),
                              endsAt: o()(0),
                              currentEntitlementId: '',
                              unactivatedUnits: []
                          }
                );
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : e.endsAt > t.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== n.length || null == e[0].startsAt || null == e[0].endsAt)) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, p.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            y({
                fractionalState: null == s || g.JwP.INACTIVE.has(s.status) || s.isBoostOnly ? E.a$.FP_ONLY : E.a$.FP_SUB_PAUSED,
                startsAt: o()(e[0].startsAt),
                endsAt: o()((0, m.N1)(e[0].endsAt, r)),
                currentEntitlementId: e.length > 0 ? e[0].id : '',
                unactivatedUnits: r
            });
        }, [t, n, s, r]),
        v
    );
}
