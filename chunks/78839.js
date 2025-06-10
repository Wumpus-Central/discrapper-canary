n.d(t, {
    ZP: () => Z,
    sE: () => B
}),
    n(539854),
    n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(710845),
    s = n(301766),
    l = n(255078),
    c = n(314897),
    u = n(122289),
    d = n(981631),
    f = n(474936);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
    b = null,
    y = null,
    O = null,
    v = !1,
    I = !1,
    T = null,
    S = !1,
    A = !1,
    N = null,
    C = null,
    R = new o.Z('SubscriptionStore');
function P(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        o = [],
        s = c.default.getId();
    t.forEach((e) => {
        if (e.user_id !== s && !I) {
            R.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: s,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (I = !0);
            return;
        }
        let t = l.Q.createFromServer(e);
        (r[t.id] = t), G(t) && ((i[t.id] = t), t.type === d.NYc.GUILD && t.status !== d.O0b.ENDED && a.push(t), t.type === d.NYc.APPLICATION && t.status !== d.O0b.ENDED && o.push(t));
    }),
        (g = r),
        (E = i),
        (y = a),
        (O = o),
        (C = n);
}
function w(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return G(n) && n.status !== d.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function D(e) {
    let { subscription: t } = e,
        n = l.Q.createFromServer(t);
    (g = m(p({}, g), { [n.id]: n })),
        G(n) && (E = m(p({}, E), { [n.id]: n })),
        null != y &&
            n.type === d.NYc.GUILD &&
            (y = w({
                activeSubscriptions: y,
                record: n
            })),
        null != O &&
            n.type === d.NYc.APPLICATION &&
            (y = w({
                activeSubscriptions: O,
                record: n
            }));
}
function L(e) {
    let { subscription: t } = e;
    if (((v = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !I) {
            R.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (v = !1),
                (I = !0);
            return;
        }
        b = l.Q.createFromServer(t);
    }
}
function x(e) {
    let { subscription: t } = e;
    if (((S = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !I) {
            R.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (S = !1),
                (I = !0);
            return;
        }
        T = l.Q.createFromServer(t);
    }
}
function M() {
    A = !0;
}
function k(e) {
    let { eligible: t } = e;
    (N = t), (A = !1);
}
function j(e) {
    let {} = e;
    (N = !1), (A = !1);
}
function U() {
    (g = null), (E = null), (b = null), (y = null), (O = null), (v = !1), (I = !1), (T = null), (S = !1), (A = !1), (C = null);
}
function G(e) {
    return e.status !== d.O0b.UNPAID;
}
function B(e) {
    let t = c.default.getId();
    return e.userId === t;
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? E : g;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!B(i)) {
            if (!I) {
                let e = c.default.getId();
                R.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, u.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }),
                    (I = !0);
            }
            break;
        }
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class V extends (r = i.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != g;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return v;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return S;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return F(d.NYc.PREMIUM, (e) => !(0, s.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return F(d.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = F(d.NYc.PREMIUM, void 0, !0);
        return null != e && null != e.trialId && !!f.h8.includes(e.trialId) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? E : g;
    }
    getSubscriptionById(e) {
        var t;
        return null != (t = null == g ? void 0 : g[e]) ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return y;
    }
    getActiveApplicationSubscriptions() {
        return O;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? E : g;
        return null == i ? null : null != (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return b;
    }
    getPreviousPremiumTypeSubscription() {
        return T;
    }
    getIsSubscriptionEligibleForReward() {
        return N;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return A;
    }
    getLastLazyPerkSync() {
        return C;
    }
}
_(V, 'displayName', 'SubscriptionStore');
let Z = new V(a.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: P,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: D,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: L,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: x,
    BILLING_SUBSCRIPTION_RESET: U,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: M,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: k,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: j,
    LOGOUT: U
});
