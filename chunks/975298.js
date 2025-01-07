r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(913527),
    c = r.n(u),
    d = r(442837),
    f = r(496929),
    _ = r(493773),
    h = r(594174),
    p = r(78839),
    m = r(580130),
    g = r(122289),
    E = r(111361),
    v = r(74538),
    I = r(981631),
    T = r(474936);
function b() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        n = (0, d.e7)([h.default], () => h.default.getCurrentUser()),
        r = (0, d.Wu)([m.Z], () => m.Z.getFractionalPremium(!1)),
        i = (0, d.Wu)([m.Z], () => m.Z.getUnactivatedFractionalPremiumUnits()),
        a = (0, d.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        [o, u] = s.useState({
            fractionalState: T.a$.NONE,
            endsAt: c()(0),
            currentEntitlementId: ''
        });
    return (
        (0, _.Z)(() => {
            if ((null != n && !!(0, E.I5)(n)) || !!e) !m.Z.fetchingAllEntitlements && (0, f.p0)({ entitlementType: I.qc2.FRACTIONAL_REDEMPTION });
        }),
        s.useEffect(() => {
            if (null == n || !(0, E.I5)(n) || 0 === r.length) {
                u((e) =>
                    e.endsAt.isSame(c()(0)) && e.fractionalState === T.a$.NONE
                        ? e
                        : {
                              fractionalState: T.a$.NONE,
                              endsAt: c()(0),
                              currentEntitlementId: ''
                          }
                );
                return;
            }
            let e = r.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, n) => ((l()(null != e.endsAt && null != n.endsAt, 'endsAt should not be null'), e.endsAt < n.endsAt) ? -1 : e.endsAt > n.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== r.length || null == e[0].endsAt)) {
                let e = Array.from(r.values()).map((e) => e.id),
                    n = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, g.g9)(n, { extra: { entitlementIds: e } }), Error(n));
            }
            u({
                fractionalState: null == a || I.JwP.INACTIVE.has(a.status) || a.isBoostOnly ? T.a$.FP_ONLY : T.a$.FP_SUB_PAUSED,
                endsAt: c()((0, v.N1)(e[0].endsAt, i)),
                currentEntitlementId: e.length > 0 ? e[0].id : ''
            });
        }, [n, r, a, i]),
        o
    );
}
