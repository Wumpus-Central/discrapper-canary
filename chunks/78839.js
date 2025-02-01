n.d(t, {
    ZP: () => w,
    sE: () => x
}),
    n(653041),
    n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(710845),
    o = n(301766),
    l = n(255078),
    u = n(314897),
    c = n(122289),
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
let p = null,
    h = null,
    m = null,
    g = null,
    E = null,
    v = !1,
    y = !1,
    I = null,
    T = !1,
    b = new s.Z('SubscriptionStore');
function S(e) {
    let { subscriptions: t } = e,
        n = {},
        i = {},
        r = [],
        a = [],
        s = u.default.getId();
    t.forEach((e) => {
        if (e.user_id !== s && !y) {
            b.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, c.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: s,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (y = !0);
            return;
        }
        let t = l.Q.createFromServer(e);
        (n[t.id] = t), D(t) && ((i[t.id] = t), t.type === d.NYc.GUILD && t.status !== d.O0b.ENDED && r.push(t), t.type === d.NYc.APPLICATION && t.status !== d.O0b.ENDED && a.push(t));
    }),
        (p = n),
        (h = i),
        (g = r),
        (E = a);
}
function A(e) {
    let { activeSubscriptions: t, record: n } = e,
        i = t.findIndex((e) => e.id === n.id);
    if (-1 === i) return [n, ...t];
    {
        let e = [...t];
        return D(n) && n.status !== d.O0b.ENDED ? (e[i] = n) : e.splice(i, 1), e;
    }
}
function N(e) {
    let { subscription: t } = e,
        n = l.Q.createFromServer(t);
    (p = {
        ...p,
        [n.id]: n
    }),
        D(n) &&
            (h = {
                ...h,
                [n.id]: n
            }),
        null != g &&
            n.type === d.NYc.GUILD &&
            (g = A({
                activeSubscriptions: g,
                record: n
            })),
        null != E &&
            n.type === d.NYc.APPLICATION &&
            (g = A({
                activeSubscriptions: E,
                record: n
            }));
}
function C(e) {
    let { subscription: t } = e;
    if (((v = !0), null != t)) {
        let e = u.default.getId();
        if (t.user_id !== e && !y) {
            b.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, c.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (v = !1),
                (y = !0);
            return;
        }
        m = l.Q.createFromServer(t);
    }
}
function R(e) {
    let { subscription: t } = e;
    if (((T = !0), null != t)) {
        let e = u.default.getId();
        if (t.user_id !== e && !y) {
            b.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, c.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (T = !1),
                (y = !0);
            return;
        }
        I = l.Q.createFromServer(t);
    }
}
function O() {
    (p = null), (h = null), (m = null), (g = null), (E = null), (v = !1), (y = !1), (I = null), (T = !1);
}
function D(e) {
    return e.status !== d.O0b.UNPAID;
}
function x(e) {
    let t = u.default.getId();
    return e.userId === t;
}
function L(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = n ? h : p;
    if (null == i) return null;
    for (let n in i) {
        let r = i[n];
        if (!x(r)) {
            if (!y) {
                let e = u.default.getId();
                b.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, c.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: r.id,
                            subscriptionUserId: r.userId
                        }
                    }),
                    (y = !0);
            }
            break;
        }
        if (r.type === e && (null == t || t(r))) return r;
    }
    return null;
}
class P extends (i = r.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != p;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return v;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return T;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return L(d.NYc.PREMIUM, (e) => !(0, o.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return L(d.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = L(d.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && f.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? h : p;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == p ? void 0 : p[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return g;
    }
    getActiveApplicationSubscriptions() {
        return E;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = new Set(e),
            r = n ? h : p;
        return null == r ? null : null !== (t = Object.values(r).find((e) => e.items.some((e) => i.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return m;
    }
    getPreviousPremiumTypeSubscription() {
        return I;
    }
}
_(P, 'displayName', 'SubscriptionStore');
let w = new P(a.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: S,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: N,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: R,
    BILLING_SUBSCRIPTION_RESET: O,
    LOGOUT: O
});
