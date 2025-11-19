n.d(t, { Z: () => S }), n(642613), n(583741), n(388685), n(415506);
var r = n(473749),
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
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    var t;
    let {
            isFetching: n = !1,
            entitlements: r,
            unactivatedFractionalPremiumUnits: i,
            currentUser: o,
            premiumSubscription: s,
            fetchedAllEntitlements: c,
            excludeReverseTrialFromCountdown: u,
        } = e,
        d = {
            isFractionalPremiumActive: !1,
            fractionalState: E.a$.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: "",
            unactivatedUnits: [],
            fetched: c,
        };
    if (n) return v(y({}, d), { fetched: !1 });
    if (null == o || (0 === r.length && 0 === i.length)) return d;
    let f = r
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((f.reverse(), f.length > 0 && (f.length !== r.length || null == f[0].startsAt || null == f[0].endsAt))) {
        let e = Array.from(r.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, h.g9)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let _ = null != (t = f[0]) ? t : null,
        p = E.a$.NONE;
    null != _ && (p = null != s && s.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY);
    let b = u && (null == _ ? void 0 : _.sourceType) === g.kNB.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != _,
        fractionalState: p,
        startsAt: null != _ ? l()(_.startsAt) : l()(0),
        endsAt: null != _ ? l()((0, m.N1)(_.endsAt, i, void 0, b)) : l()(0),
        currentEntitlementId: null != _ ? _.id : "",
        unactivatedUnits: i,
        fetched: c,
    };
};
function T(e, t) {
    return null != t && !p.Z.fetchingAllEntitlements && (!p.Z.fetchedAllEntitlements || e);
}
function S() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                  forceFetch: !1,
                  excludeReverseTrial: !1,
                  excludeReverseTrialFromCountdown: !1,
              },
        i = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        a = (0, c.Wu)([p.Z], () => p.Z.getFractionalPremium({ excludeReverseTrial: t })),
        s = (0, c.e7)([p.Z], () => p.Z.fetchedAllEntitlements),
        l = (0, c.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        h = (0, c.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        [m, E] = r.useState(
            I({
                isFetching: T(e, i) || p.Z.fetchingAllEntitlements,
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: s,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, d.ZP)(() => {
            T(e, i) && (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION });
        }),
        r.useEffect(() => {
            let e = I({
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: s,
                excludeReverseTrialFromCountdown: n,
            });
            E((t) => ((0, o.isEqual)(t, e) ? t : e));
        }, [i, a, h, l, s, n]),
        m
    );
}
