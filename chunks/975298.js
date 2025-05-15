n.d(t, { Z: () => S }), n(642613), n(583741), n(388685), n(415506);
var r = n(73800),
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
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    let { isFetching: t = !1, entitlements: n, unactivatedFractionalPremiumUnits: r, currentUser: i, premiumSubscription: a, fetchedAllEntitlements: s } = e,
        c = {
            isFractionalPremiumActive: !1,
            fractionalState: E.a$.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: '',
            unactivatedUnits: [],
            fetched: s
        };
    if (t) return v(y({}, c), { fetched: !1 });
    if (null == i || (0 === n.length && 0 === r.length)) return c;
    let u = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((o()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : +(e.endsAt > t.endsAt)));
    if ((u.reverse(), u.length > 0 && (u.length !== n.length || null == u[0].startsAt || null == u[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = 'fractional redemption entitlements should have startsAt/endsAt';
        throw ((0, h.g9)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let d = u.length > 0,
        f = E.a$.NONE;
    return (
        d && (f = null != a && a.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY),
        {
            isFractionalPremiumActive: d,
            fractionalState: f,
            startsAt: d ? l()(u[0].startsAt) : l()(0),
            endsAt: d ? l()((0, m.N1)(u[0].endsAt, r)) : l()(0),
            currentEntitlementId: u.length > 0 ? u[0].id : '',
            unactivatedUnits: r,
            fetched: s
        }
    );
};
function S() {
    let { forceFetch: e, excludeReverseTrial: t } =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      forceFetch: !1,
                      excludeReverseTrial: !1
                  },
        n = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        i = (0, c.Wu)([p.Z], () => p.Z.getFractionalPremium({ excludeReverseTrial: t })),
        o = (0, c.e7)([p.Z], () => p.Z.fetchedAllEntitlements),
        s = (0, c.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        l = (0, c.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        h = null !== n && !p.Z.fetchingAllEntitlements && (!p.Z.fetchedAllEntitlements || e),
        [m, E] = r.useState(
            I({
                isFetching: h || p.Z.fetchingAllEntitlements,
                entitlements: i,
                unactivatedFractionalPremiumUnits: s,
                currentUser: n,
                premiumSubscription: l,
                fetchedAllEntitlements: o
            })
        );
    return (
        (0, d.ZP)(() => {
            h && (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION });
        }),
        r.useEffect(() => {
            let e = I({
                entitlements: i,
                unactivatedFractionalPremiumUnits: s,
                currentUser: n,
                premiumSubscription: l,
                fetchedAllEntitlements: o
            });
            E((t) => ((0, a.isEqual)(t, e) ? t : e));
        }, [n, i, l, s, o]),
        m
    );
}
