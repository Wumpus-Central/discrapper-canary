n.d(t, {
    ZP: () => B,
    sE: () => j
}),
    n(653041),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(710845),
    s = n(301766),
    l = n(255078),
    c = n(314897),
    u = n(122289),
    d = n(981631),
    f = n(474936);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = null,
    E = null,
    v = null,
    b = null,
    y = null,
    O = !1,
    S = !1,
    I = null,
    T = !1,
    N = null,
    A = new a.Z('SubscriptionStore');
function C(e) {
    let { subscriptions: t } = e,
        n = {},
        r = {},
        i = [],
        o = [],
        a = c.default.getId();
    t.forEach((e) => {
        if (e.user_id !== a && !S) {
            A.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: a,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (S = !0);
            return;
        }
        let t = l.Q.createFromServer(e);
        (n[t.id] = t), k(t) && ((r[t.id] = t), t.type === d.NYc.GUILD && t.status !== d.O0b.ENDED && i.push(t), t.type === d.NYc.APPLICATION && t.status !== d.O0b.ENDED && o.push(t));
    }),
        (g = n),
        (E = r),
        (b = i),
        (y = o);
}
function R(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return k(n) && n.status !== d.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function P(e) {
    let { subscription: t } = e,
        n = l.Q.createFromServer(t);
    (g = m(_({}, g), { [n.id]: n })),
        k(n) && (E = m(_({}, E), { [n.id]: n })),
        null != b &&
            n.type === d.NYc.GUILD &&
            (b = R({
                activeSubscriptions: b,
                record: n
            })),
        null != y &&
            n.type === d.NYc.APPLICATION &&
            (b = R({
                activeSubscriptions: y,
                record: n
            }));
}
function w(e) {
    let { subscription: t } = e;
    if (((O = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !S) {
            A.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (O = !1),
                (S = !0);
            return;
        }
        v = l.Q.createFromServer(t);
    }
}
function D(e) {
    let { subscription: t } = e;
    if (((T = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !S) {
            A.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (T = !1),
                (S = !0);
            return;
        }
        I = l.Q.createFromServer(t);
    }
}
function x(e) {
    let { eligible: t } = e;
    N = t;
}
function L(e) {
    let {} = e;
    N = !1;
}
function M() {
    (g = null), (E = null), (v = null), (b = null), (y = null), (O = !1), (S = !1), (I = null), (T = !1);
}
function k(e) {
    return e.status !== d.O0b.UNPAID;
}
function j(e) {
    let t = c.default.getId();
    return e.userId === t;
}
function U(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? E : g;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!j(i)) {
            if (!S) {
                let e = c.default.getId();
                A.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, u.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }),
                    (S = !0);
            }
            break;
        }
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class G extends (r = i.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != g;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return O;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return T;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return U(d.NYc.PREMIUM, (e) => !(0, s.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return U(d.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = U(d.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && f.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? E : g;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == g ? void 0 : g[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return b;
    }
    getActiveApplicationSubscriptions() {
        return y;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? E : g;
        return null == i ? null : null !== (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return v;
    }
    getPreviousPremiumTypeSubscription() {
        return I;
    }
    getIsSubscriptionEligibleForReward() {
        return N;
    }
}
p(G, 'displayName', 'SubscriptionStore');
let B = new G(o.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: P,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: w,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: D,
    BILLING_SUBSCRIPTION_RESET: M,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: x,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: L,
    LOGOUT: M
});
