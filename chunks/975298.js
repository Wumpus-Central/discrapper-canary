n.d(t, { Z: () => S }), n(642613), n(583741), n(388685), n(415506);
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
    let { isFetching: t = !1, entitlements: n, unactivatedFractionalPremiumUnits: r, currentUser: i, premiumSubscription: o, fetchedAllEntitlements: s, excludeReverseTrialFromCountdown: c } = e,
        u = {
            isFractionalPremiumActive: !1,
            fractionalState: E.a$.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: '',
            unactivatedUnits: [],
            fetched: s
        };
    if (t) return v(y({}, u), { fetched: !1 });
    if (null == i || (0 === n.length && 0 === r.length)) return u;
    let d = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : +(e.endsAt > t.endsAt)));
    if ((d.reverse(), d.length > 0 && (d.length !== n.length || null == d[0].startsAt || null == d[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = 'fractional redemption entitlements should have startsAt/endsAt';
        throw ((0, h.g9)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let f = d.length > 0,
        _ = E.a$.NONE;
    f && (_ = null != o && o.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY);
    let p = c && d[0].sourceType === g.kNB.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: f,
        fractionalState: _,
        startsAt: f ? l()(d[0].startsAt) : l()(0),
        endsAt: f ? l()((0, m.N1)(d[0].endsAt, r, void 0, p)) : l()(0),
        currentEntitlementId: d.length > 0 ? d[0].id : '',
        unactivatedUnits: r,
        fetched: s
    };
};
function S() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                  forceFetch: !1,
                  excludeReverseTrial: !1,
                  excludeReverseTrialFromCountdown: !1
              },
        i = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        a = (0, c.Wu)([p.Z], () => p.Z.getFractionalPremium({ excludeReverseTrial: t })),
        s = (0, c.e7)([p.Z], () => p.Z.fetchedAllEntitlements),
        l = (0, c.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        h = (0, c.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        m = null !== i && !p.Z.fetchingAllEntitlements && (!p.Z.fetchedAllEntitlements || e),
        [E, b] = r.useState(
            I({
                isFetching: m || p.Z.fetchingAllEntitlements,
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: s,
                excludeReverseTrialFromCountdown: n
            })
        );
    return (
        (0, d.ZP)(() => {
            m && (0, u.p0)({ entitlementType: g.qc2.FRACTIONAL_REDEMPTION });
        }),
        r.useEffect(() => {
            let e = I({
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: s,
                excludeReverseTrialFromCountdown: n
            });
            b((t) => ((0, o.isEqual)(t, e) ? t : e));
        }, [i, a, h, l, s, n]),
        E
    );
}
